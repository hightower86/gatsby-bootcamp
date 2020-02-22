import React from "react"
import { Link } from "gatsby"

import Seats from "../components/movie-tickets/seats"

import mStyle from "./movie-tickets.module.scss"
import pStyle from "./form-validator.module.scss"

const seats = [
  { num: 1, status: 0 },
  { num: 2, status: 0 },
  { num: 3, status: 0 },
  { num: 4, status: 0 },
  { num: 6, status: 0 },
  { num: 7, status: 0 },
  { num: 8, status: 0 },
  { num: 9, status: 0 },
  { num: 10, status: 0 },
  { num: 11, status: 0 },
  { num: 12, status: 0 },
  { num: 13, status: 0 },
  { num: 14, status: 0 },
  { num: 16, status: 0 },
  { num: 17, status: 0 },
  { num: 18, status: 0 },
  { num: 19, status: 0 },
  { num: 20, status: 0 },
  { num: 21, status: 0 },
  { num: 22, status: 0 },
  { num: 23, status: 0 },
  { num: 24, status: 0 },
  { num: 26, status: 0 },
  { num: 27, status: 0 },
  { num: 28, status: 0 },
  { num: 29, status: 0 },
  { num: 30, status: 0 },
]

const MovieTickets = () => {
  return (
    <div className={mStyle.wrap}>
      <Link to="/projects" className={pStyle.back}>
        go back
      </Link>
      <h2>Movie Tickets</h2>
      <div className={mStyle.container}>
        <h3>Title 3</h3>

        <div>
          <span style={{ marginRight: "5px" }}>Movie:</span>
          <select name="" id="">
            <option value="back">Back to the future</option>
            <option value="green">Green mile</option>
            <option value="spider">Spiderman</option>
          </select>
        </div>

        <div className={mStyle.screen}></div>
        <Seats seats={seats} />
      </div>
    </div>
  )
}

export default MovieTickets
