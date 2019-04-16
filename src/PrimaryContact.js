import React, { Component, Fragment } from 'react'
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { RichText } from 'prismic-reactjs';

import Menu from './Menu';
import SocialMedia from './SocialMedia';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopFooter = styled.div`
  width: 100%;
  padding: 6rem 0;
  background: #79b241;
  color: #fff;
`
const BottomFooter = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  background: #447638;
  color: #fff;
`

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
            <Container>
              <Row>
                <Col md="2">
                  <img src={document.image.url} alt={document.image.alt} className="img-fluid" />
                </Col>
                <Col md={{ size: 9, offset: 1 }}>
                  {slices}
                </Col>
              </Row>
            </Container>
          </TopFooter>
          <BottomFooter>
            <Container>
              <Row>
                <Col md="6" className="text-md-left my-auto">
                  <p className="small mb-0">
                    <FontAwesomeIcon icon={['far', 'map-marker-alt']} className="mr-2" />
                    210 – 3989 Henning Drive, Burnaby BC V5C 6P8
                  </p>
                </Col>
                <Col md="6" className="text-md-right my-auto">
                  <p className="small mb-0">{document.copyright}</p>
                </Col>
              </Row>
            </Container>
          </BottomFooter>
        </footer>
      )
    }
    return(
      <Fragment>
      </Fragment>
    )
  }
}
