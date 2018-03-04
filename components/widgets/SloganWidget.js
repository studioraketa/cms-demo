import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@raketa-cms/raketa-cms';

const SloganWidget = ({ text, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <div className="shift-3">
          <div className="slogan">
            <h2>{text}</h2>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

SloganWidget.title = 'Slogan';
SloganWidget.category = 'Highlights';

SloganWidget.propTypes = {
  text: PropTypes.string.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

SloganWidget.defaults = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  containerSettings: {},
};

SloganWidget.adminFields = {
  text: { type: 'textarea' },
};

export default SloganWidget;
