import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Container, Col, Row } from 'reactstrap';
import { StructuredText, StyledSection } from '../styles';
import PrismicConfig from '../prismic-configuration';
import Prismic from 'prismic-javascript';

export default class Posts extends Component {
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

  renderPosts() {
    if (this.state.doc) {
      return this.state.doc.map((item, index) =>
        <Col sm={`4`} key={`${item.data.title}_` + index}>
          <StructuredText>
            <img src={item.data.featured_image.url} alt={item.data.featured_image.alt} className={`img-fluid mb-3`}/>
            <h4>{RichText.asText(item.data.title)}</h4>
            {RichText.render(item.data.subtitle)}
            <a href={PrismicConfig.linkResolver(item)} className={`mt-3 d-inline-block`}>Read more.</a>
          </StructuredText>
        </Col>
      )
    }
  }

  render(){
    return(
      <StyledSection className={`bg-white`}>
        <Container fluid>
          <Row>
            {this.renderPosts()}
          </Row>
        </Container>
      </StyledSection>
    )
  }
}
