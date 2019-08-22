import React from "react"

import "../css/main.css"
import "../scss/main.scss"

import Layout from "../components/layout"
import MainSection from "../components/MainSection"
import Features from "../components/Features"
import Screens from "../components/Screens"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection />
    <Features />
    <Screens />
  </Layout>
)

export default IndexPage