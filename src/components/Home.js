import React, { Component } from 'react';
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
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

	fetchPage(props) {
    if (props.prismicCtx) {

			return props.prismicCtx.api.getSingle('homepage', (err, doc) => {
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
  	return <Layout prismicCtx={this.props.prismicCtx}>{this.renderHome()}</Layout>
  }
}
