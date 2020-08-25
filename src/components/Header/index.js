import React from 'react';
import './styles.css';

const Header = ({ title }) => {
  return (
    <div className='title-header'>
      <a href='/'>{title}</a>
    </div>
  );
};

export default Header;
