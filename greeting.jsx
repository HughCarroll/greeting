// Import React and any necessary hooks or libraries
import React from 'react';

// Define a functional component
const Greeting = () => {
  // Define a message
  const message = "Hello, welcome to my React app!";

  // Return JSX to render
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message}</h1>
      <p>This is a simple React component using JSX.</p>
    </div>
  );
};

// Export the component for use in other files
export default Greeting;
