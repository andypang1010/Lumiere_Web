import { Button, Heading, Spinner, VStack } from "@chakra-ui/react"
// import { useAuth } from "../components/auth/AuthUserProvider"
import { signInWithGoogle } from "../util/firebase"

const SignInPage = () => {
    // const { user, loading } = useAuth()
    return (
        <Button
            _focusVisible={{ shadow: "outline" }}
            _focus={{ shadow: "none" }}
            colorScheme={"whiteAlpha"}
            onClick={signInWithGoogle}
        >
            Sign In
        </Button>
    )
  }