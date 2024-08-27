import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import TopBar from './component/topBar/TopBar'
import HomePage from './pages/homePage/HomePage';
import SinglePage from './pages/singlePage/SinglePage'
import Write from './pages/write/Write';

function App() {
  return (
    <>
      <Router>
        {/* <TopBar/>
        <HomePage/> */}
        {/* <SinglePage /> */}
        <Write />
      </Router>
    </>
  )
}

export default App
