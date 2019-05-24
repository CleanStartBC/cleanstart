import React, { Component, Fragment } from 'react';
import { Link, RichText } from 'prismic-reactjs';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { StructuredText, StyledParallaxBanner } from '../styles';
import PrismicConfig from '../prismic-configuration';

export default class CallToAction extends Component {
  render() {
    const { slice } = this.props;
    return(
      <StyledParallaxBanner image={slice.primary.image.url} className={`${slice.primary.color}`}
        layers={[
                  {
                      image: slice.primary.image.url,
                      amount: 0.2,
                  },
                ]}
        >
        <Container fluid>
          <Row className="align-items-center justify-content-center">
            {
              (slice.primary.position === 'left')
              ?
              <Fragment>
                <Col md={slice.primary.span}>
                  <StructuredText>
                    {RichText.render(slice.primary.body1)}
                  </StructuredText>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <div className={`text-right`}>
                    <RouterLink to={Link.url(slice.primary.link, PrismicConfig.linkResolver)}  className={`btn btn-lg btn-primary`}>{slice.primary.label}</RouterLink>
                  </div>
                </Col>
              </Fragment>
              :
              <Col md={slice.primary.span} className="mx-auto text-center">
                <StructuredText>
                  {RichText.render(slice.primary.body1)}
                  <RouterLink to={Link.url(slice.primary.link, PrismicConfig.linkResolver)}  className={`btn btn-lg btn-primary mt-4`}>{slice.primary.label}</RouterLink>
                </StructuredText>
              </Col>
            }

          </Row>
        </Container>
      </StyledParallaxBanner>
    )
  }
}
