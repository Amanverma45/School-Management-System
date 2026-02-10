import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post('https://school-management-system111.onrender.com/api/saveUser', {
      name,
      email,
      password
    })
    alert('Signup Successfully')
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl border border-indigo-200 shadow-sm">

        <h2 className="text-2xl font-semibold text-indigo-800 text-center">
          Create Account
        </h2>

        <p className="text-sm text-gray-600 text-center mt-1">
          School Management System
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setname(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-indigo-400"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setemail(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-indigo-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-indigo-400"
            required
          />

          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-indigo-700 rounded-md hover:bg-indigo-800 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-700 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Signup
