import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import { RichText } from 'prismic-reactjs';
import NotFound from './NotFound';

import Faq from './components/Faq';
import People from './components/People';
import ImageBlocks from './components/ImageBlocks';
import PostIndex from './components/PostIndex';
import Icon from './components/Icon';
import Header from './components/Header';
import Logos from './components/Logos';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import BulletList from './components/BulletList';
import Subnav from './components/Subnav';
import Contact from './components/Contact';
import Columns from './components/Columns';
import ImageIconList from './components/ImageIconList';
import ImageText from './components/ImageText';


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
			const { doc } = this.state;
      const document = doc.data;

			const slices = document.body.map(function(slice, index){
				if (slice.slice_type === 'subnavigation') {
					return(
						<Subnav key={index} slice={slice} />
					);
  			} else if (slice.slice_type === 'bulletlist') {
		  		return(
						<BulletList key={index} slice={slice} />
		  		);
  			} else if (slice.slice_type === 'image_icon_list') {
					return(
						<ImageIconList key={index} slice={slice}/>
					)
  			} else if (slice.slice_type === 'faq') {
		  		return(
						<Faq slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'people') {
		  		return(
						<People slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'image_block') {
		  		return(
						<ImageBlocks slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'call_to_action') {
		  		return(
						<CallToAction slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'testimonials') {
		  		return(
						<Testimonials slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'logos') {
					return(
						<Logos slice={slice} key={index} />
					);
				}  else if (slice.slice_type === 'columns') {
					return(
						<Columns slice={slice} key={index} />
					);
				} else if (slice.slice_type === 'image_text') {
		  		return(
						<ImageText slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'icon') {
					return(
						<Icon key={index} slice={slice}/>
					)
  			} else if (slice.slice_type === 'header') {
					return(
						<Header key={index} slice={slice} />
					);
  			} else if (slice.slice_type === 'pricing') {
					return(
						<Pricing key={index} slice={slice} />
					);
  			} else if (slice.slice_type === 'posts') {
					return(
						<PostIndex key={index} slice={slice}/>
					)
  			} else if (slice.slice_type === 'contact') {
					return(
						<Contact key={index} slice={slice}/>
					)
  			} else {
					return null;
				}
  		});

	    return (
	      <Fragment>
					<Helmet>
            <title>{RichText.asText(document.meta_title) + " | CleanStart"}</title>
						<meta name="description" content={RichText.asText(document.meta_description)} />
          </Helmet>
					<main>
						{slices}
					</main>
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
					<main>
						<NotFound />
					</main>
			 </Fragment>
			)
		}
  	return (
      <Fragment>
      </Fragment>
    )
  }
}
