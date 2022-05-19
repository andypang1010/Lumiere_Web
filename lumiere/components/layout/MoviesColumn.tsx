import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Movie from '../watchedMovies/Movie'

const MoviesColumn=() => (
    <SimpleGrid columns={1} spacing={10}>
        <Movie></Movie>
    </SimpleGrid>
)

export default MoviesColumn