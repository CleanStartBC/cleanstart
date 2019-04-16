import React, { Component, Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from './prismic-configuration';
import { Container, Row, Col } from 'reactstrap';
import { StyledSection, StructuredText, ResponsiveImage } from './styles';

export default class ImageText extends Component {
  render(){
    const { slice } = this.props;
    const items = slice.items.map(function(item, index){



      if (item.position === 'left') {
        return(

              <Row className={`justify-content-center ${item.alignment}`} key={index}>
                <Col>
                  <ResponsiveImage src={item.image.url} alt="" className="mb-4 mb-sm-0" />
                </Col>
                <Col lg={item.width} className="pl-lg-5">
                  <StructuredText lgp>
                    {RichText.render(item.body1, PrismicConfig.linkResolver)}
                  </StructuredText>
                </Col>
              </Row>

        )
      } else {
        return(

              <Row className={`justify-content-center ${item.alignment}`} key={index}>
                <Col lg={item.width}>
                  <StructuredText lgp>
                    {RichText.render(item.body1, PrismicConfig.linkResolver)}
                  </StructuredText>
                </Col>
                <Col className="pl-lg-5">
                  <ResponsiveImage src={item.image.url} alt="" className="mb-4 mb-sm-0" />
                </Col>
              </Row>

        )
      }
    });
    return(
      <StyledSection className={`${slice.primary.color}`}
        >
        <Container fluid>
          <Row className={`justify-content-center`}>
          {
            (slice.primary.position === 'top')
            ?
            <Fragment>
              <Col lg="12">
                { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText lgp>{RichText.render(slice.primary.body1)}</StructuredText>) }
                {items}
              </Col>
            </Fragment>
            :
            <Fragment>
              { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<Col lg={{ size: 3 }}><StructuredText lgp>{RichText.render(slice.primary.body1)}</StructuredText></Col>) }
              <Col lg={{ size: 9 }}>
                {items}
              </Col>
            </Fragment>
          }
          </Row>
        </Container>
      </StyledSection>
    )
  }
}
