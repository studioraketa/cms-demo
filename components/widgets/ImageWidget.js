import React from 'react';
import PropTypes from 'prop-types';
import { Container, Img } from '@raketa-cms/raketa-cms';

const ImageWidget = ({ variant, image, description, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <div className={variant === 'inset' ? 'shift-2' : 'full-width'}>
          <figure className="image-widget">
            <Img src={image} variant={variant === 'inset' ? 'vertical' : 'image'} />
            {description === '' ? '' : <figcaption>{description}</figcaption>}
          </figure>
        </div>
      </div>
    </div>
  </Container>
);

ImageWidget.title = 'Image';
ImageWidget.category = 'Media';

ImageWidget.propTypes = {
  variant: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

ImageWidget.defaults = {
  variant: 'normal',
  image: 'http://placehold.it/1120x720',
  description: 'Image description',
  containerSettings: {},
};

ImageWidget.adminFields = {
  variant: { type: 'select', options: [['normal', 'Normal'], ['inset', 'Inset']] },
  image: { type: 'image' },
  description: { type: 'text' },
};

export default ImageWidget;
