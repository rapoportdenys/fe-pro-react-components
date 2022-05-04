import React from 'react';
import PropTypes from 'prop-types';

const NavHeaderListItem = function (props) {
  return (
    <li className="nav-list__item">
      <a href=""> {props.children} </a>
    </li>
  );
};

NavHeaderListItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default NavHeaderListItem;
