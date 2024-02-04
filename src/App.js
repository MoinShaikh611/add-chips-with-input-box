import React, { useRef, useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState('');
  const [chipsArr, setChipsArr] = useState([]);
  const keyPressing = (e) => {
    // Space,Backspace,Enter
    if (e.code === 'Enter') {
      if (inputVal.length) {
        setChipsArr([...chipsArr, inputVal]);
        setInputVal('');
        inputRef.current.focus();
      }
    }
    if (e.code === 'Backspace') {
      if (!inputVal.length) {
        chipsArr.pop();
        setChipsArr([...chipsArr]);
      }
    }
  };

  const addChips = (e) => {
    if (e.target.value.length) {
      setInputVal(e.target.value);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div className="input-wrapper">
        <ul>
          {chipsArr.map((chip, index) => (
            <li key={index}>{chip}</li>
          ))}
          <input
            placeholder="Type here..."
            value={inputVal}
            ref={inputRef}
            type="text"
            onKeyDown={keyPressing}
            onInput={addChips}
          />
        </ul>
      </div>
    </div>
  );
}
