import React, { useState } from "react"
import { Link } from "gatsby"

import pStyle from "./project.module.scss"

const Project1 = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
    //console.log(formFields)
  }

  const onBtnClick = e => {
    const { name, email, password, password2 } = formFields
    console.log(name)
  }

  return (
    <div className={pStyle.wrap}>
      <h2>FORM VALIDATOR</h2>
      <Link to="/projects" className={pStyle.back}>
        go back
      </Link>
      <div className={pStyle.container}>
        <form
          id="form"
          className="form"
          autoComplete="off"
          onSubmit={e => e.preventDefault()}
        >
          <div className={pStyle.formgroup}>
            <label htmlFor="name">Name</label>
            <input
              //className={pStyle.success}
              type="text"
              name="name"
              id="name"
              onChange={e => handleChange(e)}
              placeholder="Enter your name"
            />
            <small>Error message</small>
          </div>
          <div className={pStyle.formgroup}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <small>Error message</small>
          </div>
          <div className={pStyle.formgroup}>
            <label htmlFor="name">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
            <small>Error message</small>
          </div>
          <div className={pStyle.formgroup}>
            <label htmlFor="password2">Name</label>
            <input
              type="text"
              name="password2"
              id="password2"
              placeholder="Confirm password"
            />
            <small>Error message</small>
          </div>

          <button onClick={onBtnClick}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Project1
