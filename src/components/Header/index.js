import React from 'react';
import './styles.css';

const Header = ({ title }) => {
  return (
    <div className='title-header'>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
