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
    //const inputNameErrorMessage = nameRef.current.nextElementSibling

    if (!name) {
      showError(nameRef,"Fill the name please")
    } 
      checkLength(name,nameRef,4,15)
      
  }
  const validateEmail = e => {
    //const inputEmailErrorMessage = emailRef.current.nextElementSibling

    if (!e) {
     showError(emailRef,"Fill the email address please")
    } else {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (re.test(e.trim())) {
        showSuccess(emailRef)
        
      } else {
        showError(emailRef,'Email is not valid')
      }
    }
  }

  const showError = (inputRef,message) => {
    inputRef.current.className = pStyle.fail
    const inputErrorMessage = inputRef.current.nextElementSibling
    inputErrorMessage.textContent = message
    inputErrorMessage.style.visibility = "visible"
  }

  const showSuccess = (inputRef) => {
    inputRef.current.className = pStyle.success
    const inputErrorMessage = inputRef.current.nextElementSibling
   // inputRef.textContent = message
   inputErrorMessage.style.visibility = "hidden"
  }

  const onBtnClick = e => {
    const { name, email, password, password2 } = formFields
    console.dir(nameRef.current.nextElementSibling)
    validateName(name)
    validateEmail(email)

    console.log(name)
  }

  const checkLength = (input, inputRef, minLength,maxLength) => {
    if (input.length > maxLength || input.length < minLength) {
      showError(inputRef, `Length of input must be less then ${maxLength} and more then ${minLength}`)
    } else {
      showSuccess(inputRef)
    }
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
