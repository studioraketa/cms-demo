import React from 'react';
import PropTypes from 'prop-types';
import { Container, List, TextInput } from '@raketa-cms/raketa-cms';

const NavigationWidget = ({ list, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <div className="full-width">
          <nav className="nav">
            {list.map((item, idx) =>
              <a href={item.link} key={idx}>{item.title}</a>
            )}
          </nav>
        </div>
      </div>
    </div>
  </Container>
);

NavigationWidget.title = 'Navigation';
NavigationWidget.category = 'General';

NavigationWidget.defaultProps = {
  list: [],
};

NavigationWidget.propTypes = {
  list: PropTypes.array,
  containerSettings: PropTypes.object.isRequired,
};

NavigationWidget.defaults = {
  list: [
    { id: 1, title: 'Link 1', link: '#', },
    { id: 3, title: 'Link 2', link: '#', },
    { id: 2, title: 'Link 3', link: '#', },
  ],
  variant: '3_columns',
  containerSettings: {},
};

const NavigationItem = ({ settings, onChangeItem }) => (
  <div>
    <TextInput
      label="Title"
      onChange={value => onChangeItem('title', value)}
      value={settings.title}
    />

    <TextInput
      label="Link"
      onChange={value => onChangeItem('link', value)}
      value={settings.link}
    />
  </div>
);

NavigationItem.defaultProps = {
  settings: {},
};

NavigationItem.propTypes = {
  settings: PropTypes.object,
  onChangeItem: PropTypes.func.isRequired,
};

NavigationWidget.adminFields = (items, onChange, settings) => (
  <div>
    <List
      listItem={(settings, onChangeItem) =>
        <NavigationItem settings={settings} onChangeItem={onChangeItem} />}
      onChangeList={onChange}
      items={items}
    />
  </div>
);

export default NavigationWidget;
