import React from 'react';

import testiStyles from './testimonials.module.css';

const Testimonial = ({ initial, content }) => {
  const circleStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  };

  return (
    <div className={testiStyles.testiBox}>
      <div style={circleStyle}>{initial}</div>
      <div className={testiStyles.testiContent}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Testimonial;
