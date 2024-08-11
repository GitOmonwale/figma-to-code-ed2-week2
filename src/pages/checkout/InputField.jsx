import React from 'react';

const InputField = ({ label, name, placeholder, type }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type}
        name={name} 
        placeholder={placeholder} 
        className="bg-transparent text-black rounded-full w-full p-4 border border-y-black border-x-gray-300 mt-2" 
      />
    </div>
  );
};

export default InputField;