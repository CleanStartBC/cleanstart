import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import { StyledParallaxBanner } from './styles';

export default class Header extends Component {
  render(){
    const { slice } = this.props;
    return(

      <StyledParallaxBanner className={`${slice.primary.color}`} height={slice.primary.height}
        layers={[
                  {
                      image: slice.primary.image.url,
                      amount: 0.2,
                  },
                ]}
        >
          <Container fluid>
            <Row className="align-items-center">
              <Col lg={slice.primary.span} className={ (slice.primary.alignment === 'center') && 'mx-auto' }>
                {RichText.render(slice.primary.title1)}
                {RichText.render(slice.primary.subtext)}
              </Col>
            </Row>
          </Container>
      </StyledParallaxBanner>

    )
  }
}
