import React from 'react'

import './Zodiac.css'

export default function Zodiac(props) {
  return (
    <div className="zodiac">
      <img height="75" src={`${process.env.PUBLIC_URL}/zodiac-imgs/${props.name}.svg`} />
      <span className="name">{props.name}</span>
      <span className="dates">{props.dates}</span>
    </div>
  )
}
