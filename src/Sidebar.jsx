import React from 'react';
import style from './Sidebar.module.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Notifications</li>
          <li>Messages</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;