import { Box, Divider, Text } from "@chakra-ui/react"
import React from "react"
import AddButton from "./AddButton"

const Footer = () => (
  <Box as="footer" px={4}>
    <AddButton></AddButton>
    <Divider my={4} />
    <a href = "https://github.com/andypang1010/Lumiere">
      <Text fontSize="medium" color="subtle" textAlign="center">
        Created by Andy Pang (cp487) & Haoxuan Porridge Zou (hz252)
      </Text>
    </a>
  </Box>
)

export default Footer