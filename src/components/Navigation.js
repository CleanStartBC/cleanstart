import React, { Component, Fragment } from 'react'
import { Link } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Burger from '../../node_modules/react-css-burger/dist/';
import NavLink from './NavLink';

import {
	Media,
	Container,
	Nav,
	NavItem,
	UncontrolledDropdown } from 'reactstrap';
import { Link as RouterLink } from 'react-router-dom';
import {
	StyledNavbar,
	NavbarBrandImage,
	NavbarCollapse,
	NavbarToggler,
	StyledNavbarBrand,
	StyledDropdownMenu,
	PhoneNumber,
	StyledToggle } from '../styles';

import logo from '../images/cleanstartbc-logo.png';


const NavItems = props => {
	return props.slice.items.map((item, i) => {
		if (typeof item.label[0] !== "undefined") {
			return <RouterLink key={i} className="dropdown-item" to={`${Link.url(item.link, PrismicConfig.linkResolver)}`}>{item.label}</RouterLink>
		} else {
			return null
		}
	})
}

const NavContent = props => {
	return props.items.map((slice, i) => {
		if (slice.slice_type === 'nav_item') {
			return(
				<Fragment key={i}>
				{
					(slice.items.length > 1)
					?
					<UncontrolledDropdown nav inNavbar >
						<StyledToggle nav caret>
							{slice.primary.label}
						</StyledToggle>
						<StyledDropdownMenu right>
							<NavItems slice={slice} />
						</StyledDropdownMenu>
					</UncontrolledDropdown>
					:
					<NavItem>
						<NavLink name={slice.primary.label} path={`${Link.url(slice.primary.link, PrismicConfig.linkResolver)}`}  />
					</NavItem>
				}
				</Fragment>
			)
		} else {
			return null
		}
	})
}

export default class Navigation extends Component {
  constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			doc: null
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

	fetchPage(props) {
    if (props.prismicCtx) {
			return props.prismicCtx.api.getSingle('navigation', (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

	renderNav() {
		if (this.state.doc) {
			const document = this.state.doc.data
			return <NavContent items={document.nav} />
		}
	}

	renderNavRight() {
		if (this.state.doc) {
			const document = this.state.doc.data
			return (
				<>
					<Nav navbar>
						<a className="nav-item nav-link mx-3 text-secondary" href="tel:18552978278">
							<Media className="align-items-center">
								<Media left>
									<FontAwesomeIcon icon="phone" color="#B0D35C" size="lg" className="mr-3" />
								</Media>
								<Media body>
									<PhoneNumber>{document.phone}</PhoneNumber>
								</Media>
							</Media>
						</a>
					</Nav>
					<RouterLink to={Link.url(document.link, PrismicConfig.linkResolver)} className={`btn btn-lg btn-primary`}>{document.label}</RouterLink>
				</>
			)
		}
	}

  render() {
    return(
			<StyledNavbar fixed="top" expand="lg">
				<Container fluid>
					<StyledNavbarBrand to="/">
						<NavbarBrandImage
							src={logo}
							alt="CleanStart BC - Property Services"
						/>
					</StyledNavbarBrand>
					<NavbarToggler className="navbar-toggler">
						<Burger
							onClick={this.toggle}
							active={this.state.isOpen}
							burger="squeeze"
							color="#79b241"
							hoverOpacity={0.8}
							scale={1}
							marginTop='0.625rem'
						/>
					</NavbarToggler>
					<NavbarCollapse isOpen={this.state.isOpen} navbar>
						<Nav navbar className="mr-auto">
							{this.renderNav()}
						</Nav>
						{this.renderNavRight()}
					</NavbarCollapse>
				</Container>
			</StyledNavbar>
    )
  }
}
