import React from 'react';
import PropTypes from 'prop-types';

const NavHeaderListItem = function ({ name, link }) {
  return (
    <li className="nav-list__item">
      <a href={link}> {name} </a>
    </li>
  );
};

NavHeaderListItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavHeaderListItem;
