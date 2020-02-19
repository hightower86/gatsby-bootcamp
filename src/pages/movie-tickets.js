import React from "react"
import { Link } from "gatsby"

import mStyle from "./movie-tickets.module.scss"
import pStyle from "./form-validator.module.scss"

const MovieTickets = () => {
  return (
    <div className={mStyle.wrap}>
      <Link to="/projects" className={pStyle.back}>
        go back
      </Link>
      <h2>Movie Tickets</h2>
    </div>
  )
}

export default MovieTickets
