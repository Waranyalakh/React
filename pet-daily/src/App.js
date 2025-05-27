// import logo from './logo.svg';
import catpic1 from '../src/images/catpic1.png';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [petName, setPetName] = useState('น้องแมว');
  const [hunger, setHunger] = useState(5); // หิวระดับ 0-10

  const feedPet = () => {
    if (hunger > 0) {
      setHunger(hunger - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 >Daily Pet</h1>
      </header>
      
      <h2 style={{ fontFamily: "'Pixelify Sans', sans-serif" }}>สัตว์เลี้ยงของคุณ: {petName}</h2>
      <img src={catpic1} className="pet-image" alt="catpic1" style={{ width: '150px' }} />
      <p>ระดับความหิว: {hunger}</p>
      <button onClick={feedPet} disabled={hunger === 0}>
        {hunger > 0 ? 'ให้อาหาร' : 'น้องหมาอิ่มแล้ว!'}
      </button>
      {hunger === 0 && <p>น้องแมวของคุณอิ่มแล้ว 🎉</p>}
      
    </div>
  );
}

export default App;
