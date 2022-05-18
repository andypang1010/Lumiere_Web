import { Button, Divider, Heading, Spinner, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useAuth } from "../components/auth/AuthUserProvider";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout"
import GreetUser from "../components/layout/GreetUser"
import MoviesColumn from "../components/layout/MoviesColumn"
import { db, signInWithGoogle, signOutFirebase } from "../util/firebase";

// const userDocumentRef = doc(db, "Users", "kingbob1");
// const userSnapshot = await getDoc(userDocumentRef);
// const queryName=query();

function IndexPage() {
const [userName, setUserName]=useState<String>('kingBob');
// useEffect(()=>{
//   const name=onSnapshot(queryName,(querySnapshot)=>{
//     const username="";//...
//     setUserName(username);
//   })

// })
const { user, loading } = useAuth()
  return (
  <>
        <Layout title="Lumiere">
      <VStack spacing={4}>
        {loading ? (
          <Spinner />
        ) : user ? (
          <><Heading my='4' size='4xl' textAlign='center' textColor="#495997">
                Lumiere
              </Heading>
              <GreetUser username={userName}></GreetUser>
              <Divider></Divider>
              <MoviesColumn></MoviesColumn>
              <Footer />
              <Button onClick={signOutFirebase}>Sign Out</Button>
              </>
        ) : (
          <><Heading my='4' size='4xl' textAlign='center' textColor="#495997">
          Lumiere
        </Heading>
          <Button
                  _focusVisible={{ shadow: "outline" }}
                  _focus={{ shadow: "none" }}
                  colorScheme={"facebook"}
                  onClick={signInWithGoogle}
                >
                  Sign In
                </Button></>
        )}
      </VStack>
    </Layout></>
  )
}


export default IndexPage