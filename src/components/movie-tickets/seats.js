import React from "react"

import seatsStyle from "./seats.module.scss"

const Seats = ({ seats }) => {
  return (
    <div className={seatsStyle.seats}>
      {seats.map(row => {
        return row.map(seat => {
          return (
            <div key={seat.num} className={seatsStyle.seat}>
              {seat.status}
            </div>
          )
        })
      })}
    </div>
  )
}

export default Seats
