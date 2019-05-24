import React, { Component, Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import { Container, Row, Col, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Feature, FaCircle, StyledSection, StructuredText } from '../styles';

export default class Icon extends Component {
  render(){
    const { slice } = this.props;
    const items = slice.items.map(function(item, index){
      const icon = item.font_awesome;

      const isCircle = (slice.primary.circle === 'true')
      ?
      <span className={`fa-layers fa-fw mr-5 mt-4`} style={{ fontSize: '0.85rem' }} >
        <FaCircle icon="circle" size="4x" />
        <FontAwesomeIcon icon={['fal', icon]} size="2x" inverse transform="right-6" fixedWidth color="white"/>
      </span>
      :
      <FontAwesomeIcon icon={['fal', icon]} size="3x" fixedWidth className="fontIcon mb-2"/>

      if (slice.primary.placement === 'left') {
        return(
          <Col lg={item.size} key={index}>
            <Feature>
              <Media left>
                {isCircle}
              </Media>
              <Media body className="pl-3">
                <StructuredText largetext >
                  {RichText.render(item.body1, PrismicConfig.linkResolver)}
                </StructuredText>
              </Media>
            </Feature>
          </Col>
        );
      } else {
        return(
          <Col lg={item.size} key={index} >
            <Feature>
              <Media body>
                {isCircle}
                <StructuredText largetext style={{ marginTop: '2rem' }}>
                  {RichText.render(item.body1, PrismicConfig.linkResolver)}
                </StructuredText>
              </Media>
            </Feature>
          </Col>
        );
      }
    });
    return(
      <StyledSection pbt className={slice.primary.color}>
        <Container fluid>
          <Row className="justify-content-center">
          {
            (slice.primary.position === 'top')
            ?
            <Fragment>
              <Col lg="12">
                { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText>{RichText.render(slice.primary.body1)}</StructuredText>) }
              </Col>
              {items}
            </Fragment>
            :
            <Fragment>
              <Col lg={{ size: 3 }}>
                { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText className="mb-5 mb-sm-5 mb-md-0 text-center text-md-left">{RichText.render(slice.primary.body1)}</StructuredText>) }
              </Col>
              <Col lg={{ size: 9 }}>
                <Row>
                  {items}
                </Row>
              </Col>
            </Fragment>
          }
          </Row>
        </Container>
      </StyledSection>
    );
  }
}
