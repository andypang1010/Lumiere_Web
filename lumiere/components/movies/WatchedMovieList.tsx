import { Text, VStack } from "@chakra-ui/react"
import { WatchedMovieWithID } from "../../types/types"
import WatchedMovieItem from "./WatchedMovieItem"



type Props = {
  readonly movies: WatchedMovieWithID[]
}

const MoviesList = ({ movies }: Props) => {
  return (
    <VStack>
      {movies.length ? (
        movies.map((movie) => <WatchedMovieItem key={movie.id} movie={movie} />)
      ) : (
        <Text>The list is looking kinda empty 👀</Text>
      )}
    </VStack>
  )
}

export default MoviesList