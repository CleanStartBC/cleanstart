import styled from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Media } from 'reactstrap';

const StyledParallaxBanner = styled(ParallaxBanner)`
  height: auto !important;
  padding: ${props => (props.height === "large") ? "10rem 0" : "6rem 0"};
`

const StyledSection = styled.section`
  padding-top: 6rem;
  padding-bottom: ${props => props.pbt ? "3rem" : "6rem"};
`

const NavbarBrandImage = styled.img`
  width: ${props => props.width || "155px"};
  @media (max-width: 575.98px) {
    width: 100px;
  }
  @media (max-width: 1199.98px) {
    width: 120px;
  }
`

const TitleContainer = styled.div`
  h1 {
    position: relative;
    z-index: 2;
    margin-bottom: 0.5rem;
  }
  p {
    position: relative;
    z-index: 2;
    margin-bottom: 0;
    line-height: 1.4;
  }
`

const SliderTitle = styled(TitleContainer)`
  h1 {
    font-size: 3.25rem;
  }
  p {
    margin-bottom: 0.75rem;
  }
`


const StructuredText = styled.div`
  z-index: 2;
  position: relative;
  margin-bottom: ${props => props.mbt ? "3rem" : "0" };
  padding: ${props => props.padding || "0" };
  p {
    font-size: ${props => props.lgp ? "1.125rem" : "1rem"};
    &:last-child {
      margin-bottom: 0;
    }
  }
  .lead {
    display: block;
    font-size: 1.25rem;
    font-weight: normal;
  }
  a {
    font-weight: 500;
    &:hover {
      text-decoration: none;
    }
    span.text-center {
      display: inline-block;
      float: none;
      text-align: center;
      margin: 0 auto;
    }
  }
  img {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
  }
`
const SliderLink = styled.a`
  &:hover {
    text-decoration: none;
  }
`


const TestimonialContainer = styled.article`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  h6 {
    color: rgb(68, 118, 56);
  }
`

const QuestionAnswerContainer = styled.div`
  padding: 0 0 2rem;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 2rem;
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

const ResponsiveImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
`
const FaCircle = styled(FontAwesomeIcon)`
  path {
    fill: rgb(121, 178, 65);
  }
`
const Feature = styled(Media)`
  margin-bottom: 2rem;
`

export {
  StyledParallaxBanner,
  StructuredText,
  ResponsiveImage,

  StyledSection,
  FaCircle,
  Feature,

  QuestionAnswerContainer,
  NavbarBrandImage,
  TitleContainer,
  SliderTitle,
  TestimonialContainer,
  SliderLink
}
