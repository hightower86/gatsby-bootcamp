import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const projects = () => (
  <Layout>
    <h1>Projects Page</h1>
    <p>Here will be projects</p>
    <p>
      To home<Link to="/">Contact me</Link>
    </p>
  </Layout>
)
export default projects
