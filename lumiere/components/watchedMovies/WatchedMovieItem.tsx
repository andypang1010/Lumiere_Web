import { Text } from "@chakra-ui/react"
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react"
import { doc, updateDoc } from "firebase/firestore"
import React from "react"
import { WatchedMovieWithID } from "../../types/types"
import { db } from "../../util/firebase"

type Props = {
  readonly movie: WatchedMovieWithID
}



const WatchedMovieItem=({ movie: { id, movieName, watchDate, rating, comment, isHeart } }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const likeMovie = async () => {
    await updateDoc(doc(db, 'Users/'+{/*userID*/}+'/MovieesList', id), { isHeart: !isHeart });
  }

    return(
<>
      <Button onClick={onOpen} colorScheme={isHeart?'pink':'facebook'}><b>{movieName}</b></Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <Text>
              Movie name: {movieName};
              <u>{watchDate}</u>; <b>{rating}</b>; {comment}; {isHeart}; {id}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='whatsapp' onClick={likeMovie}>Like It!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}

export default WatchedMovieItem

