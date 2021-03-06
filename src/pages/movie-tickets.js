import React from "react"
import { Link } from "gatsby"

import Seats from "../components/movie-tickets/seats"

import mStyle from "./movie-tickets.module.scss"
import pStyle from "./form-validator.module.scss"
import seatStyle from "../components/movie-tickets/seat.module.scss"

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
        <div>
          <span style={{ marginRight: "5px" }}>Pick a movie:</span>
          <select name="" id="">
            <option value="back">Back to the future</option>
            <option value="green">Green mile</option>
            <option value="spider">Spiderman</option>
          </select>
        </div>
        <div className={mStyle.showcase}>
          <ul className={mStyle.cases}>
            <li className={mStyle.case}>
              <div className={[seatStyle.seat, seatStyle.na].join(" ")}></div>
              <small>n/a</small>
            </li>
            <li className={mStyle.case}>
              <div
                className={[seatStyle.seat, seatStyle.selected].join(" ")}
              ></div>
              <small>selected</small>
            </li>
            <li className={mStyle.case}>
              <div
                className={[seatStyle.seat, seatStyle.occupied].join(" ")}
              ></div>
              <small>occupied</small>
            </li>
          </ul>
        </div>
        <div className={mStyle.screen}></div>
        <Seats seats={seats} />
      </div>
    </div>
  )
}

export default MovieTickets
