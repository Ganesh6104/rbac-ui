import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '10px' }}>
      <ul>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/roles">Roles</Link></li>
        <li><Link to="/permissions">Permissions</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
