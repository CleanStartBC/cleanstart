import React, { Component, Fragment } from 'react'
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import { Container, Row, Col } from 'reactstrap';
import { StyledSection, StructuredText } from '../styles';


export default class PostIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      doc: null,
    }
  }
  componentWillMount() {
    Prismic.api(PrismicConfig.apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'post'),{ orderings: '[my.post.first_publication_date desc]', pageSize: 6 }).then(response => {
        if (response) {
          this.setState({
            doc: response.results,
          });
        }
      });
    });
  }
  render(){
    if (this.state.doc) {
      const { slice } = this.props
      const document = this.state.doc;
      const items = document.map(function(post, index){
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    		const pubDate = new Date(post.first_publication_date)
    		return(
          <Col md={slice.primary.post_column_size} key={index}>
            <StructuredText>
              <img src={post.data.featured_image.url} alt="" className="img-fluid mb-3"/>
              <h4>{RichText.asText(post.data.title)}</h4>
              {RichText.render(post.data.excerpt)}
              <div className="d-flex justify-content-between align-items-end">
                <a href="" className="mt-3 d-inline-block">Read more.</a>
                {/* <small class="text-muted">{pubDate.toLocaleDateString("en-US", options)}</small> */}
              </div>
            </StructuredText>
          </Col>
    		)
      })

      return(
        <StyledSection className="bg-white">
          <Container fluid>
            <Row>
              {items}
            </Row>
          </Container>
        </StyledSection>
      )
    }
    return(
      <Fragment>
      </Fragment>
    )
  }
}
