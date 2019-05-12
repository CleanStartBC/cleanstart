import styled from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Media } from 'reactstrap';
import { Navbar } from 'reactstrap';

const StyledParallaxBanner = styled(ParallaxBanner)`
  height: auto !important;
  padding: ${props => (props.height === "large") ? "10rem 0" : "6rem 0"};
  @media (max-width: 575.98px) {
    padding: 6rem 0;
  }
`
const StyledBanner = styled(ParallaxBanner)`
	height: auto !important;
	padding: 12rem 0;
	@media (max-width: 575.98px) {
		height: 50vh;
	}
`
const StyledSection = styled.section`
  padding-top: 6rem;
  padding-bottom: ${props => props.pbt ? "3rem" : "6rem"};
  @media (max-width: 575.98px) {
    padding-top:3rem;
  }
`
const MapWrapper = styled.div`
	width: 100%;
	max-width: 100%;
	height: 220px;
	margin-bottom: 3.5rem;
	@media (max-width: 575.98px) {
		margin-right: -1rem;
	}
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
const MenuTitle = styled.h6`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
  margin-bottom: 1.5rem;
`

const MenuLink = styled.a`
  font-family: 'Graphik';
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 0;
  padding-right: 0;
  color: #fff;
  &:hover {
    color: #fff;
  }
`

const StructuredText = styled.div`
  z-index: 2;
  position: relative;
  font-family: 'Graphik';
  p {
    ${({ largetext }) => largetext && `
      font-size: 1.125rem;
      @media (max-width: 575.98px) {
        font-size: 1rem;
      }
    `}
    &:last-child {
      margin-bottom: 0;
    }
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

const SliderTitleContainer = styled.div`
  h1 {
    font-size: 3.25rem;
    @media (max-width: 1200px) {
      font-size: calc(1.45rem + 2.4vw);
    }
  }
`
const TopFooter = styled.div`
  width: 100%;
  padding: 6rem 0;
  background: #79b241;
  color: #fff;
  @media (max-width: 575.98px) {
    padding: 3rem 0;
  }
`
const BottomFooter = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  background: #447638;
  color: #fff;
`
const Loader = styled.div`
  margin-top: calc(50vh - 126px);
  margin-bottom: calc(50vh - 126px);
  margin-left: auto;
  margin-right: auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #005891;
  border-right: 16px solid #D12331;
  border-bottom: 16px solid #D9D458;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
   0% { -webkit-transform: rotate(0deg); }
   100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
  }
`

const StyledNavbar = styled(Navbar)`
	font-family: 'Graphik';
	border-top: 4px solid rgb(176, 211, 92);
	box-shadow: 0 0.25rem 0.125rem 0 rgba(0,0,0,0.05);
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	z-index: 10;
`
const PhoneNumber = styled.span`
  color: rgb(30, 62, 24);
  font-size: 1.25rem;
  font-weight: 500;
  background-image: linear-gradient(180deg, transparent 70%, rgba(176, 211, 92, 0.4) 0);
`

export {
  StyledParallaxBanner,
  StyledBanner,
  StructuredText,
  ResponsiveImage,
  MenuTitle,
  MenuLink,
  StyledSection,
  StyledNavbar,
  MapWrapper,
  FaCircle,
  Feature,
  Loader,
  SliderTitleContainer,
  QuestionAnswerContainer,
  NavbarBrandImage,
  TestimonialContainer,
  SliderLink,
  TopFooter,
  BottomFooter,
  PhoneNumber
}
