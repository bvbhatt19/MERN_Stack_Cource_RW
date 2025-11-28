import React, { useEffect, useState } from "react";

function UserManagement() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8080/api/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (id, role) => {
    const res = await fetch(`http://localhost:8080/api/users/update-role/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    });
    const data = await res.json();
    alert(data.message || 'Role updated');
    fetchUsers();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user?')) return;
    const res = await fetch(`http://localhost:8080/api/users/delete/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    alert(data.message || 'User deleted');
    fetchUsers();
  };

  return (
    <div>
      <h3>User Management</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Email</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Role</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Change Role</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{u.name}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{u.email}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{u.role || 'user'}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>
                <select value={u.role || 'user'} onChange={(e)=>handleRoleChange(u._id, e.target.value)}>
                  <option value="superadmin">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>
                <button onClick={()=>handleDelete(u._1d)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
