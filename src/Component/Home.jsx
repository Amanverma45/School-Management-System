import React from 'react'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-slate-100 flex items-center justify-center px-4">
      <div className="bg-white max-w-3xl w-full p-10 rounded-xl border border-amber-200 shadow-sm">

        <h1 className="text-3xl font-semibold text-amber-800 text-center">
          City Public School
        </h1>

        <p className="text-sm text-gray-600 text-center mt-1">
          Knowledge • Discipline • Success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-8 text-gray-700 text-sm">
          <p><span className="font-medium text-gray-800">Established:</span> 2010</p>
          <p><span className="font-medium text-gray-800">Classes:</span> Nursery to 10th</p>
          <p><span className="font-medium text-gray-800">Medium:</span> English & Hindi</p>
          <p><span className="font-medium text-gray-800">Board:</span> State Board</p>
          <p><span className="font-medium text-gray-800">Address:</span> Main Road, City Center</p>
          <p><span className="font-medium text-gray-800">Contact:</span> +91 98765 43210</p>
        </div>

        <p className="text-gray-600 text-sm mt-8 leading-relaxed text-center">
          This School Management System is designed to maintain student and
          teacher records in a simple, secure, and organized way.
        </p>

      </div>
    </div>
  )
}

export default Home
