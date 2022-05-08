import { Text } from "@chakra-ui/react"
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react"
import { deleteDoc } from "firebase/firestore"
import React from "react"
import { WatchedMovieWithID } from "../../types/types"

type Props = {
  readonly movie:WatchedMovieWithID
}


const WatchedMovieItem=({movie:{movieName,watchDate,rating,comment,isHeart,id}}:Props)=>{
  const { isOpen, onOpen, onClose } = useDisclosure()


    return(
<>
      <Button onClick={onOpen}>{movieName}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Movie name: {movieName};
              {watchDate}; {rating}; {comment}; {isHeart}; {id}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}

export default WatchedMovieItem

