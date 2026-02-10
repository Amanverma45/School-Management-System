import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Student() {
  const [name, setname] = useState('')
  const [studentclass, setstudentclass] = useState('')
  const [roll, setroll] = useState('')
  const [mobile, setmobile] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:8000/api/addstudent', {
        name,
        studentclass,
        roll,
        mobile
      })

      alert('Student saved successfully')
      navigate('/student-list')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-slate-100 px-4 py-8 flex justify-center">
      <div className="bg-white w-full max-w-lg p-8 rounded-xl border border-emerald-200 shadow-sm">

        <h2 className="text-2xl font-semibold text-emerald-800 mb-6">
          Add Student
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter student name"
              onChange={(e) => setname(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-emerald-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class
            </label>
            <input
              type="text"
              placeholder="Enter class"
              onChange={(e) => setstudentclass(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-emerald-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Roll No
            </label>
            <input
              type="number"
              placeholder="Enter roll number"
              onChange={(e) => setroll(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-emerald-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile
            </label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              onChange={(e) => setmobile(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-emerald-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-2 text-sm font-medium text-white bg-emerald-700 rounded-md hover:bg-emerald-800 transition"
          >
            Save Student
          </button>

        </form>

      </div>
    </div>
  )
}

export default Student
