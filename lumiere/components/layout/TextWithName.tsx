import React from "react"
import { Text } from "@chakra-ui/react"

type Props = {
    readonly username: String
    readonly name: String
  }

const TextWithName=({ name, username } : Props) => (
  <Text textAlign='center' textColor='lightskyblue'>
    Welcome, <span style={{color:'wheat'}}>{name}!</span> (<i>{username}</i>)
  </Text>

  )

export default TextWithName