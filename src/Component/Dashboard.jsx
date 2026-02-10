import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-8">

      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-slate-800">
          Dashboard
        </h1>
        <p className="text-sm text-slate-600">
          School Management System
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div
          onClick={() => navigate('/students')}
          className="bg-white p-6 rounded-xl border border-slate-200 cursor-pointer transition hover:border-slate-400 hover:shadow-sm"
        >
          <h3 className="text-lg font-medium text-slate-800 mb-1">
            Students
          </h3>
          <p className="text-sm text-slate-600">
            Manage student records
          </p>
        </div>

        <div
          onClick={() => navigate('/teacher')}
          className="bg-white p-6 rounded-xl border border-slate-200 cursor-pointer transition hover:border-slate-400 hover:shadow-sm"
        >
          <h3 className="text-lg font-medium text-slate-800 mb-1">
            Teachers
          </h3>
          <p className="text-sm text-slate-600">
            Manage teacher records
          </p>
        </div>

        <div
          onClick={() => navigate('/classes')}
          className="bg-white p-6 rounded-xl border border-slate-200 cursor-pointer transition hover:border-slate-400 hover:shadow-sm"
        >
          <h3 className="text-lg font-medium text-slate-800 mb-1">
            Classes
          </h3>
          <p className="text-sm text-slate-600">
            Class wise information
          </p>
        </div>

      </div>

    </div>
  )
}

export default Dashboard
