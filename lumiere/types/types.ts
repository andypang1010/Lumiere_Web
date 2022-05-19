export type Movie = {
  title: string
  date: string
  rating: number
  comment: string
}

export type MovieWithID = Movie & {
  id: string
}

export type User = {
  username: string
  name: string
}