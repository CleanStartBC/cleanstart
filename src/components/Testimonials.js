import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { StructuredText, StyledParallaxBanner, TestimonialContainer } from '../styles';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  dots: true,
  autoplaySpeed: 6000,
  arrows:false,
  responsive: [
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 720,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ],
  appendDots: (dots) => {
    return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />
  }
};

const TestimonialsContent = props => (
  <Slider {...settings}>
    {props.items.map(({ quote, name1 }) =>
      <TestimonialContainer key={name1}>
        <FontAwesomeIcon
          icon={['fas', 'quote-left']}
          size="2x"
          className="mb-3"
          color="rgb(121, 178, 65)"
        />
        <StructuredText largetext>
          {RichText.render(quote)}
        </StructuredText>
        <h6 className="mt-4">{name1}</h6>
      </TestimonialContainer>
    )}
  </Slider>
)

const Testimonials = props => (
  <StyledParallaxBanner className={`${props.slice.primary.color}`}
    layers={[
              {
                  image: props.slice.primary.image.url,
                  amount: 0.2,
              },
            ]}
  >
    <Container fluid>
      { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText className="mb-5" >{RichText.render(props.slice.primary.body1)}</StructuredText>) }
    <TestimonialsContent items={props.slice.items} />

    </Container>
  </StyledParallaxBanner>
)
export default Testimonials
