import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import WatchedMovie from '../watchedMovies/WatchedMovie'

const MoviesColumn=() => (
    <SimpleGrid columns={1} spacing={10}>
        <WatchedMovie></WatchedMovie>
    </SimpleGrid>
)

export default MoviesColumn