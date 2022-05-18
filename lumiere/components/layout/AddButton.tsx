import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";

const AddButton=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
<<<<<<< Updated upstream
        <Button onClick={onOpen}>Add a movie</Button>
=======
        <Button onClick={onOpen}>Add Movie</Button>
>>>>>>> Stashed changes
  
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
<<<<<<< Updated upstream
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
=======
            <ModalHeader>Add Movie</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input placeholder='Movie name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Date</FormLabel>
                <Input placeholder='Date (MM/DD/YYYY)' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Rating</FormLabel>
                <Input placeholder='Rating (0.0-10.0)' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Comment</FormLabel>
                <Input placeholder='Comment' />
>>>>>>> Stashed changes
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
<<<<<<< Updated upstream
              <Button colorScheme='blue' mr={3}>
                Add
=======
              <Button backgroundColor={'#e3ae78'} mr={3}>
                Save
>>>>>>> Stashed changes
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </> 
    )
}

export default AddButton;