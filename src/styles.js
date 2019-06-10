import styled, { keyframes } from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Media, Navbar, Collapse, DropdownMenu, DropdownToggle, Label } from 'reactstrap';
import { Link as RouterLink } from 'react-router-dom';

const StyledParallaxBanner = styled(ParallaxBanner)`
  height: auto !important;
  padding: ${props => (props.height === "large") ? "10rem 0" : "6rem 0"};
  @media (max-width: 575.98px) {
    padding: 6rem 0;
  }
`
const StyledBanner = styled(ParallaxBanner)`
	height: 562px !important;
	@media (max-width: 575.98px) {
		height: 50vh;
	}
`
const BlogHeader = styled(ParallaxBanner)`
  height:auto !important;
  padding: 6rem 0;
`
const BlogBody = styled.main`
  padding: 6rem 0;
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

const SocialMediaLink = styled.a`
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

const MenuLink = styled(RouterLink)`
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
  h2,h3,h4,h5,h6,p {
    ${({ blogtext }) => blogtext && `
      margin-bottom: 1.75rem;
    `}
  }
  p {
    ${({ largetext }) => largetext && `
      font-size: 1.125rem;
      @media (max-width: 575.98px) {
        font-size: 1rem;
      }
    `}
    ${({ extralarge }) => extralarge && `
      font-size: 1.25rem;
      @media (max-width: 575.98px) {
        font-size: 1.125rem;
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
  p.lead {
    /* font-size: 1.5rem; */
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

const StyledNavbar = styled(Navbar)`
	font-family: 'Graphik';
	border-top: 4px solid rgb(176, 211, 92);
	box-shadow: 0 0.25rem 0.125rem 0 rgba(0,0,0,0.05);
	padding-top: 1rem;
	padding-bottom: 1rem;
  background: #fff;
	z-index: 10;
`
const NavbarToggler = styled.div`
  border: 0;
  padding: 0;
`
const NavbarCollapse = styled(Collapse)`
  @media (max-width: 575.98px) {
    margin-top: 2rem;
    margin-left: -1rem;
    margin-right: -1rem;
    .btn-lg {
      display: block; width: calc(100% - 2rem);
      margin: 1.5rem auto 0;
    }
  }
`
const StyledNavLink = styled(RouterLink)`
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  letter-spacing: 0.02em;
  color: rgb(68, 118, 56);
  &.active {
    color: rgb(30, 62, 24);
  }
  @media (max-width: 575.98px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`
const StyledNavbarBrand = styled(RouterLink)`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`

const StyledToggle = styled(DropdownToggle)`
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  letter-spacing: 0.02em;
  color: rgb(68, 118, 56);
  &.active, &:focus {
    color: rgb(30, 62, 24);
  }
  @media (max-width: 575.98px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`


const StyledDropdownMenu = styled(DropdownMenu)`
  top: 73px;
  border-radius: 0px;
  padding-top: 0;
  padding-bottom: 0;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
  .dropdown-item {
    padding: 0.75rem 1rem;
    letter-spacing: 0.02em;
    &:hover, &:focus {
      background: rgb(121, 178, 65);
      color: white;
    }
  }
  @media (max-width: 575.98px) {
    box-shadow: none;
    .dropdown-item {
      padding-left: 2rem;
    }
  }
`

const PhoneNumber = styled.span`
  color: rgb(30, 62, 24);
  font-size: 1.25rem;
  font-weight: 500;
  background-image: linear-gradient(180deg, transparent 70%, rgba(176, 211, 92, 0.4) 0);
`

const Ripple = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`

const RippleLoader = styled.div`
  display: inline-block;
  position: absolute;
  width: 84px;
  height: 84px;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ${Ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`
const StyledLabel = styled(Label)`
  /* font-weight: 500;
  letter-spacing: 0.02em; */
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
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
  NavbarToggler,
  NavbarCollapse,
  StyledNavbarBrand,
  StyledNavLink,
  StyledDropdownMenu,
  MapWrapper,
  FaCircle,
  Feature,
  SliderTitleContainer,
  QuestionAnswerContainer,
  NavbarBrandImage,
  TestimonialContainer,
  SliderLink,
  StyledToggle,
  TopFooter,
  BottomFooter,
  PhoneNumber,
  RippleLoader,
  BlogHeader,
  BlogBody,
  StyledLabel,
  SocialMediaLink
}
