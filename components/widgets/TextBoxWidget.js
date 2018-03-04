import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@raketa-cms/raketa-cms';

const TextBoxWidget = ({ variant, text, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <div className={`text-widget ${variant === 'centered' ? 'centered' : ''}`}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </div>
  </Container>
);

TextBoxWidget.title = 'Text';
TextBoxWidget.category = 'General';

TextBoxWidget.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

TextBoxWidget.defaults = {
  variant: 'normal',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor semper est in porta. Vestibulum fringilla justo in magna ornare, non commodo justo consectetur. Mauris ut tristique nisi, sed tristique lectus. Sed diam mauris, aliquet quis imperdiet sed, viverra sit amet lorem. Quisque urna sapien, molestie a bibendum nec, tempor vitae magna.',
  containerSettings: {},
};

TextBoxWidget.adminFields = {
  variant: { type: 'select', options: [['normal', 'Normal'], ['centered', 'Centered']] },
  text: { type: 'rich' },
};

TextBoxWidget.dialogSize = 'large';

export default TextBoxWidget;
