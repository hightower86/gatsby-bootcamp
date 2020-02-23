import React from "react"
import { Link } from "gatsby"

import Seats from "../components/movie-tickets/seats"

import mStyle from "./movie-tickets.module.scss"
import pStyle from "./form-validator.module.scss"

const seats = [
  [
    { row: 1, seat: 1, status: 0 },
    { row: 1, seat: 2, status: 0 },
    { row: 1, seat: 3, status: 0 },
    { row: 1, seat: 4, status: 0 },
    { row: 1, seat: 5, status: 0 },
    { row: 1, seat: 6, status: 0 },
    { row: 1, seat: 7, status: 0 },
    { row: 1, seat: 8, status: 0 },
  ],

  [
    { row: 2, seat: 1, status: 0 },
    { row: 2, seat: 2, status: 0 },
    { row: 2, seat: 3, status: 0 },
    { row: 2, seat: 4, status: 0 },
    { row: 2, seat: 5, status: 0 },
    { row: 2, seat: 6, status: 0 },
    { row: 2, seat: 7, status: 0 },
    { row: 2, seat: 8, status: 0 },
  ],

  [
    { row: 3, seat: 1, status: 0 },
    { row: 3, seat: 2, status: 0 },
    { row: 3, seat: 3, status: 0 },
    { row: 3, seat: 4, status: 0 },
    { row: 3, seat: 5, status: 0 },
    { row: 3, seat: 6, status: 0 },
    { row: 3, seat: 7, status: 0 },
    { row: 3, seat: 8, status: 0 },
  ],

  [
    { row: 4, seat: 1, status: 0 },
    { row: 4, seat: 2, status: 0 },
    { row: 4, seat: 3, status: 0 },
    { row: 4, seat: 4, status: 0 },
    { row: 4, seat: 5, status: 0 },
    { row: 4, seat: 6, status: 0 },
    { row: 4, seat: 7, status: 0 },
    { row: 4, seat: 8, status: 0 },
  ],

  [
    { row: 5, seat: 1, status: 0 },
    { row: 5, seat: 2, status: 0 },
    { row: 5, seat: 3, status: 0 },
    { row: 5, seat: 4, status: 0 },
    { row: 5, seat: 5, status: 0 },
    { row: 5, seat: 6, status: 0 },
    { row: 5, seat: 7, status: 0 },
    { row: 5, seat: 8, status: 0 },
  ],
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
