import React from 'react';

const StreamCard = ({ stream }) => {
  return (
    <div className="glass-card stream-card">
      <div className="card-header">
        <div className="category-tag">{stream.category}</div>
        <span className={`status-dot ${stream.status}`}></span>
      </div>
      <h3>{stream.name}</h3>
      <p className="description">{stream.description}</p>
      
      <div className="flow-stats">
        <div className="flow-bar">
          <div className="flow-progress" style={{ width: '65%' }}></div>
        </div>
        <div className="flow-meta">
          <span>650 / 1000 XLM</span>
          <span>65%</span>
        </div>
      </div>

      <div className="card-footer">
        <button className="secondary-btn">View Details</button>
        <button className="withdraw-btn">Withdraw</button>
      </div>
    </div>
  );
};

export default StreamCard;
