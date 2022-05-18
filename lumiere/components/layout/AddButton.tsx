import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";

const AddButton=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        
        <><Button onClick={onOpen}>Add a movie</Button><Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add a movie you watched!</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Title:</FormLabel>
                        <Input />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Date:</FormLabel>
                        <Input placeholder='MM/DD/YYYY' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Rating:</FormLabel>
                        <Input placeholder='0.0-10.0' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Comment:</FormLabel>
                        <Input />
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