import React from 'react';
import './styles.css';

const Header = ({ title }) => {
  return (
    <div className='title-header'>
      <h1>
        <a href='/'>{title}</a>
      </h1>
    </div>
  );
};

export default Header;
