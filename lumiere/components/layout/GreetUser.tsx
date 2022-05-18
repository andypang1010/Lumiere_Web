import React from "react"
import { Text } from "@chakra-ui/react"

type Props = {
    readonly username: string
  }

const GreetUser = ({ username } : Props) => (
  <Text textAlign='center' textColor='#797979'>
    Welcome, <span style={{color:'#e3ae78'}}><b>{username}</b>!</span>
  </Text>

  )

export default GreetUser