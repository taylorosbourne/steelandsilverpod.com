import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexContainer from "../components/IndexContainer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexContainer />
  </Layout>
)

export default IndexPage
