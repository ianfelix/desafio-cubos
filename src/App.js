import React from 'react';
import './styles/GlobalStyles.css';
import Header from './components/Header';
import Input from './components/Input';

function App() {
  return (
    <>
      <div className='title-header'>
        <Header title='Movies' />
      </div>
      <Input />
    </>
  );
}

export default App;
