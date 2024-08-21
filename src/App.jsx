import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import HomeLayout from './Layouts/HomeLayout'
import AboutUs from './Pages/AboutUs'
import Denied from './Pages/Denied';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import CourseDescription from './Pages/Course/CourseDescription';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import CourseList from './Pages/Course/CourseList';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="/courses" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/course/description" element={<CourseDescription />} />
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer/> */}
      {/* <HomeLayout/> */}
      {/* <HomePage/> */}
    </>
  )
}

export default App;
