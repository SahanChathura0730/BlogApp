import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import TopBar from './component/topBar/TopBar'
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <>
      <Router>
        <TopBar/>
        <HomePage/>
      </Router>
    </>
  )
}

export default App
