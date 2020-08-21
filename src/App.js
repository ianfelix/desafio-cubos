import React from 'react';
import './styles/GlobalStyles.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header title='Movies' />
      <input
        type='text'
        styles={{ backColor: 'var(--secondary)', border: '1px solid black' }}
      />
    </>
  );
}

export default App;
