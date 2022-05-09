import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { WatchedMovie, WatchedMovieWithID } from "../../types/types"
import { db } from "../../util/firebase"

const movieQuery = query(collection(db, 'Users/'+{/*username*/}+"/MoviesList"))

const WatchedMovie = () => {
  const [movies, setMovies] = useState<WatchedMovieWithID[] | null>(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(movieQuery, (querySnapshot) => {
      const watchedMovies = querySnapshot.docs.map((movie) => movie.data() as WatchedMovie);
      const ids = querySnapshot.docs.map((movie) => movie.id);
      const watchedMoviesWithID = watchedMovies.map(movie => ({...movie, id: ids[watchedMovies.indexOf(movie)]}));
      setMovies(watchedMoviesWithID);
    })
    return unsubscribe
  }, [])

//   return (
//     <VStack spacing={4}>
//       <TaskAddControl />
//       {tasks ? <TaskList tasks={tasks} /> : <Spinner />}
//     </VStack>
//   )
}

export default WatchedMovie
