// import React, { useState, useEffect } from 'react';
// import './veg.css';

// function Veg({ addToCart }) {
//   const [vegDishes, setVegDishes] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3008/displayFrontDish')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Data from backend:', data); // Log the data to the console
//         // Filter dishes based on diet being "veg"
//         const vegDishes = data.filter(dish => dish.Diet === 'veg');
//         setVegDishes(vegDishes); // Set the fetched veg dishes to the state
//       })
//       .catch(error => console.error('Error fetching dishes:', error));
//   }, []);

//   const categories = [...new Set(vegDishes.map(dish => dish.Category))];

//   // Split categories into two groups
//   const halfIndex = Math.ceil(categories.length / 2);
//   const firstHalfCategories = categories.slice(0, halfIndex);
//   const secondHalfCategories = categories.slice(halfIndex);

//   return (
//     <div className='main_container'>
//       {/* First category container */}
//       <div className='category_container'>
//         {firstHalfCategories.map((category, index) => (
//           <div key={index}>
//             <h2 style={{ marginTop: '5px' }}>{category}</h2>
//             {/* Filter veg dishes based on the current category */}
//             {vegDishes
//               .filter(item => item.Category === category)
//               .map((item, i) => (
//                 <div key={i} className='dish_card'>
//                   <h3 style={{ fontSize: '15px', marginBottom: '0' }}>{item.dish_name}</h3>
//                   <p style={{ fontSize: '12px', marginTop: '0', marginBottom: '0' }}>{item.Summary}</p>
//                   <p style={{ fontSize: '15px', marginTop: '0', marginBottom: '0' }}>{item.Price}/-</p>
//                   {/* Add to Cart button with onClick handler */}
//                   <button className='btn' onClick={() => addToCart(item)}>Add to Cart</button>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>

//       {/* Second category container */}
//       <div className='category_container'>
//         {secondHalfCategories.map((category, index) => (
//           <div key={index}>
//             <h2 style={{ marginTop: '5px' }}>{category}</h2>
//             {/* Filter veg dishes based on the current category */}
//             {vegDishes
//               .filter(item => item.Category === category)
//               .map((item, i) => (
//                 <div key={i} className='dish_card'>
//                   <h3 style={{ fontSize: '15px', marginBottom: '0' }}>{item.dish_name}</h3>
//                   <p style={{ fontSize: '12px', marginTop: '0', marginBottom: '0' }}>{item.Summary}</p>
//                   <p style={{ fontSize: '15px', marginTop: '0', marginBottom: '0' }}>{item.Price}/-</p>
//                   {/* Add to Cart button with onClick handler */}
//                   <button className='btn' onClick={() => addToCart(item)}>Add to Cart</button>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Veg;

import React, { useState, useEffect } from 'react';
import './veg.css';

function Veg({ addToCart }) {
  const [vegDishes, setVegDishes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3008/displayFrontDish')
      .then(response => response.json())
      .then(data => {
        console.log('Data from backend:', data); // Log the data to the console
        // Filter dishes based on diet being "veg"
        const vegDishes = data.filter(dish => dish.Diet === 'veg');
        setVegDishes(vegDishes); // Set the fetched veg dishes to the state
      })
      .catch(error => console.error('Error fetching dishes:', error));
  }, []);

  const categories = [...new Set(vegDishes.map(dish => dish.Category))];

  // Split categories into two groups
  const halfIndex = Math.ceil(categories.length / 2);
  const firstHalfCategories = categories.slice(0, halfIndex);
  const secondHalfCategories = categories.slice(halfIndex);

  const handleAddToCart = async (item) => {
    try {
      const response = await fetch(`http://localhost:3008/getDishDetails/${item.id}`);
      const selectedItemDetails = await response.json();
      console.log('Selected Item Details:', selectedItemDetails);
    } catch (error) {
      console.error('Error fetching item details:', error);
    }
    addToCart(item);
  };

  return (
    <div className='main_container'>
      {/* First category container */}
      <div className='category_container'>
        {firstHalfCategories.map((category, index) => (
          <div key={index}>
            <h2 style={{ marginTop: '5px' }}>{category}</h2>
            {/* Filter veg dishes based on the current category */}
            {vegDishes
              .filter(item => item.Category === category)
              .map((item, i) => (
                <div key={i} className='dish_card'>
                  <h3 style={{ fontSize: '15px', marginBottom: '0' }}>{item.dish_name}</h3>
                  <p style={{ fontSize: '12px', marginTop: '0', marginBottom: '0' }}>{item.Summary}</p>
                  <p style={{ fontSize: '15px', marginTop: '0', marginBottom: '0' }}>{item.Price}/-</p>
                  {/* Add to Cart button with onClick handler */}
                  <button className='btn' onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Second category container */}
      <div className='category_container'>
        {secondHalfCategories.map((category, index) => (
          <div key={index}>
            <h2 style={{ marginTop: '5px' }}>{category}</h2>
            {/* Filter veg dishes based on the current category */}
            {vegDishes
              .filter(item => item.Category === category)
              .map((item, i) => (
                <div key={i} className='dish_card'>
                  <h3 style={{ fontSize: '15px', marginBottom: '0' }}>{item.dish_name}</h3>
                  <p style={{ fontSize: '12px', marginTop: '0', marginBottom: '0' }}>{item.Summary}</p>
                  <p style={{ fontSize: '15px', marginTop: '0', marginBottom: '0' }}>{item.Price}/-</p>
                  {/* Add to Cart button with onClick handler */}
                  <button className='btn' onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Veg;

