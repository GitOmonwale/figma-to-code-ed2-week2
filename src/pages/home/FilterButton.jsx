import React from 'react';

const FilterButton = ({ label, count, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className="border-[1px] border-black  text-black hover:text-white bg-transparent hover:bg-black transition-all duration-100 scale-105 px-4 py-2 rounded-full"
    >
      {label} {count}
    </button>
  );
};

export default FilterButton;
