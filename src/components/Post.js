import React, { Component } from 'react';
import SliceZone from './SliceZone';
import { AsyncNotFound } from './async';
import Meta from '../meta';
import Layout from '../Layout';

export default class Post extends Component {
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
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('post', props.match.params.uid, {}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
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
				<>
					<main>
						<AsyncNotFound />
					</main>
			 </>
			)
		}
	}

  render() {
  	return(
			<Layout>
				{this.renderPage()}
			</Layout>
		)
  }
}
