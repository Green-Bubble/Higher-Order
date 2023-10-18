import React from 'react';

const Product = ({ name, country }) => {
  return (
    <div>
      <span style={{font : "22px bold"}}>{name}</span><span> made in {country}. This is very delicious.</span><br/><br/>
    </div>
  );
};

export default Product;