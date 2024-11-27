import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Active');
  const [role, setRole] = useState(''); // Role as a text input
  const [newUser, setNewUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = () => {
    if (name && role) {  // Ensure role is provided
      const newUser = { id: Date.now(), name, status, role }; // Include role in the new user
      setUsers([newUser, ...users]);
      setName('');
      setStatus('Active');
      setRole(''); // Reset role after adding user
      setNewUser(newUser);
    } else {
      alert('Please enter both name and role');
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const toggleStatus = (id) => {
    setUsers(users.map((user) =>
      user.id === id ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
    ));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const saveUser = () => {
    setUsers(users.map((user) =>
      user.id === editingUser.id ? editingUser : user
    ));
    setEditingUser(null); // Close the card after saving
  };

  const closeEditCard = () => {
    setEditingUser(null); // Close without saving
  };

  return (
    <section>
      <h3>User Management</h3>
      <div>
        <input
          type="text"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <input
          type="text"
          placeholder="Enter role (e.g., Admin, User)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      {editingUser && (
        <div className="edit-card">
          <button className="close-btn" onClick={closeEditCard}>X</button>
          <h4>Edit User</h4>
          <input
            type="text"
            value={editingUser.name}
            onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
          />
          <select
            value={editingUser.status}
            onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <input
            type="text"
            value={editingUser.role}
            onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
            placeholder="Enter role (e.g., Admin, User)"
          />
          <button onClick={saveUser}>Save Changes</button>
        </div>
      )}

      <div>
        {users.length === 0 ? (
          <p>No users added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.status}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => editUser(user)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default UserManagement;
