import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import { RichText } from 'prismic-reactjs';
import NotFound from './NotFound';
import Loading from "./Loading";

import {
	AsyncFaq,
	AsyncPeople,
	AsyncImageBlocks,
	AsyncPostIndex,
	AsyncIcon,
	AsyncHeader,
	AsyncLogos,
	AsyncPricing,
	AsyncCallToAction,
	AsyncTestimonials,
	AsyncBulletList,
	AsyncSubnav,
	AsyncContact,
	AsyncColumns,
	AsyncImageIconList,
	AsyncImageText
} from './components/async';

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
						<AsyncSubnav key={index} slice={slice} />
					);
  			} else if (slice.slice_type === 'bulletlist') {
		  		return(
						<AsyncBulletList key={index} slice={slice} />
		  		);
  			} else if (slice.slice_type === 'image_icon_list') {
					return(
						<AsyncImageIconList key={index} slice={slice}/>
					)
  			} else if (slice.slice_type === 'faq') {
		  		return(
						<AsyncFaq slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'people') {
		  		return(
						<AsyncPeople slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'image_block') {
		  		return(
						<AsyncImageBlocks slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'call_to_action') {
		  		return(
						<AsyncCallToAction slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'testimonials') {
		  		return(
						<AsyncTestimonials slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'logos') {
					return(
						<AsyncLogos slice={slice} key={index} />
					);
				}  else if (slice.slice_type === 'columns') {
					return(
						<AsyncColumns slice={slice} key={index} />
					);
				} else if (slice.slice_type === 'image_text') {
		  		return(
						<AsyncImageText slice={slice} key={index} />
		  		);
  			} else if (slice.slice_type === 'icon') {
					return(
						<AsyncIcon key={index} slice={slice}/>
					)
  			} else if (slice.slice_type === 'header') {
					return(
						<AsyncHeader key={index} slice={slice} />
					);
  			} else if (slice.slice_type === 'pricing') {
					return(
						<AsyncPricing key={index} slice={slice} />
					);
  			} else if (slice.slice_type === 'posts') {
					return(
						<AsyncPostIndex key={index} slice={slice}/>
					)
  			} else if (slice.slice_type === 'contact') {
					return(
						<AsyncContact key={index} slice={slice}/>
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
  	return <Loading />
  }
}
