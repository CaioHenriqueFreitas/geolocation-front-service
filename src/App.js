import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');

  const calculateDistance = async () => {
    const response = await axios.get(
      `https://geolocation-service-production.up.railway.app/api/distance`,
      {
        params: { origin, destination },
      }
    );
    setDistance(response.data.distance);
  };

  return (
    <div className="container">
      <h1 className="title">Distance Calculator</h1>
      <input
        type="text"
        placeholder="Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="input"
      />
      <button onClick={calculateDistance} className="button">
        Calculate
      </button>
      <p className="distance">Distance: {distance}</p>
    </div>
  );
}

export default App;