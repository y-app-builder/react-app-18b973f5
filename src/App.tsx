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
          backgroundColor: '#800080', // Changed button color to purple
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'transform 0.2s', // Added transition for smooth scaling
        }}
        onMouseEnter={(e) => {
          const button = e.currentTarget;
          button.style.transform = 'scale(1.1)'; // Scale up on hover
        }}
        onMouseLeave={(e) => {
          const button = e.currentTarget;
          button.style.transform = 'scale(1)'; // Reset scale on mouse leave
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;