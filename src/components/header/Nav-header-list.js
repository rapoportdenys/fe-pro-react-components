import React from 'react';
import NavHeaderListItem from './Nav-header-list-item';
import PropTypes from 'prop-types';

function NavHeaderList(props) {
  return (
    <nav>
      <ul className="nav-list">
        {props.items.map(({ name, link }, index) => {
          return (
            <NavHeaderListItem key={index} name={name} link={link}>
              <a href={link}>{name}</a>
            </NavHeaderListItem>
          );
        })}
      </ul>
    </nav>
  );
}

NavHeaderList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default NavHeaderList;
