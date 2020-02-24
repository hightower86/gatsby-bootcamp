import React from "react"
import seatStyle from "./seat.module.scss"

const Seat = ({ status }) => {
  const toggleStatus = e => {
    e.target.classList.toggle(seatStyle.na)
    console.log("aaaaa", e.target.classList)
  }
  return (
    <div className={seatStyle.seat} onClick={toggleStatus}>
      {status}
    </div>
  )
}

export default Seat
