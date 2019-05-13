import React, { Component } from 'react'
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Container, Row, Col } from 'reactstrap';
import Menu from './Menu';
import SocialMedia from './SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TopFooter, BottomFooter } from '../styles'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null
    }
  }
  componentWillMount() {
    Prismic.api(PrismicConfig.apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'footer')).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }
  render(){
    if (this.state.doc) {
      const { doc } = this.state;
      const document = doc.data;

      const slices = document.body.map(function(slice, index){
        if (slice.slice_type === 'menu') {
          return(
            <Menu slice={slice} key={index} />
          )
        } else if (slice.slice_type === 'social_media') {
          return(
            <SocialMedia slice={slice} key={index} />
          )
        } else {
          return null;
        }
      });

      return(
        <footer>
          <TopFooter>
            <Container fluid>
              <Row>
                <Col md="2">
                  <a href="/" className="d-block w-100 text-center"><img src={document.image.url} alt={document.image.alt} className="img-fluid mb-5 mb-md-0 footerImg" /></a>
                </Col>
                <Col md={{ size: 9, offset: 1 }}>
                  <Row>{slices}</Row>
                </Col>
              </Row>
            </Container>
          </TopFooter>
          <BottomFooter>
            <Container fluid>
              <Row>
                <Col md="6" className="text-center text-md-left my-auto">
                  <p className="small mb-0">
                    <FontAwesomeIcon icon={['far', 'map-marker-alt']} className="mr-2" />
                    210 – 3989 Henning Drive, Burnaby BC V5C 6P8
                  </p>
                </Col>
                <Col md="6" className="text-center text-md-right my-auto">
                  <p className="small mb-0">{document.copyright}</p>
                </Col>
              </Row>
            </Container>
          </BottomFooter>
        </footer>
      )
    }
    return(
      <footer>
        <TopFooter></TopFooter>
        <BottomFooter></BottomFooter>
      </footer>
    )
  }
}
