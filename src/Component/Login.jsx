import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
 try{

   const response = await axios.post('http://localhost:8000/api/loginUser', {
     email,
     password
    })
    
    const token = response.data.token
    localStorage.setItem('token', token)
    alert('Login Successful')
    navigate('/welcome')
    window.location.reload()
  }catch(error){
    console.log(error)
    alert('Please enter valid email and password')
  }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-slate-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl border border-teal-200 shadow-sm">

        <h2 className="text-2xl font-semibold text-teal-800 text-center">
          Welcome Back
        </h2>

        <p className="text-sm text-gray-600 text-center mt-1">
          Login to School Management System
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setemail(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-teal-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-teal-400"
            required
          />

          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-teal-700 rounded-md hover:bg-teal-800 transition"
          >
            Login
          </button>

        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{' '}
          <Link to="/signup" className="font-medium text-teal-700 hover:underline">
            Signup
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login
