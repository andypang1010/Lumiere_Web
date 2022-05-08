import React, { ReactNode } from "react"
import { Heading, Text } from "@chakra-ui/react"
import { User } from "../../types/types"

type Props = {
    name: String
  }

const TextWithName=({ name }:Props) => (
    <Text textAlign='center' textColor='#a2a2a2'>
    Welcome, {name}!
  </Text>
  )

export default TextWithName