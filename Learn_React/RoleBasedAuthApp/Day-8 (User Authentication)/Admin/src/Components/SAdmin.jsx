import React, { useEffect, useState } from 'react'
import axios from "axios"

const SAdmin = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/superAdmin")
            .then((res) => {
                alert(res.data.message)
                setUsers(res.data.allUsers)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const handleRoleChange = (() => {

    })
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#C6E2FF] via-[#FFD6E8] to-[#C8F7C5] p-6 flex justify-center items-center">
            <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/60">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                    Super Admin Panel
                </h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
                        <thead className="bg-gradient-to-r from-[#81D4FA] to-[#F48FB1] text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Email</th>
                                <th className="px-4 py-3 text-center">Current Role</th>
                                <th className="px-4 py-3 text-center">Change Role</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white text-gray-700">
                            {users.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                        } hover:bg-[#F8F9FA] transition`}
                                >
                                    <td className="px-4 py-3 font-medium">{user.name}</td>
                                    <td className="px-4 py-3">{user.email}</td>
                                    <td className="px-4 py-3 text-center capitalize font-semibold">
                                        {user.role}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <select
                                            value={user.role}
                                            onChange={(e) =>
                                                handleRoleChange(user.id, e.target.value)
                                            }
                                            className="px-3 py-1 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-[#81D4FA] focus:outline-none bg-white cursor-pointer"
                                        >
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                            <option value="superadmin">Super Admin</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 text-center">
                    <button
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#81D4FA] via-[#A5D6A7] to-[#F48FB1] text-white font-semibold shadow-md hover:opacity-90 transition duration-200"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SAdmin
