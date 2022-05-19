import { border, Divider, Text } from "@chakra-ui/react"
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react"
import React from "react"
import { MovieWithID } from "../../types/types"

type Props = {
  readonly movie: MovieWithID
}

const MovieItem=({ movie: { title, date, rating, comment } }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

    return(
      <>
        <Button 
          onClick={onOpen}
          borderWidth={2}
          borderColor={"black"}
          backgroundColor={"transparent"}
          _hover={{borderColor: "#e3a15d", textColor: "#e3a15d"}}>
            <b>{title} &#8594;</b>
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />

          <ModalContent>
            <ModalHeader>{title} - {date}</ModalHeader>
            <ModalCloseButton />
            <Divider></Divider>
            <ModalBody>
              <Text>
                <b>Rating:</b> {rating}
              </Text>
              <br></br>
              <Text>
                <b>Comment:</b> <i><q>{comment}</q></i>
              </Text>
              <br></br>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default MovieItem

