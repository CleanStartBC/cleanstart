import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import { RichText } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import Navigation from './Navigation';
import Footer from './Footer';
import SliceZone from './SliceZone';

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
	  Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'homepage')).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }

  render() {
  	if (this.state.doc) {
      const document = this.state.doc.data;
	    return (
	      <Fragment>
					<Helmet>
            <title>{RichText.asText(document.meta_title) + " | CleanStart"}</title>
						<meta name="description" content="CleanStart - Metro Vancouver and Vancouver Island Junk Removal" />
          </Helmet>
					<Navigation />
					<main>
						<SliceZone sliceZone={document.body} />
					</main>
					<Footer />
	     </Fragment>
	    );
  	}
  	return null
  }
}
