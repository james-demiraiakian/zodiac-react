import React from 'react'

import './Zodiac.css'

export default function Zodiac({ name, dates, top, left }) {
  top = top + 'vw'
  left = left + 'vw'
  return (
    <div className="zodiac" style={{ top, left }}>
      <img className="img" alt={name} src={`${process.env.PUBLIC_URL}/zodiac-imgs/${name}.png`} />
      <span className="name">{name}</span>
      <span className="dates">{dates}</span>
    </div>
  )
}
