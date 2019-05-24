import React, { Component } from 'react';
import SliceZone from './SliceZone';
import { AsyncNotFound } from './async';
import Meta from '../meta';
import Layout from '../Layout';

export default class Page extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  doc: null,
		  notFound: false,
		}
	}

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

	fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getByUID('page', props.match.params.uid, {}, (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

	renderPage() {
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
		if (this.state.notFound) {
			return(
				<main>
					<AsyncNotFound />
				</main>
			)
		}
	}
  render() {
		return <Layout prismicCtx={this.props.prismicCtx}>{this.renderPage()}</Layout>
  }
}
