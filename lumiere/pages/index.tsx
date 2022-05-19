import { Button, Divider, Heading, Spinner, VStack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useAuth } from "../components/auth/AuthUserProvider";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout"
import GreetUser from "../components/layout/GreetUser"
import MoviesColumn from "../components/layout/MoviesColumn"
import { db, signInWithGoogle, signOutFirebase } from "../util/firebase";
import { collection, doc, getDoc, query, setDoc } from "firebase/firestore";
import AddButton from "../components/layout/AddButton";

function IndexPage() {

  const { user, loading } = useAuth()
  return (
    <>
    <Layout title="Lumiere">
      <VStack spacing={4}>
        {loading ? (
          <Spinner />
        ) : user ? (
          <>
            <Heading my='4' size='4xl' textAlign='center' textColor={"#3f5793"}>Lumiere</Heading>
            <GreetUser username={user.email.substring(0,user.email.lastIndexOf("@"))}></GreetUser>
            <AddButton></AddButton>

            <Divider/>
            
            <MoviesColumn/>
            <Divider/>
            <Footer />
            <Button onClick={signOutFirebase}>Sign Out</Button>


          </>
        ) : (
          <>
            <Heading my='4' size='4xl' textAlign='center' textColor={"#3f5793"}>Lumiere</Heading>
            <Text fontSize={"medium"} textAlign="center"><q><i>The only place you will ever need to store all your favorite films.</i></q></Text>
            <Divider></Divider>
            <Button
              _focusVisible={{ shadow: "outline" }}
              _focus={{ shadow: "none" }}
              backgroundColor={"#e3ae78"}
              _hover={{ bg: "#e3a15d" }}
              textColor={"black"}
              onClick={signInWithGoogle}
            >
              Sign In
            </Button>
            <Divider/>
            <Footer/>
          </>
        )}
      </VStack>
    </Layout></>
  )
}


export default IndexPage