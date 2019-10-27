import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>Hello. I'm a fullstack developer with 1 year experience</p>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
