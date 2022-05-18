import { Button, Divider, Heading } from "@chakra-ui/react"
import { doc, getDoc, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../components/auth/AuthUserProvider";
import Layout from "../components/layout/Layout"
import TextWithName from "../components/layout/TextWithName"
import TwoColumns from "../components/layout/TwoColumns"
import { db, signInWithGoogle } from "../util/firebase";

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
    <><Button onClick={signInWithGoogle}>Sign In</Button><Layout title="Lumiere">
      <Heading my='4' size='4xl' textAlign='center' textColor="#495997">
        Lumiere
      </Heading>

      <TextWithName username={userName}></TextWithName>
      <Divider></Divider>
      <TwoColumns></TwoColumns>
    </Layout></>
  )
}


export default IndexPage