import { Text, VStack } from "@chakra-ui/react"
import { WatchedMovieWithID } from "../../types/types"
import WatchedMovieItem from "./WatchedMovieItem"



type Props = {
  readonly tasks: WatchedMovieWithID[]
}

const TaskList = ({ tasks }: Props) => {
  return (
    <VStack>
      {tasks.length ? (
        tasks.map((task) => <WatchedMovieItem key={task.id} movie={task} />)
      ) : (
        <Text>The list is looking kinda empty 👀</Text>
      )}
    </VStack>
  )
}

export default TaskList