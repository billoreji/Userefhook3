import React, { useRef, useState } from 'react';

const RealTimeValidationForm = () => {
  const inputRef = useRef(null);
  const [error, setError] = useState('');

  const validateInput = () => {
    const value = inputRef.current.value;
    if (value.length < 5) {
      setError('Input must be at least 5 characters long');
    } else {
      setError('');
    }
  };

  return (
    <form>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter at least 5 characters"
          onChange={validateInput}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </form>
  );
};

export default RealTimeValidationForm;
