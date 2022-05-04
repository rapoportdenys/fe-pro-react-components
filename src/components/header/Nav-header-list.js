import React from 'react';
import NavHeaderListItem from './Nav-header-list-item';
import PropTypes from 'prop-types';

function NavHeaderList(props) {
  return (
    <nav>
      <ul className="nav-list">
        {props.items.map((listItem) => {
          return (
            <NavHeaderListItem key={listItem}>{listItem}</NavHeaderListItem>
          );
        })}
      </ul>
    </nav>
  );
}

NavHeaderList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavHeaderList;
