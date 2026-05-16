import React, { useState, useEffect } from 'react';
import './App.css';
import Visualizer from './components/Visualizer';
import StreamCard from './components/StreamCard';
import { Navbar, Sidebar } from './components/Layout';

function App() {
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/streams')
      .then(res => res.json())
      .then(data => {
        setStreams(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <header className="dashboard-header">
            <h1>Cosmic Dashboard</h1>
            <button className="primary-btn">Launch New Stream</button>
          </header>

          <section className="visualization-section">
            <div className="glass-card visualizer-card">
              <Visualizer />
              <div className="visualizer-overlay">
                <div className="stat">
                  <span className="label">Total Flowing</span>
                  <span className="value">4,520.25 XLM</span>
                </div>
                <div className="stat">
                  <span className="label">Active Streams</span>
                  <span className="value">{streams.length}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="streams-grid">
            {loading ? (
              <div className="loader">Aligning Stars...</div>
            ) : (
              streams.map(stream => (
                <StreamCard key={stream.id} stream={stream} />
              ))
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
