import React from 'react';
import NavHeaderList from './Nav-header-list';

const Header = () => {
  const ArrOfNavName = ['Home', 'About us', 'Contact us', 'Help page'];
  return (
    <div className="header">
      <div className="container">
        <a href="" className="logo">
          My logo
        </a>
        <NavHeaderList items={ArrOfNavName} />
      </div>
    </div>
  );
};

export default Header;
