import React from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100 px-4">
      <div className="w-full max-w-md p-8 rounded-xl bg-white border border-emerald-200 text-center shadow-sm">

        <h1 className="text-2xl font-semibold text-emerald-800">
          Welcome
        </h1>

        <p className="text-sm text-gray-600 mt-2">
          You have successfully logged in
        </p>

        <p className="text-sm font-medium text-gray-700 mt-4">
          City Public School
        </p>

        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-2 text-sm font-medium text-white bg-emerald-700 rounded-md hover:bg-emerald-800 transition"
        >
          Go to Home
        </button>

      </div>
    </div>
  )
}

export default Welcome
