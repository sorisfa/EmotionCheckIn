import React from 'react';

const TrafficLightCheckIn = () => {
  const [status, setStatus] = React.useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: status === 'red' ? 'red' : 'lightgray',
          borderRadius: '50%',
          margin: '10px'
        }}
        onClick={() => setStatus('red')}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: status === 'yellow' ? 'yellow' : 'lightgray',
          borderRadius: '50%',
          margin: '10px'
        }}
        onClick={() => setStatus('yellow')}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: status === 'green' ? 'green' : 'lightgray',
          borderRadius: '50%',
          margin: '10px'
        }}
        onClick={() => setStatus('green')}
      />
      <p>Current Status: {status}</p>
    </div>
  );
};

export default TrafficLightCheckIn;