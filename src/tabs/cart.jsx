import React, { useState } from 'react';
import Veg from './veg';

function  Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Veg addToCart={addToCart} />
      {/* Other components */}
    </div>
  );
}

export default Cart;
