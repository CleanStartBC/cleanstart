import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import SliceZone from './SliceZone';
import Meta from '../meta';
import Layout from '../Layout';

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  doc: null,
		  notFound: false,
		}
	}

  componentWillMount() {
    const apiEndpoint = PrismicConfig.apiEndpoint;
		const accessToken = PrismicConfig.accessToken;
	  Prismic.api(apiEndpoint, { accessToken }).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'homepage')).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }

	renderHome() {
		if (this.state.doc) {
			const document = this.state.doc.data;
			return (
				<>
					{Meta(document)}
					<main>
						<SliceZone sliceZone={document.body} />
					</main>
			 </>
			);
		}
	}

  render() {
  	return <Layout>{this.renderHome()}</Layout>
  }
}
