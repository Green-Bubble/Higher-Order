import React from 'react';

const withCountry = (WrappedComponent, country) => {
  return (props) => {
    return <WrappedComponent {...props} country={country} />;
  };
};

export default withCountry;