import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';

const Application = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Application;
