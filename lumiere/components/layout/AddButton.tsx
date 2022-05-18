import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";

const AddButton=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
        <Button onClick={onOpen}>Add a movie</Button>
  
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a movie you watched!</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Movie Name:</FormLabel>
                <Input placeholder='Movie Name Here' />
              </FormControl>
              <FormControl>
                <FormLabel>Movie Name:</FormLabel>
                <Input placeholder='Movie name here' />
              </FormControl>
              <FormControl>
                <FormLabel>Watch Date:</FormLabel>
                <Input placeholder='When did you watch that movie?' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>How would you rate this movie?</FormLabel>
                <Input placeholder='Rating...' />
              </FormControl>
              <FormControl>
                <FormLabel>Your comment:</FormLabel>
                <Input placeholder='Any comments after watching it?' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button backgroundColor={'#e3ae78'} mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </> 
    )
}

export default AddButton;