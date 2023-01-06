import './App.css';
import React, { useState } from 'react';
import ColorBox from './ColorBox';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] =useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <ColorBox
          colorValue={colorValue}
          setColorValue={setColorValue}
          hexValue={hexValue}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
        />
      </header>
    </div>
  );
}

export default App;
