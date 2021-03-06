import React from 'react'

import './Main.css'

import { zodiacs } from '../../data.js'
import Zodiac from '../Zodiac/Zodiac.js'
import bagr from '../../background.jpg'

export default function Main() {
  return (
    <main className="main" style={{ backgroundImage: `url(${bagr})` }}>
      {zodiacs.map((zodiac) => (
        <Zodiac key={zodiac.name} {...zodiac} />
      ))}
    </main>
  )
}
