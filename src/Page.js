import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import { RichText } from 'prismic-reactjs';
import NotFound from './NotFound';
import Loading from "./Loading";
import Navigation from './Navigation';
import Footer from './Footer';
import SliceZone from './SliceZone';


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
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('page', props.match.params.uid, {}, (err, doc) => {
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

  render() {
  	if (this.state.doc) {
      const document = this.state.doc.data;
	    return (
	      <Fragment>
					<Helmet>
            <title>{RichText.asText(document.meta_title) + " | CleanStart"}</title>
						<meta name="description" content={RichText.asText(document.meta_description)} />
          </Helmet>
					<Navigation />
					<main>
						<SliceZone sliceZone={document.body} />
					</main>
					<Footer />
	     </Fragment>
	    );
  	}
		if (this.state.notFound) {
			return(
				<Fragment>
					<Helmet>
						<title>Page Not Found | CleanStart - Metro Vancouver and Vancouver Island Junk Removal</title>
						<meta name="description" content="CleanStart - Metro Vancouver and Vancouver Island Junk Removal" />
					</Helmet>
					<Navigation />
					<main>
						<NotFound />
					</main>
					<Footer />
			 </Fragment>
			)
		}
  	return <Loading />
  }
}
