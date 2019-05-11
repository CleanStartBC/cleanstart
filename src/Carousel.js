import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Link, RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import PrismicConfig from './prismic-configuration';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SliderTitleContainer, StyledParallaxBanner, SliderLink } from './styles';


import "./Carousel.scss";

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

const StyledBanner = styled(StyledParallaxBanner)`
	height: auto !important;
	padding: 12rem 0;
	@media (max-width: 575.98px) {
		height: 50vh;
	}
`

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

export default class Carousel extends Component {
  render(){
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
    const { slice } = this.props;
    const items =  slice.items.map(function(item, index){
      return(
				<header key={index}>
					<StyledBanner className={`carousel-section ${item.color}`}
						layers={[
											{
													image: item.image.url,
													amount: 0.25,
											},
										]}
						>
						<Container fluid>
							<Row>
								<Col md={item.span} className={ (item.alignment === 'center') && 'mx-auto' }>
									<SliderLink href={Link.url(item.link, PrismicConfig.linkResolver)}>
										<SliderTitleContainer>
											{RichText.render(item.title1)}
											{RichText.render(item.subtext)}
										</SliderTitleContainer>
									</SliderLink>
								</Col>
							</Row>
						</Container>
					</StyledBanner>
				</header>
      )
    });
    return(
      <Slider {...settings}>
        {items}
      </Slider>
    )
  }
}
