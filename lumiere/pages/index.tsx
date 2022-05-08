import { Heading, Text } from "@chakra-ui/react"
import Footer from "../components/layout/Footer"
import Layout from "../components/layout/Layout"
import TextWithName from "../components/layout/TextWithName"
import TwoColumns from "../components/layout/TwoColumns"

const IndexPage = () => (
  <Layout title="Lumiere">
        <Heading my='4' size='4xl' textAlign='center' textColor='twitter.900'>
            Lumiere
        </Heading>
        <TextWithName name="KingBob"></TextWithName>
        <TwoColumns></TwoColumns>
    </Layout>
    

)

export default IndexPage