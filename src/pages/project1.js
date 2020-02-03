import React from "react"
import { Link } from "gatsby"

import pStyle from "./project.module.scss"

const Project1 = () => {
  return (
    <div className={pStyle.wrap}>
      <h2>FORM VALIDATOR</h2>
      <Link to="/projects" className={pStyle.back}>
        go back
      </Link>
      <div className={pStyle.container}>
        <form id="form" className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input type="text" name="" id="" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Project1
