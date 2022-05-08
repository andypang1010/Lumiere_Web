import { Heading, Text } from "@chakra-ui/react"
import { doc, getDoc } from "@firebase/firestore"
import Layout from "../components/layout/Layout"
import TextWithName from "../components/layout/TextWithName"
import TwoColumns from "../components/layout/TwoColumns"
import { User } from "../types/types"
import { db } from "../util/firebase"

type Props = {
  readonly user: User
}

const userRef = doc(db, "Users", "kingbob1");
const docSnap = await getDoc(userRef);

if (docSnap.exists()) {
  console.log("User id:", docSnap.id);
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

const IndexPage = async () => (
  <Layout title="Lumiere">
        <Heading my='4' size='4xl' textAlign='center' textColor="#495997">
            Lumiere
        </Heading>
        <TextWithName name={docSnap.id}></TextWithName>
        <TwoColumns></TwoColumns>
    </Layout>
)

export default IndexPage