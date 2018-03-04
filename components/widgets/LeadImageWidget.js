import React from 'react';
import PropTypes from 'prop-types';
import { Container, Img } from '@raketa-cms/raketa-cms';

const LeadImageWidget = ({ image, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="lead-image">
      <Img src={image} variant="image" />
    </div>
  </Container>
);

LeadImageWidget.title = 'Lead Image';
LeadImageWidget.category = 'Highlights';

LeadImageWidget.propTypes = {
  image: PropTypes.any.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

LeadImageWidget.defaults = {
  image: 'http://placehold.it/1920x1080',
  containerSettings: {},
};

LeadImageWidget.adminFields = {
  image: { type: 'image' },
};

export default LeadImageWidget;
