// import logo from './logo.svg';
import catpic1 from './images/catpic1.png';
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
        <h1>Daily Pet</h1>
      </header>
      
      <h2>สัตว์เลี้ยงของคุณ: {petName}</h2>
      <img src="/images/catpic1.png" alt="cat" />
      {/* <img src={catpic1} className="App-logo" alt="catpic1" style={{ width: '150px' }} /> */}
      <p>ระดับความหิว: {hunger}</p>
      <button onClick={feedPet} disabled={hunger === 0}>
        {hunger > 0 ? 'ให้อาหาร' : 'น้องหมาอิ่มแล้ว!'}
      </button>
      {hunger === 0 && <p>น้องหมาของคุณอิ่มแล้ว 🎉</p>}
      
    </div>
  );
}

export default App;
