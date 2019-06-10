import React from 'react';
import Slider from 'react-slick';
import { Link, RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import PrismicConfig from '../prismic-configuration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SliderTitleContainer, StyledBanner, SliderLink } from '../styles';
import "./Carousel.scss";
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={['fal', 'chevron-right']}
			className={className}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
		<FontAwesomeIcon
      icon={['fal', 'chevron-left']}
			className={className}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  fade: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  appendDots: (dots) => {
    return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} className="carousel-dots" />
  }
};

const Slides = props => (
  <Slider {...settings}>
    {props.items.map(({ alignment, title1, subtext, image, span, link, color }, index) =>
      <header key={index}>
        <StyledBanner className={`carousel-section ${color} align-items-center d-flex`}
          layers={[
                    {
                        image: image.url,
                        amount: 0.25
                    },
                  ]}
          >
          <Container fluid>
            <Row>
              <Col md={span} className={ (alignment === 'center') && 'mx-auto' }>
                <SliderLink href={Link.url(link, PrismicConfig.linkResolver)}>
                  <SliderTitleContainer>
                    {RichText.render(title1)}
                    {RichText.render(subtext)}
                  </SliderTitleContainer>
                </SliderLink>
              </Col>
            </Row>
          </Container>
        </StyledBanner>
      </header>
    )}
  </Slider>
)

const Carousel = props => (
  <>
    <Slides items={props.slice.items} />
  </>
)
export default Carousel
