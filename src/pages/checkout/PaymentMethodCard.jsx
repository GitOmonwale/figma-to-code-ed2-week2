import React from 'react';

const PaymentMethodCard = ({ isSelected, onSelect, children }) => {
    return (
      <div
        className={`p-4 border rounded-xl cursor-pointer ${isSelected ? 'border-black' : 'border-gray-300'}`}
        onClick={onSelect}
      >
        <p>{children}</p>
      </div>
    );
  };

export default PaymentMethodCard;
