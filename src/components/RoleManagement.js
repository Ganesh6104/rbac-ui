import React, { useState } from 'react';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState([]);
  const [newRole, setNewRole] = useState(null);
  const [editingRole, setEditingRole] = useState(null);

  const addRole = () => {
    if (roleName && permissions.length > 0) {
      const newRole = { id: Date.now(), name: roleName, permissions };
      setRoles([newRole, ...roles]);
      setRoleName('');
      setPermissions([]);
      setNewRole(newRole);
    }
  };

  const deleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const togglePermission = (permission) => {
    setPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((perm) => perm !== permission)
        : [...prevPermissions, permission]
    );
  };

  const editRole = (role) => {
    setEditingRole(role);
  };

  const saveRole = () => {
    setRoles(roles.map((role) =>
      role.id === editingRole.id ? editingRole : role
    ));
    setEditingRole(null); // Close the card after saving
  };

  const closeEditCard = () => {
    setEditingRole(null); // Close without saving
  };

  return (
    <section>
      <h3>Role Management</h3>
      <div>
        <input
          type="text"
          placeholder="Enter role name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
        <div>
          <h4>Permissions</h4>
          {['Read', 'Write', 'Delete'].map((permission) => (
            <div key={permission}>
              <input
                type="checkbox"
                checked={permissions.includes(permission)}
                onChange={() => togglePermission(permission)}
              />
              <label>{permission}</label>
            </div>
          ))}
        </div>
        <button onClick={addRole}>Add Role</button>
      </div>

      {editingRole && (
        <div className="edit-card">
          <button className="close-btn" onClick={closeEditCard}>X</button>
          <h4>Edit Role</h4>
          <input
            type="text"
            value={editingRole.name}
            onChange={(e) => setEditingRole({ ...editingRole, name: e.target.value })}
          />
          <div>
            <h4>Permissions</h4>
            {['Read', 'Write', 'Delete'].map((permission) => (
              <div key={permission}>
                <input
                  type="checkbox"
                  checked={editingRole.permissions.includes(permission)}
                  onChange={() => {
                    const updatedPermissions = editingRole.permissions.includes(permission)
                      ? editingRole.permissions.filter((perm) => perm !== permission)
                      : [...editingRole.permissions, permission];
                    setEditingRole({ ...editingRole, permissions: updatedPermissions });
                  }}
                />
                <label>{permission}</label>
              </div>
            ))}
          </div>
          <button onClick={saveRole}>Save Changes</button>
        </div>
      )}

      <div>
        {roles.length === 0 ? (
          <p>No roles added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Role Name</th>
                <th>Permissions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id}>
                  <td>{role.name}</td>
                  <td>{role.permissions.join(', ')}</td>
                  <td>
                    <button onClick={() => editRole(role)}>Edit</button>
                    <button onClick={() => deleteRole(role.id)}>Delete</button>
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

export default RoleManagement;
