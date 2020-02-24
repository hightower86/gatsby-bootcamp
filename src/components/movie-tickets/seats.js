import React from "react"

import Seat from "./seat"
import seatsStyle from "./seats.module.scss"

const Seats = ({ seats }) => {
  return (
    <div className={seatsStyle.seats}>
      {seats.map(row => {
        return (
          <div className={seatsStyle.row}>
            {row.map(seat => {
              return <Seat key={seat.num} status={seat.seat} />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Seats
