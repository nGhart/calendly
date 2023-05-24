import React from 'react'
import Navbars from './Components/Navbars'
import Routing from './Routing'
import { BrowserRouter } from "react-router-dom"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbars/>
      <Routing/>
    </BrowserRouter>
  )
}

export default App