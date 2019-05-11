import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import { RichText } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';

import Carousel from './components/Carousel';
import Logos from './components/Logos';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import Columns from './components/Columns';
import ImageIconList from './components/ImageIconList';
import ImageText from './components/ImageText';

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


			const slices = document.body.map(function(slice, index){
				if (slice.slice_type === 'slider') {
		  		return(
						<Carousel key={index} slice={slice} />
		  		);
	      } else if (slice.slice_type === 'image_icon_list') {
					return(
						<ImageIconList key={index} slice={slice}/>
					)
  			} else if (slice.slice_type === 'image_text') {
		  		return(
						<ImageText slice={slice} key={index} />
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
				} else if (slice.slice_type === 'columns') {
					return(
						<Columns slice={slice} key={index} />
					);
				} else {
					return null;
				}
  		});
	    return (
	      <Fragment>
					<Helmet>
            <title>{RichText.asText(document.meta_title) + " | CleanStart"}</title>
						<meta name="description" content="CleanStart - Metro Vancouver and Vancouver Island Junk Removal" />
          </Helmet>
					<main>
						{slices}
					</main>
	     </Fragment>
	    );
  	}
  	return (
      <Fragment>
      </Fragment>
    )
  }
}
