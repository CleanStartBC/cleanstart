import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import { Container, Row, Col } from 'reactstrap';
import { StyledParallaxBanner, StructuredText, ResponsiveImage } from '../styles';

export default class ImageBlocks extends Component {
  render(){
    const { slice } = this.props;
    const items = slice.items.map(function(item, index){
      if (item.position === 'left') {
        return(
          <StyledParallaxBanner className={`${item.color}`} key={index}
            layers={[
                      {
                          image: item.background_image.url,
                          amount: 0.2,
                      },
                    ]}
            >
            <Container fluid>
              <Row className={`justify-content-center ${item.alignment}`}>
                <Col md={item.image_width} className="pr-lg-5">
                  <ResponsiveImage src={item.image.url} alt={item.image.alt} />
                </Col>
                <Col md={item.width} >
                  <StructuredText pfs="1.125rem">
                    {RichText.render(item.body1, PrismicConfig.linkResolver)}
                  </StructuredText>
                </Col>
              </Row>
            </Container>
        </StyledParallaxBanner>
        )
      } else {
        return(
          <StyledParallaxBanner className={`${item.color}`} key={index}
            layers={[
                      {
                          image: item.background_image.url,
                          amount: 0.2,
                      },
                    ]}
            >
            <Container fluid>
              <Row className={`justify-content-center ${item.alignment}`}>
                <Col lg={{ size: 6 }}>
                  <StructuredText pfs="1.125rem">
                    {RichText.render(item.body1, PrismicConfig.linkResolver)}
                  </StructuredText>
                </Col>
                <Col lg={{ size: 5, offset: 1 }}>
                  <ResponsiveImage src={item.image.url} alt={item.image.alt} />
                </Col>
              </Row>
            </Container>
          </StyledParallaxBanner>
        )
      }
    });
    return(
      <section>
        {items}
      </section>
    )
  }
}
