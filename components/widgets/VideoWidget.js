import React from 'react';
import PropTypes from 'prop-types';
import { Container, EmbeddedVideo } from '@raketa-cms/raketa-cms';

const VideoWidget = ({ videoUrl, containerSettings }) => (
  <Container className="video-widget" settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <div className="full-width">
          <EmbeddedVideo videoUrl={videoUrl} />
        </div>
      </div>
    </div>
  </Container>
);

VideoWidget.title = 'Video';
VideoWidget.category = 'Media';

VideoWidget.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

VideoWidget.defaults = {
  videoUrl: 'https://www.youtube.com/watch?v=TJ1SDXbij8Y',
  containerSettings: {},
};

VideoWidget.adminFields = {
  videoUrl: { type: 'text' },
};

export default VideoWidget;
