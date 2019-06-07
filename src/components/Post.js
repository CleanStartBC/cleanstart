import React, { Component } from 'react';
import { AsyncNotFound } from './async';
import Meta from '../meta';
import Layout from '../Layout';
import { BlogHeader, BlogBody, StructuredText } from '../styles';
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import PrismicConfig from '../prismic-configuration';
import LinkSerializer from '../LinkSerializer';

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
      return props.prismicCtx.api.getByUID('post', props.match.params.uid, {}, (err, doc) => {
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
			const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
			const pubDate = new Date(this.state.doc.first_publication_date)
	    return (
	      <>
					{Meta(document)}
					<BlogHeader className={`bg-primary`}
						layers={[
				              {
				                  image: process.env.PUBLIC_URL + '/images/bg-green.svg',
				                  amount: 0.2,
				              },
				            ]}
						>
				      <Container fluid>
				        <Row className={`align-items-center`}>
				          <Col lg="8" className={`mx-auto`}>
				            {RichText.render(document.title)}
				            <p className={`lead mb-0`}>{pubDate.toLocaleDateString("en-US", options)}</p>
				          </Col>
				        </Row>
				      </Container>
				  </BlogHeader>
					<BlogBody className={`bg-white`}>
						<Container fluid>
							<Row className={`align-items-center`}>
								<Col lg="8" className={`mx-auto`}>
									<StructuredText largetext blogtext>
										{RichText.render(document.content, PrismicConfig.linkResolver, LinkSerializer)}
									</StructuredText>
								</Col>
							</Row>
						</Container>
					</BlogBody>
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
