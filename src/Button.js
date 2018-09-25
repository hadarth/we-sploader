import React from 'react';
import './Button.css';

const Button = ({text, onClick}) => (
  <div className="button" onClick={onClick}>
    {text}
  </div>
);

export default Button;
