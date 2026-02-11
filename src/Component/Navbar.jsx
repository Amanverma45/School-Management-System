import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosLogOut } from 'react-icons/io'

function Navbar() {
  const token = localStorage.getItem('token')

  return (
    <div className="bg-slate-50 border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <h2 className="text-lg font-semibold text-gray-800">
          <img
            src="/school.png"
            alt="School"
            className="h-20 w-auto object-contain"
          />

        </h2>

        <div className="flex items-center gap-6 text-sm">

          {token && (
            <>
              <Link to="/welcome" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>

              <Link to="/students" className="text-gray-700 hover:text-gray-900">
                Add-Students
              </Link>

              <Link to="/student-list" className="text-gray-700 hover:text-gray-900">
                StudentList
              </Link>

              <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">
                Dashboard
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem('token')
                  window.location.href = '/login'
                }}
                className="flex items-center gap-1 px-4 py-1.5 rounded-md text-white bg-red-600 hover:bg-red-700 transition"
              >
                Logout <IoIosLogOut className="text-base" />
              </button>
            </>
          )}

          {!token && (
            <>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>

              <Link to="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>

              <Link to="/login" className="text-gray-700 hover:text-gray-900">
                Login
              </Link>

              <Link
                to="/signup"
                className="px-4 py-1.5 rounded-md bg-indigo-700 text-white hover:bg-indigo-800 transition"
              >
                Signup
              </Link>
            </>
          )}

        </div>

      </div>
    </div>
  )
}

export default Navbar
