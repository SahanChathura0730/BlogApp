import { useState } from 'react'
import { BrowserRouter, Route , Router , Routes } from 'react-router-dom'
import './App.css'
import Topbar from './component/topBar/TopBar'

function App() {
  return (
    <>
      <Router>
        <Topbar/>
      </Router>
    </>
  )
}

export default App
