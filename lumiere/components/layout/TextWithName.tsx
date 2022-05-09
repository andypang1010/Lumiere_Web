import React from "react"
import { Text } from "@chakra-ui/react"

type Props = {
    readonly username: String
    readonly name: String
  }

const TextWithName=({ name, username } : Props) => (
  <Text textAlign='center' textColor='#797979'>
    Welcome, <span style={{color:'#e3ae78'}}><b>{name}</b>!</span> (<i>{username}</i>)
  </Text>

  )

export default TextWithName