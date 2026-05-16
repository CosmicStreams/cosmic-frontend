import React from 'react';

export const Navbar = () => (
  <nav className="navbar glass-card">
    <div className="logo">🌌 Cosmic Streams</div>
    <div className="nav-actions">
      <div className="wallet-status">
        <span className="dot online"></span>
        GA2C...3X9Z
      </div>
    </div>
  </nav>
);

export const Sidebar = () => (
  <aside className="sidebar">
    <ul className="nav-links">
      <li className="active">Dashboard</li>
      <li>Streams</li>
      <li>Analytics</li>
      <li>Settings</li>
    </ul>
    <div className="nebula-promo">
      <h4>Upgrade to Nebula</h4>
      <p>Get advanced analytics and bulk streaming.</p>
      <button className="promo-btn">Go Pro</button>
    </div>
  </aside>
);
