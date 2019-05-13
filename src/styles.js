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
const Css =`
.container-fluid {
   max-width: 1344px;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #231f20;
  @media (min-width: 1200px) {
    padding-top: 112px;
  }
  @media (max-width: 1199.98px) {
    padding-top: 98px;
  }
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Graphik';
}

.block-img img {
  max-width: 100%;
}
.custom-icon {
  text-align: center;
}
.custom-icon img {
  width: 120px;
  display: inline-block;
  box-shadow: none !important;
}

span[class^="burger_hamburger-inner__"],span[class^="burger_hamburger-inner__"]:before, span[class^="burger_hamburger-inner__"]:after {
  border-radius: 0;
}

h1 {
  @include font-size(2.5rem);
}
h2 {
  @include font-size(2rem);
}
h3 {
  @include font-size(1.75rem);
}
h4 {
  @include font-size(1.5rem);
}
h5 {
  @include font-size(1.25rem);
}
h6 {
  @include font-size(1rem);
}
.lead {
  @include font-size(1.25rem);
}
.display {
  @include font-size(3rem);
}
p {
  @include font-size(1rem);
}

.btn {
  border-radius: 2px;
  font-weight: 500;
  letter-spacing: 0.05em;
}
.btn-outline-primary {
  border-color: transparent;
}



.pricing-description {
  ul {
    padding-left: 0;
    list-style: none;
    margin-bottom: 1.5rem;
    li {
      margin-bottom: 0.75rem;
    }
  }
  .btn {
    padding: 0.5rem 1.5rem;
  }
}
.pricing-card {
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.1);
  .price, .pricing-tier {
    color: $green;
  }
}
.pricing-highlight {
  border: 1px solid $green !important;
}

.navbar-dark {
  padding-top: 0;
  padding-bottom: 0;
}

.navbar-toggler {
  border: 0;
  padding: 0;
}

.navbar-dark .nav-item:last-child .nav-link {
  border-right: 0;
}

.dropdown-menu {
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
      background: $green;
      color: white;
    }
  }
}

.navbar-light {
  background: #fff;
}
.navbar-collapse {
  @media (max-width: 575.98px) {
    margin-top: 2rem;
    margin-left: -1rem;
    margin-right: -1rem;
    .btn-lg {
      display: block; width: calc(100% - 2rem);
      margin: 1.5rem auto;
    }
  }
}
.dropdown-menu {
  @media (max-width: 575.98px) {
    box-shadow: none;
    .dropdown-item {
      padding-left: 2rem;
    }
  }
}
.navbar-light .navbar-nav .nav-link {
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  color: $darkgreen;
  letter-spacing: 0.02em;
  @media (max-width: 575.98px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
.footerImg {
  @media (max-width: 575.98px) {
    width: 180px;
  }
  @media (max-width: 767.98px) {
    width: 180px;
  }
}

.navbar-dark .navbar-nav .nav-link {
  padding: 0.75rem 1rem;
  &.active {
      background-color: $lightgreen;
      font-weight: 500;
  }
}

.magic-dots.slick-dots li.slick-active button:before {
  color: $green;
}

a.button {
  border-radius: 2px;
}

.text-center {
  display: block;
  text-align: center;
}

.bg-white, .bg-light, .bg-secondary, .bg-primary, .bg-dark {
  .lead {
    font-family: 'Graphik';
  }
}

.bg-white, .bg-light {
  h1,h2,h3,h4,h5,h6 {
    color: rgb(68, 118, 56);
  }
  .lead {
    color: rgb(121, 178, 65);
  }
  a:not(.btn) {
    color: rgb(30,62,24);
    background-image: linear-gradient(180deg,transparent 70%,rgba(176,211,92,.4) 0);
  }
  .fontIcon path {
    fill: rgb(121, 178, 65);
  }
}
.bg-primary, .bg-dark {
  h1,h2,h3,h4,h5,h6, p {
    color: #fff;
  }
  .lead {
    color: rgb(237, 234, 171);
  }
  .fontIcon path {
    fill: rgb(237, 234, 171);
  }
}
.bg-secondary {
  h1,h2,h3,h4,h5,h6, p {
    color: rgb(30,62,24);
  }
  p.lead {
    color: rgb(30,62,24);
  }
  .fontIcon path {
    fill: rgb(68, 118, 56);
  }
}
.bg-primary {
  .btn-primary {
    background-color: rgb(176, 211, 92);
    border-color: rgb(176, 211, 92);
  }
}

.btn-link {
  letter-spacing: 0;
  text-align: left;
  &:hover, &:focus, &.active {
    text-decoration: none;
  }
}

.contact-page {
  font-size: 1.0675rem;
  strong {
    font-weight: 500;
  }
}
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
  PhoneNumber,
  Css
}
