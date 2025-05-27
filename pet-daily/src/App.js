import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import bt1 from './images/bt1.png';
import bt2 from './images/bt2.png';
import bt3 from './images/bt3.png';
import cat1 from './images/cat1.png';
import cat2 from './images/cat2.png';
import cat3 from './images/cat3.png';
import './App.css';

function App() {
  const catImages = [cat1, cat2, cat3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [petName, setPetName] = useState('moon');
  const maxHunger = 10;
  const [hunger, setHunger] = useState(5);

  // เปลี่ยนรูปแมววนทุก 1 วิ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % catImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // เพิ่มความหิวทุก 5 วินาที แต่ไม่เกิน maxHunger
  useEffect(() => {
    const hungerInterval = setInterval(() => {
      setHunger(prev => (prev < maxHunger ? prev + 1 : prev));
    }, 5000);
    return () => clearInterval(hungerInterval);
  }, []);

  // ลดความหิวเมื่อกดปุ่ม feed
  const feedPet = () => {
    setHunger(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="App">
      <div className="App-tab">
        <FontAwesomeIcon icon={faPaw} className="icon-paw" />
        <p>meow</p>
        <div className="btn-group">
          <button>
            <img src={bt1} className="App-btn1" alt="bt1" />
          </button>
          <button>
            <img src={bt2} className="App-btn2" alt="bt2" />
          </button>
        </div>
      </div>

      <header className="App-header">
        <h1>Daily Pet</h1>
      </header>

      <div className="App-below-tab">
        <p>welcome</p>
        <FontAwesomeIcon icon={faPaw} className="icon-paw" />
      </div>

      <div className="App-content">
        <h2>Your cat name: {petName}</h2><br />
        <div className="cat-container">
          <span className="btn-text">{hunger > 0 ? 'Feed' : 'Cat is full!'}</span><br />
          <img
            src={catImages[currentIndex]}
            alt={`cat_${currentIndex + 1}`}
            className="pet-image"
          />
        </div>

        <p>Hunger level: {hunger}</p>
        <button onClick={feedPet} disabled={hunger === 0} className="App-btn3">
          <img src={bt3} alt="bt3" className="btn-icon" />
        </button>
      </div>

      <div className="App-footer">
        <p>© 2023 Daily Pet</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
