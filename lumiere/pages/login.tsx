import { Button, Heading, Spinner, VStack } from "@chakra-ui/react"
// import { useAuth } from "../components/auth/AuthUserProvider"
import { signInWithGoogle } from "../util/firebase"

const SignInPage = () => {
    // const { user, loading } = useAuth()
    return (
        <Button
            onClick={signInWithGoogle}
        >
            Sign In
        </Button>
    )
  }