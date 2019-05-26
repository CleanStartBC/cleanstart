import React from 'react';
import { Link, RichText } from 'prismic-reactjs';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { StructuredText, StyledParallaxBanner } from '../styles';
import PrismicConfig from '../prismic-configuration';

const CallToAction = props => (
  <StyledParallaxBanner image={props.slice.primary.image.url} className={`${props.slice.primary.color}`}
    layers={[
              {
                  image: props.slice.primary.image.url,
                  amount: 0.2,
              },
            ]}
    >
    <Container fluid>
      <Row className={`align-items-center justify-content-center`}>
        {
          (props.slice.primary.position === 'left')
          ?
          <>
            <Col md={props.slice.primary.span}>
              <StructuredText>
                {RichText.render(props.slice.primary.body1)}
              </StructuredText>
            </Col>
            <Col md={{ size: 3, offset: 1 }}>
              <div className={`text-right`}>
                <RouterLink to={Link.url(props.slice.primary.link, PrismicConfig.linkResolver)}  className={`btn btn-lg btn-primary`}>{props.slice.primary.label}</RouterLink>
              </div>
            </Col>
          </>
          :
          <Col md={props.slice.primary.span} className={`mx-auto text-center`}>
            <StructuredText>
              {RichText.render(props.slice.primary.body1)}
              <RouterLink to={Link.url(props.slice.primary.link, PrismicConfig.linkResolver)}  className={`btn btn-lg btn-primary mt-4`}>{props.slice.primary.label}</RouterLink>
            </StructuredText>
          </Col>
        }
      </Row>
    </Container>
  </StyledParallaxBanner>
)
export default CallToAction
