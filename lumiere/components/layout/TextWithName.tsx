import React, { ReactNode } from "react"
import { Heading, Text } from "@chakra-ui/react"
type Props = {
    children?: ReactNode
    name:String
  }

const TextWithName=({children, name}:Props) => (
    <Text textAlign='center' textColor='burlywood'>
    Welcome, {name}!
  </Text>
  )

export default TextWithName