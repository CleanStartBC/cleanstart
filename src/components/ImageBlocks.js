import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import { Container, Row, Col } from 'reactstrap';
import { StyledParallaxBanner, StructuredText, ResponsiveImage } from '../styles';

const ImageRow = props => (
  <Fragment>
    {props.items.map(({ color, background_image, alignment, position, width, image_width, image, body1 }, index) =>
    <StyledParallaxBanner className={`${color}`} key={index}
      layers={[
                {
                    image: background_image.url,
                    amount: 0.2,
                },
              ]}
      >
        <Container fluid>
          <Row className={`justify-content-center ${alignment}`}>
            {position === 'left'
            ?
            <Fragment>
              <Col md={image_width} className="pr-lg-5">
                <ResponsiveImage src={image.url} alt={image.alt} />
              </Col>
              <Col md={width} >
                <StructuredText largetext>
                  {RichText.render(body1, PrismicConfig.linkResolver)}
                </StructuredText>
              </Col>
            </Fragment>
            :
            <Fragment>
              <Col md={width} >
                <StructuredText largetext>
                  {RichText.render(body1, PrismicConfig.linkResolver)}
                </StructuredText>
              </Col>
              <Col md={image_width} className="pl-lg-5" >
                <ResponsiveImage src={image.url} alt={image.alt} />
              </Col>
            </Fragment>
            }
          </Row>
        </Container>
    </StyledParallaxBanner>
    )}
  </Fragment>
)

const ImageBlocks = props => (
  <Fragment>
    <ImageRow items={props.slice.items} />
  </Fragment>
)
export default ImageBlocks
