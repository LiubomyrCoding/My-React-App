import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderFooter } from './HeaderFooter.jsx'
import { Section } from './Section.jsx'
import Reading from './Reading.jsx'
import NonCode from './NonCode.jsx'
import ExtraInfo from './ExtraInfo'
import './style.scss'


function App() {

  return (
    <div>
      <HeaderFooter></HeaderFooter>

      <Section></Section>

      <Reading></Reading>

      <NonCode></NonCode>

      <ExtraInfo></ExtraInfo>

      <HeaderFooter variant="footer"></HeaderFooter>
    </div>
  )
}

export default App
