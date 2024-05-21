import React, { useRef } from 'react';

const DynamicFormFocus = () => {
  const inputRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <form>
      {['First Name', 'Last Name', 'Email'].map((placeholder, index) => (
        <div key={index}>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            placeholder={placeholder}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        </div>
      ))}
    </form>
  );
};

export default DynamicFormFocus;
