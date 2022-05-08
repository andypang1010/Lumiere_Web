export type WatchedMovie = {
  movieName: string
  watchDate: boolean
  rating: number
  comment: string
  isHeart: boolean
}

export type WatchedMovieWithID = WatchedMovie & {
  id: string
}

export type UnwatchedMovie = {
  movieName: string
}

export type UnwatchedMovieWithID = UnwatchedMovie & {
  id: string
}