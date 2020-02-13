import React, { useState, useRef } from "react"
import { Link } from "gatsby"

import pStyle from "./project.module.scss"

const Project1 = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const nameRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()
  const pass2Ref = useRef()

  const handleChange = e => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
    //console.log(formFields)
  }

  const onBtnClick = e => {
    const { name, email, password, password2 } = formFields
    const formGroupClassName = nameRef.current.offsetParent.className
    if (!name) {
      console.log("fill the name")
      //console.log()
      //nameRef.current.offsetParent.className = `${nameRef.current.offsetParent.className} fail`
      nameRef.current.className = pStyle.fail
    } else {
      nameRef.current.className = pStyle.success
      // nameRef.current.offsetParent.className = `${nameRef.current.offsetParent.className} success`
    }

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
              ref={nameRef}
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
