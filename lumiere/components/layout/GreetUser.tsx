import React from "react"
import { Text } from "@chakra-ui/react"

type Props = {
    readonly userID: String
    readonly name: String
  }

const GreetUser = ({ userID, name } : Props) => (
  <Text textAlign='center' textColor={"subtle"}>
      Welcome, <b>{name}</b> ({<span style={{color:"#e3ae78"}}><b><u><i>{userID}</i></u></b></span>})
  </Text>

  )

export default GreetUser