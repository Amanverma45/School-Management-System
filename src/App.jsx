import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Signup from './Component/Signup'
import About from './Component/About'
import Login from './Component/Login'
import Navbar from './Component/Navbar'
import Welcome from './Component/Welcome'
import Student from './Component/Student'
import StudentList from './Component/StudentList'
import ProtectedRoute from './Component/ProtectedRoute'
import Dashboard from './Component/Dashboard'
import Footer from './Component/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<ProtectedRoute> <Welcome /> </ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}/>
        <Route path="/students" element={<Student/> }/>
        <Route path="/student-list" element={<ProtectedRoute> <StudentList/> </ProtectedRoute>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
