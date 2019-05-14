import React, { Component, Fragment } from 'react'
import Prismic from 'prismic-javascript';
import { Link } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Burger from '../../node_modules/react-css-burger/dist/';
import NavLink from './NavLink';
import {
	Button,
	Media,
	Container,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownItem } from 'reactstrap';
import {
	StyledNavbar,
	NavbarBrandImage,
	NavbarCollapse,
	NavbarToggler,
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
    Prismic.api(PrismicConfig.apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'navigation')).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }
  render() {
    if (this.state.doc) {
      const document = this.state.doc.data;
      const navContent = document.nav.map(function(slice, index){
  			if (slice.slice_type === 'nav_item') {
  				const navItems = slice.items.map(function(navItem, navItemIndex){
						if (typeof navItem.label !== "undefined") {
              return(
                <DropdownItem key={navItemIndex} tag="a" href={Link.url(navItem.link, PrismicConfig.linkResolver)}>{navItem.label}</DropdownItem>
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
	              <NavLink name={slice.primary.label} path={Link.url(slice.primary.link, PrismicConfig.linkResolver)}  />
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
		        <NavbarBrand href="/">
							<NavbarBrandImage
								src={document.image.url}
								alt={document.image.alt}
							/>
						</NavbarBrand>
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
											<PhoneNumber>1-855-297-8278</PhoneNumber>
										</Media>
									</Media>
								</a>
							</Nav>
							<Button color="primary" size="lg">Book Now</Button>
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
