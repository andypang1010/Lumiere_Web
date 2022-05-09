import {VStack, SimpleGrid, Box } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import React from 'react'
import WatchedMovie from '../watchedMovies/WatchedMovie'

const TwoColumns=() => (
    <SimpleGrid columns={2} spacing={10}>
        <WatchedMovie></WatchedMovie>
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