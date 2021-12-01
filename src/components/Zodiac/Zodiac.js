import React from 'react'

import './Zodiac.css'

export default function Zodiac({ name, dates }) {
  return (
    <div className="zodiac">
      <img alt={name} height="75" src={`${process.env.PUBLIC_URL}/zodiac-imgs/${name}.png`} />
      <span className="name">{name}</span>
      <span className="dates">{dates}</span>
    </div>
  )
}
