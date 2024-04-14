import React, { useState, useEffect } from 'react';
import './nonveg.css';

function NonVeg() {
  const [nonVegDishes, setNonVegDishes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3008/displayFrontDish')
      .then(response => response.json())
      .then(data => {
        console.log('Data from backend:', data); // Log the data to the console
        // Filter dishes based on diet being "non veg"
        const nonVegDishes = data.filter(dish => dish.Diet === 'nonveg');
        setNonVegDishes(nonVegDishes); // Set the fetched non veg dishes to the state
      })
      .catch(error => console.error('Error fetching dishes:', error));
  }, []);

  const categories = [...new Set(nonVegDishes.map(dish => dish.Category))];

  // Split categories into two groups
  const halfIndex = Math.ceil(categories.length / 2);
  const firstHalfCategories = categories.slice(0, halfIndex);
  const secondHalfCategories = categories.slice(halfIndex);

  return (
    <div className='main_container'>
      {/* First category container */}
      <div className='category_container'>
        {firstHalfCategories.map((category, index) => (
          <div key={index}>
            <h2 style={{ marginTop: '5px' }}>{category}</h2>
            {/* Filter non veg dishes based on the current category */}
            {nonVegDishes
              .filter(item => item.Category === category)
              .map((item, i) => (
                <div key={i} className='dish_card'>
                  <h3 style={{ fontSize: '15px', marginBottom: '0' }}>{item.dish_name}</h3>
                  <p style={{ fontSize: '12px', marginTop: '0', marginBottom: '0' }}>{item.Summary}</p>
                  <p style={{ fontSize: '15px', marginTop: '0', marginBottom: '0' }}>{item.Price}/-</p>
                  <button className='btn'>Add to Cart</button>
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
            {/* Filter non veg dishes based on the current category */}
            {nonVegDishes
              .filter(item => item.Category === category)
              .map((item, i) => (
                <div key={i} className='dish_card'>
                  <h3 style={{ fontSize: '15px', marginBottom: '0' }}>{item.dish_name}</h3>
                  <p style={{ fontSize: '12px', marginTop: '0', marginBottom: '0' }}>{item.Summary}</p>
                  <p style={{ fontSize: '15px', marginTop: '0', marginBottom: '0' }}>{item.Price}/-</p>
                  <button className='btn'>Add to Cart</button>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonVeg;
