import { Heading } from "@chakra-ui/react"
import { doc, getDoc } from "firebase/firestore";
import Layout from "../components/layout/Layout"
import TextWithName from "../components/layout/TextWithName"
import TwoColumns from "../components/layout/TwoColumns"
import { db } from "../util/firebase";

const userDocumentRef = doc(db, "Users", "kingbob1");
 const userSnapshot = getDoc(userDocumentRef);

function IndexPage() {
  return (
    <Layout title="Lumiere">
      <Heading my='4' size='4xl' textAlign='center' textColor="#495997">
          Lumiere
      </Heading>

      <TextWithName name="Haoxuan" username={"hz252"}></TextWithName>

      <TwoColumns></TwoColumns>
    </Layout>
  )
}


export default IndexPage