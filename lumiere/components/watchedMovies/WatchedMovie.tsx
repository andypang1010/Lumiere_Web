import { Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { WatchedMovie, WatchedMovieWithID } from "../../types/types"
import { db } from "../../util/firebase"
import WatchedMovieList from "./WatchedMovieList"

const moviesQuery = query(collection(db, "Users/kingbob1/MoviesList"));

const WatchedMovie = () => {
  const [watchedMovies, setMovies] = useState<WatchedMovieWithID[] | null>(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(moviesQuery, (querySnapshot) => {
      const watchedMovies = querySnapshot.docs.map((movie) => movie.data() as WatchedMovie);
      const ids = querySnapshot.docs.map((movie) => movie.id);
      const watchedMoviesWithID = watchedMovies.map(movie => ({...movie, id: ids[watchedMovies.indexOf(movie)]}));
      setMovies(watchedMoviesWithID);
    })
    return unsubscribe
  }, [])

  return (
    <VStack spacing={4}>
   
      {watchedMovies ? <WatchedMovieList movies={watchedMovies} /> : <Spinner />}
    </VStack>
  )
}

export default WatchedMovie
