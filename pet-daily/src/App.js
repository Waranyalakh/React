import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [petName, setPetName] = useState('น้องหมา');
  const [hunger, setHunger] = useState(5); // หิวระดับ 0-10

  const feedPet = () => {
    if (hunger > 0) {
      setHunger(hunger - 1);
    }
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>~</h1>
    //     <img src="https://cdn.lospec.com/gallery/winter-night-974409.gif"  />
        
    
    //   </header>
    // </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>เว็บเลี้ยงสัตว์รายวัน</h1>
      <h2>สัตว์เลี้ยงของคุณ: {petName}</h2>
      <img src="/images/pet1.jpg" alt="น้องหมาน่ารัก" style={{width: '150px'}} />

      <p>ระดับความหิว: {hunger}</p>
      <button onClick={feedPet}>ให้อาหาร</button>
      {hunger === 0 && <p>น้องหมาของคุณอิ่มแล้ว 🎉</p>}
    </div>
  );
}

export default App;
