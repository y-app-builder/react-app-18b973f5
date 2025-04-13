import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <p style={{ fontSize: '24px', marginBottom: '20px' }}>You clicked {count} times</p>
      <button
        onClick={incrementCount}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;