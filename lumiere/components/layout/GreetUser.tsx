import React from "react"
import { Text } from "@chakra-ui/react"

type Props = {
    readonly username: String
  }

const GreetUser = ({ username } : Props) => (
  <Text textAlign='center' textColor={"subtle"}>
    <i>
      Welcome, <span style={{color:"#e3ae78"}}><b><u>{username}</u></b></span>
    </i>
  </Text>

  )

export default GreetUser