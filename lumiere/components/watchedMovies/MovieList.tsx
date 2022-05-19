import { Text, VStack } from "@chakra-ui/react"
import { MovieWithID } from "../../types/types"
import MovieItem from "./MovieItem"



type Props = {
  readonly movies: MovieWithID[]
}

const MovieList = ({ movies }: Props) => {
  return (
    <VStack>
      {movies.length ? (
        movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
      ) : (
        <Text>Add movies here...</Text>
      )}
    </VStack>
  )
}

export default MovieList