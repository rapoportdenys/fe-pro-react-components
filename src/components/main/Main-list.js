import React from 'react';
import PropTypes from 'prop-types';
import MainListItem from './Main-list-item';

const MainList = (props) => {
  return (
    <ul className="list">
      {props.items.map(({ headlineArticles, bodyArticles }, index) => {
        return (
          <MainListItem
            key={index}
            headlineArticle={headlineArticles}
            bodyArticle={bodyArticles}
          >
            <h2>{headlineArticles}</h2>
            <p>{bodyArticles}</p>
          </MainListItem>
        );
      })}
    </ul>
  );
};

MainList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      headlineArticles: PropTypes.string.isRequired,
      bodyArticles: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MainList;
