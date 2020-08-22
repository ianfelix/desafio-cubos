import React from 'react';
import './styles.css';

const Input = ({ ...props }) => {
  return (
    <div className='input-search'>
      <input
        type='text'
        placeholder='Busque um filme por nome, ano ou gênero...'
        {...props}
      />
    </div>
  );
};

export default Input;
