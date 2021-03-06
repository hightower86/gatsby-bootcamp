import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import projectsStyles from "./projects.module.scss"

const projects = () => (
  <Layout>
    <div className={projectsStyles.projects}>
      <div className={projectsStyles.card}>
        <h3>Mini projects</h3>
        <ul className="pList">
          <li className="pItem">
            <Link to="/form-validator">Form validator</Link>
          </li>
          <li className="pItem">
            <Link to="/movie-tickets">Movie tickets</Link>
          </li>
          <li className="pItem">project3</li>
        </ul>
      </div>
      <div className={projectsStyles.card}>
        <h3>Large projects</h3>
        <p>dev connector</p>
      </div>
    </div>
  </Layout>
)
export default projects
