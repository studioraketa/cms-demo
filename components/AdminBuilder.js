import React from 'react';
// import styled from 'styled-components';
// import jQuery from 'jquery';

import { PageBuilder } from '@raketa-cms/raketa-cms';
import LIBRARY from './widgets';

class AdminBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false,
      isLoading: false,
      page: props.page,
    };
  }

  componentDidMount() {
    // Check for changes and warn user
    // jQuery(window).bind('beforeunload', () => {
    //   if (this.state.dirty) return 'You have unsaved changes';
    // });
  }

  handleChange() {
    this.setState({ dirty: true });
  }

  handleSave(page) {
    const { save_url } = this.props;

    // this.setState({ isLoading: true }, () => {
    //   jQuery.ajax({
    //     method: 'PATCH',
    //     beforeSend: (xhr) => { xhr.setRequestHeader('X-CSRF-Token', jQuery('meta[name="csrf-token"]').attr('content')); },
    //     contentType: 'application/json; charset=utf-8',
    //     url: save_url,
    //     data: JSON.stringify({ widgets: page.widgets }),
    //     dataType: 'json',
    //     success: (resp) => {
    //       this.setState({ isLoading: false, dirty: false });
    //     },
    //     error: (xhr, err, e) => {
    //       alert('An error occured saving this page. ');
    //     },
    //   });
    // });
  }

  render() {
    const { host } = this.props;
    const { isLoading, dirty, page } = this.state;

    return (
      <div className="widgets-spacings-reset">
        <PageBuilder
          host={host}
          dirty={dirty}
          library={LIBRARY}
          themes={[['none', 'None'], ['white', 'White'], ['grey', 'Grey'], ['black', 'Black']]}
          navigation={[
            { url: '/admin/pages', label: 'Pages' },
          ]}
          page={page}
          onChange={changedPage => this.handleChange(changedPage)}
          onSave={pageToSave => this.handleSave(pageToSave)}
          onExit={() => console.log('on exit')}
        />
      </div>
    );
  }
}

PageBuilder.defaultProps = {
  host: 'http://localhost:3000/',
};

export default AdminBuilder;
