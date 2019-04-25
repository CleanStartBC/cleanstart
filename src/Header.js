import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import { StyledParallaxBanner } from './styles';

const Header = props => (
  <StyledParallaxBanner className={`${props.slice.primary.color}`} height={props.slice.primary.height}
    layers={[
              {
                  image: props.slice.primary.image.url,
                  amount: 0.2,
              },
            ]}
    >
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={props.slice.primary.span} className={ (props.slice.primary.alignment === 'center') && 'mx-auto' }>
            {RichText.render(props.slice.primary.title1)}
            {RichText.render(props.slice.primary.subtext)}
          </Col>
        </Row>
      </Container>
  </StyledParallaxBanner>
)
export default Header
