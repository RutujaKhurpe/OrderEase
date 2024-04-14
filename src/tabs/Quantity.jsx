import React, { useState } from 'react';

function Quantity({ quantity, onQuantityChange }) {
  const [value, setValue] = useState(quantity);

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    onQuantityChange(newValue);
  };

  const handleDecrement = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      onQuantityChange(newValue);
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    onQuantityChange(newValue);
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Quantity;
