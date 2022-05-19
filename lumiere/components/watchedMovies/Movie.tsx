import { Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Movie as Movie, MovieWithID } from "../../types/types"
import { db } from "../../util/firebase"
import MovieList from "./MovieList"

const moviesQuery = query(collection(db, "movies"));

const Movie = () => {
  const [movies, setMovies] = useState<MovieWithID[] | null>(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(moviesQuery, (querySnapshot) => {
      const movies = querySnapshot.docs.map((movie) => movie.data() as Movie);
      const ids = querySnapshot.docs.map((movie) => movie.id);
      const moviesWithID = movies.map(movie => ({...movie, id: ids[movies.indexOf(movie)]}));
      setMovies(moviesWithID);
    })
    return unsubscribe
  }, [])

  return (
    <VStack spacing={4}>
      {movies ? <MovieList movies={movies} /> : <Spinner />}
    </VStack>
  )
}

export default Movie
