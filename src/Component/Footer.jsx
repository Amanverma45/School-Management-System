import React from 'react'

function Footer() {
  return (
    <footer className="bg-amber-50 border-t border-amber-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">

        <h3 className="text-lg font-semibold text-amber-800">
          City Public School
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          Knowledge • Discipline • Growth
        </p>

        <div className="flex justify-center gap-6 text-sm text-gray-700 mt-4">
          <span className="hover:text-amber-800 cursor-pointer">Home</span>
          <span className="hover:text-amber-800 cursor-pointer">About</span>
          <span className="hover:text-amber-800 cursor-pointer">Login</span>
          <span className="hover:text-amber-800 cursor-pointer">Signup</span>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          © 2026 City Public School. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
