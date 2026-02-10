import React from 'react'

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-slate-100 px-4">

      <div className="bg-white max-w-2xl w-full p-8 rounded-xl border border-sky-200 shadow-sm">

        <h2 className="text-2xl font-semibold text-sky-800 mb-1">
          About Our School
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          City Public School
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          City Public School is committed to providing quality education
          with a focus on discipline, knowledge, and overall development
          of students.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our School Management System helps in maintaining student and
          teacher records in a simple, secure, and organized way.
        </p>

        <div className="border-t border-sky-200 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-700 text-sm">
            <p><span className="font-medium text-gray-800">Established:</span> 2010</p>
            <p><span className="font-medium text-gray-800">Classes:</span> Nursery to 10th</p>
            <p><span className="font-medium text-gray-800">Medium:</span> English & Hindi</p>
            <p><span className="font-medium text-gray-800">Board:</span> State Board</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About
