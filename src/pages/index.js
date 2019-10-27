import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import indexStyle from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2 className={indexStyle.subtitle}>
        I'm Adel, a fullstack developer living in beautiful Saint-Petersburg
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
