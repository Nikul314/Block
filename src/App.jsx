import React, { useState } from 'react'
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const blockRef = useRef();

  const handleMove = (direction) => {
    switch (direction) {
      case 'left':
        setPosition((prev) => ({ ...prev, x: prev.x - 50 }));
        break;
      case 'right':
        setPosition((prev) => ({ ...prev, x: prev.x + 50 }));
        break;
      case 'up':
        setPosition((prev) => ({ ...prev, y: prev.y - 50 }));
        break;
      case 'down':
        setPosition((prev) => ({ ...prev, y: prev.y + 50 }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[760px] bg-teal-800">
      <div className='flex flex-col items-center'>
        <button
        disabled={position.y <= 0}
        onClick={()=>handleMove('up')}
        className= 'bg-teal-200 h-[60px] rounded-lg w-[500px] shadow-xl text-sm'>
          TOP
        </button>

        <div className='flex'>
          <button onClick={()=>handleMove('left')} disabled={position.x <= 0} className='bg-teal-200 w-[60px] text-sm rounded-lg shadow-xl'>LEFT</button>
            <div className='w-[500px] h-[500px]'>
              <div
              style={{top:position.y, left: position.x}}
              className='h-[50px] transition-all relative w-[50px] bg-orange-500'>
              </div>
            </div>
          <button
          disabled={position.x >= 450}
          onClick={()=>handleMove('right')}
          className='bg-teal-200 w-[60px] rounded-lg text-sm shadow-xl'>RIGHT</button>
        </div>

        <button
        disabled={position.y >= 450}
        onClick={()=>handleMove('down')}
        className='bg-teal-200 h-[60px] w-[500px] text-sm shadow-xl rounded-lg'>BOTTOM</button>
      </div>
    </div>
  );
}

export default App;