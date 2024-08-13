import React from 'react';

const SizeButton = ({ size }) => {
  const getAbbreviation = (size) => {
    switch (size.toLowerCase()) {
      case 'extra small':
        return 'XS';
      case 'small':
        return 'S';
      case 'medium':
        return 'M';
      case 'large':
        return 'L';
      case 'extra large':
        return 'XL';
      default:
        return '';
    }
  };

  return (
    <button className="border-[1px] border-black  text-black hover:text-white bg-transparent hover:bg-black transition-all duration-100 scale-105 px-4 py-2 rounded-full w-10 h-10" >
      {getAbbreviation(size)}
    </button>
  );
};

export default SizeButton;
