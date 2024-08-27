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
  const user = true;
  return (
    <>
      <Router>
         <TopBar/>
         <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/singlePage' element={user ? <SinglePage/> : <LoginPage/>} />
          <Route path='/write' element={user ? <Write/> : <LoginPage/>} />
          <Route path='/settingPage' element={user ? <SettingPage/> : <LoginPage/>} />
          <Route path='/loginPage' element={user ? <LoginPage/>: <RegisterPage/>} />
          <Route path='/registerPage' element={<RegisterPage/>} />
         </Routes>
      </Router>
    </>
  )
}

export default App
