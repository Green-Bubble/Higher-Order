import React from 'react';
import Product from './Product';
import withCountry from './withCountry';
import './App.css';

const EnhancedProduct1 = withCountry(Product, 'Germany');
const EnhancedProduct2 = withCountry(Product, 'France');
const EnhancedProduct3 = withCountry(Product, 'England');

function App() {
  return (
    <div className="App">
      <h1>Product Information</h1>
      <EnhancedProduct1 name="Cake"  />
      <EnhancedProduct2 name="Bread" />
      <EnhancedProduct3 name="Juice" />
    </div>
  );
}

export default App;

















































// import React, { useState } from 'react';

// const withCountry = (WrappedComponent, product) => {
//   let pName = product + ' made in XXXXX';
  
//   return (props) => {
//     return <WrappedComponent {...props} product={pName} />;
//   };
// };

// const FullComponent = (props) => {
//   return <div>{props.product}</div>;
// };

// const Bread = withCountry(FullComponent, 'Bread');
// const Juice = withCountry(FullComponent, 'Juice');
// const Cake = withCountry(FullComponent, 'Cake');

// function App() {
//   return (
//     <>
//       <h1>Product Information</h1>
//       <Bread />    
//       <Juice />   
//       <Cake />     
//     </>
//     );
// };

// export default App;

