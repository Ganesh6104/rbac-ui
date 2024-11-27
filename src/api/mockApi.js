const mockUsers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  ];
  
  const mockRoles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'User', permissions: ['Read'] },
  ];
  
  export const fetchUsers = () => Promise.resolve(mockUsers);
  export const fetchRoles = () => Promise.resolve(mockRoles);
  