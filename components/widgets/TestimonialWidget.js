import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@raketa-cms/raketa-cms';

const TestimonialWidget = ({ author, text, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <div className="shift-2">
          <div className="testimonial">
            <p>{text}</p>
            <h4>{author}</h4>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

TestimonialWidget.title = 'Testimonial';
TestimonialWidget.category = 'Highlights';

TestimonialWidget.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

TestimonialWidget.defaults = {
  author: 'John Doe',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  containerSettings: {},
};

TestimonialWidget.adminFields = {
  author: { type: 'text' },
  text: { type: 'textarea' },
};

export default TestimonialWidget;
