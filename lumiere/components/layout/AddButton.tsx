import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea, useDisclosure } from "@chakra-ui/react";
import React from "react";

const AddButton=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        
        <><Button colorScheme={"facebook"} onClick={onOpen}>Add Movie</Button><Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Movie</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Title:</FormLabel>
                        <Input />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Date Watched:</FormLabel>
                        <Input placeholder='MM/DD/YYYY' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Rating:</FormLabel>
                        <NumberInput step={0.1} defaultValue={0.0} min={0.0} max={10.0} precision={1} placeholder={'0.0-10.0'}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>


                    <FormControl mt={4}>
                        <FormLabel>Comment:</FormLabel>
                        <Textarea/>
                    </FormControl>

                </ModalBody>

                <ModalFooter>
                    <Button backgroundColor={'#e3ae78'} mr={3}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal></>
    )
}

export default AddButton;