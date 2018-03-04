import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@raketa-cms/raketa-cms';

const SectionTitleWidget = ({ title, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  </Container>
);

SectionTitleWidget.title = 'Section Title';
SectionTitleWidget.category = 'General';

SectionTitleWidget.propTypes = {
  title: PropTypes.string.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

SectionTitleWidget.defaults = {
  title: 'Headline',
  containerSettings: {},
};

SectionTitleWidget.adminFields = {
  title: { type: 'text' },
};

export default SectionTitleWidget;
