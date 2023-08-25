import React from 'react';
import './references.module.css';

const ReferenceItem = ({ initial, content }) => {
  const circleStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  };

  return (
    <div className="ref-box">
      <div className="ref-initial" style={circleStyle}>
        {initial}
      </div>
      <div className="ref-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ReferenceItem;
