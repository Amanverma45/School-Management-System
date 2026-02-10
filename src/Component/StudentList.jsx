import React, { useEffect, useState } from 'react'
import axios from 'axios'

function StudentList() {
  const [students, setStudents] = useState([])
  const [editId, setEditId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    roll: '',
    mobile: ''
  })

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      const res = await axios.get('https://school-management-system111.onrender.com/api/getstudent')
      setStudents(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const startEdit = (std) => {
    setEditId(std._id)
    setFormData({
      name: std.name || '',
      class: std.class || '',
      roll: std.roll || '',
      mobile: std.mobile || ''
    })
  }

  const updateStd = async () => {
    try {
      await axios.put(
        `https://school-management-system111.onrender.com/api/updateStd/${editId}`,
        formData
      )
      setEditId(null)
      setFormData({ name: '', class: '', roll: '', mobile: '' })
      fetchStudents()
    } catch (err) {
      console.log(err)
    }
  }

  const deleteStd = async (id) => {
    try {
      await axios.delete(`https://school-management-system111.onrender.com/api/deleteStd/${id}`)
      fetchStudents()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-lg p-6">

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Student List
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200">
            <thead className="bg-emerald-50 text-gray-700">
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Class</th>
                <th className="px-4 py-2 border">Roll</th>
                <th className="px-4 py-2 border">Mobile</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((std) => (
                <tr key={std._id} className="hover:bg-slate-50">
                  <td className="px-4 py-2 border">{std.name}</td>
                  <td className="px-4 py-2 border">{std.class}</td>
                  <td className="px-4 py-2 border">{std.roll}</td>
                  <td className="px-4 py-2 border">{std.mobile}</td>
                  <td className="px-4 py-2 border flex gap-2">

                    <button
                      onClick={() => startEdit(std)}
                      className="px-3 py-1 text-xs rounded border border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => deleteStd(std._id)}
                      className="px-3 py-1 text-xs rounded border border-red-300 text-red-700 hover:bg-red-50"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {editId && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg border border-slate-200">

            <h3 className="text-lg font-medium text-emerald-800 mb-4">
              Edit Student
            </h3>

            <div className="space-y-3">

              <input
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-emerald-400"
              />

              <input
                type="text"
                placeholder="Enter class"
                value={formData.class}
                onChange={(e) =>
                  setFormData({ ...formData, class: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-emerald-400"
              />

              <input
                type="number"
                placeholder="Enter roll number"
                value={formData.roll}
                onChange={(e) =>
                  setFormData({ ...formData, roll: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-emerald-400"
              />

              <input
                type="tel"
                placeholder="Enter mobile"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-emerald-400"
              />

              <div className="flex justify-end gap-3 pt-2">

                <button
                  onClick={updateStd}
                  className="px-4 py-2 text-sm text-white bg-emerald-700 rounded hover:bg-emerald-800"
                >
                  Save Update
                </button>

                <button
                  onClick={() => setEditId(null)}
                  className="px-4 py-2 text-sm border border-slate-300 rounded hover:bg-slate-100"
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default StudentList
