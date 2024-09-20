import { useState } from 'react'
import { BrowserRouter as Route , Router , Routes } from 'react-router-dom'
import './App.css'
import TopBar from './component/topBar/TopBar'

function App() {
  return (
    <>
      <Router>
        <TopBar/>
      </Router>
    </>
  )
}

export default App
