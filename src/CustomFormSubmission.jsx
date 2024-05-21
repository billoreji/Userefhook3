import React, { useRef } from 'react';

const CustomFormSubmission = () => {
  const formRef = useRef(null);
  const inputRefs = useRef({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.keys(inputRefs.current).reduce((data, key) => {
      data[key] = inputRefs.current[key].value;
      return data;
    }, {});

    // Perform custom processing or validation here
    console.log('Form Data:', formData);
    // Submit form data to the server
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {['username', 'email', 'password'].map((field) => (
        <div key={field}>
          <input
            ref={(el) => (inputRefs.current[field] = el)}
            type="text"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            required
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomFormSubmission;
