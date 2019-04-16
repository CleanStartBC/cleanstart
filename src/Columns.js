import React, { Component, Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from './prismic-configuration';
import { Container, Row, Col } from 'reactstrap';
import { StructuredText, StyledSection } from './styles';

export default class Columns extends Component {
  render(){
    const { slice } = this.props;
    const items = slice.items.map(function(item, index){
      return(
        <Col md={item.width} key={index}>
          <StructuredText largetext style={{ marginBottom: '3rem' }} >
            {RichText.render(item.body1, PrismicConfig.linkResolver)}
          </StructuredText>
        </Col>
      );
    });
    return(
      <StyledSection pbt className={`${slice.primary.color}`}>
        <Container fluid>
          <Row>
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
                  <Row className={`${slice.primary.alignment} justify-content-center`}>
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
