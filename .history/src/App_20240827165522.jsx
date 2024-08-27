import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import TopBar from './component/topBar/TopBar'
import HomePage from './pages/homePage/HomePage';
import SinglePage from './pages/singlePage/SinglePage'
import Write from './pages/write/Write';
import SettingPage from './pages/settingPage/SettingPage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';

function App() {
  return (
    <>
      <Router>
         <TopBar/>
         <Routes>
          <Route path='/'><HomePage></HomePage></Route>

         </Routes>
      </Router>
    </>
  )
}

export default App
