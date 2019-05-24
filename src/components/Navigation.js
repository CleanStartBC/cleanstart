import React, { Component, Fragment } from 'react'
import { Link } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Burger from '../../node_modules/react-css-burger/dist/';
import NavLink from './NavLink';

import {
	Button,
	Media,
	Container,
	// NavbarBrand,
	Nav,
	NavItem,
	// DropdownItem,
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
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {
    if (this.state.doc) {
      const document = this.state.doc.data;
      const navContent = document.nav.map(function(slice, index){
  			if (slice.slice_type === 'nav_item') {
  				const navItems = slice.items.map(function(navItem, navItemIndex){
						if (typeof navItem.label !== "undefined") {
              return(
                <RouterLink key={navItemIndex} className="dropdown-item" to={`${Link.url(navItem.link, PrismicConfig.linkResolver)}`}>{navItem.label}</RouterLink>
              )
						} else {
							return null;
						}
  				});

  				return(
						<Fragment key={index}>
						{
							(slice.items.length > 1)
							?
              <UncontrolledDropdown nav inNavbar >
								<StyledToggle nav caret>
									{slice.primary.label}
								</StyledToggle>
								<StyledDropdownMenu right>
									{navItems}
								</StyledDropdownMenu>
							</UncontrolledDropdown>
							:
							<NavItem>
	              <NavLink name={slice.primary.label} path={`${Link.url(slice.primary.link, PrismicConfig.linkResolver)}`}  />
	            </NavItem>
						}
						</Fragment>
  				);
  			} else {
  				return null;
  			}
  		});
      return(
				<StyledNavbar fixed="top" expand="lg">
					<Container fluid>
		        <StyledNavbarBrand to="/">
							<NavbarBrandImage
								src={document.image.url}
								alt={document.image.alt}
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
								{navContent}
		          </Nav>
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
		        </NavbarCollapse>

					</Container>
		    </StyledNavbar>
      )
    }
    return(
			<StyledNavbar fixed="top" expand="lg">
			</StyledNavbar>
    )
  }
}
