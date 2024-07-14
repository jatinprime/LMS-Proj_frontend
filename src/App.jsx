import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import HomeLayout from './Layouts/HomeLayout'

function App() {
  

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes> */}
      {/* <Footer/> */}
      {/* <HomeLayout/> */}
      <HomePage/>
    </>
  )
}

export default App;
