import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@raketa-cms/raketa-cms';

const PageTitleWidget = ({ title, tagline, topSpacing, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <div className="full-width">
          <div className="page-title">
            <hgroup className={topSpacing === 'no' ? 'padding-top-no' : ''}>
              <h1>{title}</h1>
              <p>{tagline}</p>
            </hgroup>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

PageTitleWidget.title = 'Page Title';
PageTitleWidget.category = 'General';

PageTitleWidget.propTypes = {
  title: PropTypes.string.isRequired,
  topSpacing: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

PageTitleWidget.defaults = {
  title: 'Page Title',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  topSpacing: 'yes',
  containerSettings: {},
};

PageTitleWidget.adminFields = {
  topSpacing: { type: 'select', options: [['yes', 'Yes'], ['no', 'No']] },
  title: { type: 'text' },
  tagline: { type: 'text' },
};

export default PageTitleWidget;
