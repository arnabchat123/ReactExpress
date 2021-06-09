import React from 'react';
import { Link } from 'react-router-dom';

const footer = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center" style={footer}>
      <p>
        © 2021 Copyright: Learn React || EXPRESS || Redux || Combiner || Reducer
        || Babble || CommonJS || Provider || MongoDB || WebPack @
        <Link to="/"> www.Arnab_Chatterjee.in </Link>
      </p>
    </footer>
  );
};
