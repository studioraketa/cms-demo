import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@raketa-cms/raketa-cms';

const ArticleTitleWidget = ({ title, tagline, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <div className="shift-2">
          <div className="article-title">
            <h1>{title}</h1>
            <p>{tagline}</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

ArticleTitleWidget.title = 'Article Title';
ArticleTitleWidget.category = 'General';

ArticleTitleWidget.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

ArticleTitleWidget.defaults = {
  title: 'Page Title',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  containerSettings: {},
};

ArticleTitleWidget.adminFields = {
  title: { type: 'text' },
  tagline: { type: 'text' },
};

export default ArticleTitleWidget;
