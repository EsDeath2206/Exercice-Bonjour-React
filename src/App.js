import React, { useState } from 'react';

function App() {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Bonjour ${field1} ${field2}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Application Bonjour</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Champ 1:
            <input
              type="text"
              value={field1}
              onChange={(e) => setField1(e.target.value)}
              style={{ margin: '5px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Champ 2:
            <input
              type="text"
              value={field2}
              onChange={(e) => setField2(e.target.value)}
              style={{ margin: '5px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Afficher Bonjour</button>
      </form>
      {message && (
        <div style={{ marginTop: '20px', color: 'blue', fontSize: '18px' }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default App;
