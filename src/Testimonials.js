import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { StructuredText, StyledParallaxBanner, TestimonialContainer } from './styles';

export default class Testimonials extends Component {
  render(){
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
			autoplay: true,
      dots: true,
			autoplaySpeed: 6000,
      arrows:false,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />
      }
    };
    const { slice } = this.props;
    const items = slice.items.map(function(item, index){
      return(
        <TestimonialContainer key={index}>
          <FontAwesomeIcon
            icon={['fas', 'quote-left']}
            size="2x"
            className="mb-3"
            color="rgb(121, 178, 65)"
          />
          <StructuredText lgp>
            {RichText.render(item.quote)}
          </StructuredText>
          <h6 className="mt-4">{item.name1}</h6>
        </TestimonialContainer>
      )
    })
    return(
      <StyledParallaxBanner className={`${slice.primary.color}`}
        layers={[
                  {
                      image: slice.primary.image.url,
                      amount: 0.2,
                  },
                ]}
      >
        <Container fluid>
          { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText mbt>{RichText.render(slice.primary.body1)}</StructuredText>) }
          <Slider {...settings}>
            {items}
          </Slider>
        </Container>
      </StyledParallaxBanner>
    )
  }
}
