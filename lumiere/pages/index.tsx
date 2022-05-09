import { Heading } from "@chakra-ui/react"
import { collection, doc, getDoc, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout"
import TextWithName from "../components/layout/TextWithName"
import TwoColumns from "../components/layout/TwoColumns"
import { db } from "../util/firebase";

const usersQuery = query(collection(db, "Users"));

function IndexPage() {
const [username, setUsername]=useState<String>('');

useEffect(()=>{
  const unsubscribe = onSnapshot(usersQuery,(querySnapshot)=>{
    const username = "blablabla"
    setUsername(username);
  })

})

  return (
    <Layout title="Lumiere">
      <Heading my='4' size='4xl' textAlign='center' textColor="#495997">
          Lumiere
      </Heading>

      <TextWithName username={username}></TextWithName>

      <TwoColumns></TwoColumns>
    </Layout>
  )
}


export default IndexPage