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
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/singlePage' element={<SinglePage/>} />
          <Route path='/write' element={<Write/>} />
          <Route path='/settingPage' element={<SettingPage/>} />
          <Route path='/loginPage' element={<LoginPage/>} />
          <Route path='/registerPage' element={<RegisterPage/>} />
         </Routes>
      </Router>
    </>
  )
}

export default App
