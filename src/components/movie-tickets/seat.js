import React from "react"
import seatStyle from "./seat.module.scss"

const Seat = ({ status }) => {
  const toggleStatus = e => {
    e.target.classList.toggle(seatStyle.selected)
    console.log("aaaaa", e.target.classList)
  }
  return (
    <div className={seatStyle.seat} onClick={toggleStatus}>
      {}
    </div>
  )
}

export default Seat
