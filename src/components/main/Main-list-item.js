import React from 'react';
import PropTypes from 'prop-types';

const MainListItem = ({ headlineArticle, bodyArticle }) => {
  return (
    <li className="list__item">
      <h2>{headlineArticle}</h2>
      <p>{bodyArticle}</p>
    </li>
  );
};

MainListItem.propTypes = {
  headlineArticle: PropTypes.string.isRequired,
  bodyArticle: PropTypes.string.isRequired,
};

export default MainListItem;
