import React from 'react';
import NavHeaderList from './Nav-header-list';

const Header = () => {
  const arrOfNavName = [
    { name: 'Home', link: '/' },
    { name: 'About us', link: '/#about' },
    { name: 'Contact us', link: '/#contact' },
    { name: 'Help page', link: '/#help' },
  ];
  return (
    <div className="header">
      <div className="container">
        <a href="" className="logo">
          My logo
        </a>
        <NavHeaderList items={arrOfNavName} />
      </div>
    </div>
  );
};

export default Header;
