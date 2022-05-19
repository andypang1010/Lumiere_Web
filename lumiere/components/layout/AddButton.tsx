import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea, useDisclosure, VStack }from "@chakra-ui/react";
import React, { FormEventHandler, useState }from "react";
import { Movie }from "../../types/types";
import { collection }from "@firebase/firestore";
import { db }from "../../util/firebase";
import { addDoc }from "firebase/firestore";

const AddButton=()=>{
    const { isOpen, onOpen, onClose }= useDisclosure()

    const [titleInput, setTitleInput] = useState("")
    const [dateInput, setDateInput] = useState("")
    const [ratingInput, setRatingInput] = useState(0.0)
    const [commentInput, setCommentInput] = useState("")

    const addMovie: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        if (titleInput === "" || dateInput === "") return

        const movie: Movie = {
            title: titleInput,
            date: dateInput,
            rating: ratingInput,
            comment: commentInput,
        }

        await addDoc(collection(db, "movies"), {
            title: movie.title, 
            date: movie.date, 
            rating: movie.rating, 
            comment: movie.comment
        });

        setTitleInput("")
        setDateInput("")
        setRatingInput(0.0)
        setCommentInput("")
    }

    return (
        <>
            <Button 
                backgroundColor={"#e3ae78"}
                _hover={{bg: "#e3a15d"}}
                onClick={onOpen}>
                    Add Movie
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Movie</ModalHeader>
                    <form onSubmit={addMovie}>
                        <ModalCloseButton />
                        <ModalBody pb={4}>
                            <FormControl isRequired={true}>
                                <FormLabel>Title:</FormLabel>
                                <Input 
                                    value={titleInput}
                                    isRequired={true}
                                    type={"text"}
                                    onChange={(e) => setTitleInput(e.target.value)}
                                />
                            </FormControl>
                            <br></br>

                            <FormControl isRequired={true}>
                                <FormLabel>Date Watched:</FormLabel>
                                <Input 
                                    value={dateInput}
                                    isRequired={true}
                                    type={"date"}
                                    onChange={(e) => setDateInput(e.target.value)}
                                />
                            </FormControl>

                            <br></br>

                            <FormControl isRequired={true}>
                                <FormLabel>Rating:</FormLabel>
                                <NumberInput 
                                    value={ratingInput}
                                    isRequired={true}
                                    min={0.0}
                                    max={10.0}
                                    step={0.1}
                                    precision={1}
                                    placeholder={'0.0-10.0'}
                                    onChange={(e) => setRatingInput(parseFloat(e))}
                                >
                                    <NumberInputField/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                            <br></br>

                            <FormControl> 
                                <FormLabel>Comment:</FormLabel>
                                <Textarea 
                                    value={commentInput}
                                    isRequired={false}
                                    onChange={(e) => setCommentInput(e.target.value)}
                                />
                            </FormControl>
                         
                        </ModalBody>

                        <VStack align={"center"}>
                        <ModalFooter>
                            <Button 
                                backgroundColor={'#e3ae78'}
                                _hover={{ bg: "#e3a15d" }}
                                mr={3}
                                type={"submit"}
                                alignSelf={"center"}>
                                Add
                            </Button>
                        </ModalFooter>
                        </VStack>
                    </form>
                    
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddButton;