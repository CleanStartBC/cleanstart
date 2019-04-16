import React from 'react';
import qs from 'qs';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';

const apiEndpoint = 'http://cleanstart.prismic.io/api/v2';

export default class Preview extends React.Component {

  componentWillMount() {
    this.preview(this.props);
  }

  preview(props) {
    const params = qs.parse(this.props.location.search.slice(1))
    Prismic.getApi(apiEndpoint)
      .then(api => { api.previewSession(params.token, PrismicConfig.linkResolver, '/')
      .then(url => {
        props.history.push(url);
      });
    });
  }

  render() {
    return <p>Loading previews...</p>;
  }
}
