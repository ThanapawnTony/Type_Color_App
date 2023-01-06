import React from 'react'
import { useState } from 'react'
import colorNames from 'colornames';

function ColorBox() {
    // declare state variable call 'color' and set it to "red"
    const [colorValue, setColorValue, setHexValue, hexValue, isDarkText, setIsDarkText] = useState('');
    // declare function that sets color state to the entered value
  return (
    <div style={{ display: 'flex', justifyContent: 'column', alignItems:'center'}}>
        <div className='colorBox' style={{ border: '1px solid black', backgroundColor: colorValue, color: isDarkText ? "#000" : "#FFF"}}>
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </div>
        <form className='TxtForm' style={{ marginLeft: '20px' }} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='Txt'>Enter Color</label>
            Enter a color: <input type="text" value={colorValue} onChange={(e) => { setColorValue(e.target.value); setHexValue(colorNames(e.target.value));}} />
            <button
                type='button'
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>
    </div>
  );
}

export default ColorBox