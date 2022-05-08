import { Stack, HStack, VStack, SimpleGrid, Box } from '@chakra-ui/react'
import { Heading, Text } from "@chakra-ui/react"
import React from 'react'

const TwoColumns=()=>(
    <SimpleGrid columns={2} spacing={10}>
        <VStack>  
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
        </VStack>
        <VStack>  
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
  </VStack>
  {/* <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box> */}
</SimpleGrid>
)

export default TwoColumns