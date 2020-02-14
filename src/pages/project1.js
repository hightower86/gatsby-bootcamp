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
  }
  const validateName = name => {
    const inputNameErrorMessage = nameRef.current.nextElementSibling

    if (!name) {
      console.log("fill the name")
      nameRef.current.className = pStyle.fail
      inputNameErrorMessage.textContent = "Fill the name please"
      inputNameErrorMessage.style.visibility = "visible"
    } else {
      nameRef.current.className = pStyle.success
      inputNameErrorMessage.style.visibility = "hidden"
    }
  }
  const validateEmail = e => {
    const inputEmailErrorMessage = emailRef.current.nextElementSibling

    if (!e) {
      console.log("elment", e)
      emailRef.current.className = pStyle.fail
      inputEmailErrorMessage.textContent = "Fill the email address please"
      inputEmailErrorMessage.style.visibility = "visible"
    } else {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (re.test(e.trim())) {
        //showSuccess(input)
        emailRef.current.className = pStyle.success
        inputEmailErrorMessage.style.visibility = "hidden"
      } else {
        emailRef.current.className = pStyle.fail
        inputEmailErrorMessage.textContent = "Email is not valid"
        inputEmailErrorMessage.style.visibility = "visible"
      }
    }
  }

  const onBtnClick = e => {
    const { name, email, password, password2 } = formFields
    console.dir(nameRef.current.nextElementSibling)
    validateName(name)
    validateEmail(email)

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
              ref={emailRef}
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={e => handleChange(e)}
            />
            <small>Error message</small>
          </div>
          <div className={pStyle.formgroup}>
            <label htmlFor="name">Password</label>
            <input
              ref={passRef}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={e => handleChange(e)}
            />
            <small>Error message</small>
          </div>
          <div className={pStyle.formgroup}>
            <label htmlFor="password2">Name</label>
            <input
              ref={pass2Ref}
              type="text"
              name="password2"
              id="password2"
              placeholder="Confirm password"
              onChange={e => handleChange(e)}
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
