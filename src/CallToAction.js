import React, { Component, Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col, Button } from 'reactstrap';
import { StructuredText, StyledParallaxBanner } from './styles';

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
                    <Button tag="a" size="lg" href={slice.primary.link} color="primary">{slice.primary.label}</Button>
                  </div>
                </Col>
              </Fragment>
              :
              <Col md={slice.primary.span} className="mx-auto text-center">
                <StructuredText>
                  {RichText.render(slice.primary.body1)}
                  <Button tag="a" size="lg" href={slice.primary.link} color="primary" className="mt-4">{slice.primary.label}</Button>
                </StructuredText>
              </Col>
            }

          </Row>
        </Container>
      </StyledParallaxBanner>
    )
  }
}
