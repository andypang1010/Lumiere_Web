import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
// other imports
import AuthUserProvider from '../components/auth/AuthUserProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </ChakraProvider>
  );
}

export default App;