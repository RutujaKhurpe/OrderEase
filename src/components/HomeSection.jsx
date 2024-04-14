import React from 'react';
import momo from '../assest/momo.jpg';
import pizza from '../assest/pizza.jpg';
import noodles from '../assest/noodles.png';
import garlic from '../assest/garlic.jpg';
import './homesection.css'; // Import the CSS file



function HomeSection() {
  // const section2Style = {
  //   marginTop: '100px',
  //   justifyContent: 'center',
  // };
  return (
    <div>
      <h2>Our Expertise</h2>

      <div className="image-container"> {/* Add a class to the container */}
        <div>
          <img src={momo} alt="momo" /><br />
          <h4>Steam momos</h4>
        </div>
        <div>
          <img src={pizza} alt="pizza" /><br />
          <h4>Margherita pizza</h4>
        </div>
        <div>
          <img src={noodles} alt="noodles"  /><br />
          <h4>Hakka Noodles</h4>
        </div>
        <div>
          <img src={garlic} alt="garlic" /><br />
          <h4>Garlic bread</h4>
        </div>
      </div>
      

     
    </div>
  );
}

export default HomeSection;
