import React, { Component, Fragment } from 'react'
import Prismic from 'prismic-javascript';
import { Link } from 'prismic-reactjs';
import PrismicConfig from './prismic-configuration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	Button,
	Media,
	Container,
	Collapse,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu } from 'reactstrap';

import Burger from 'react-css-burger';
import NavLink from './NavLink';
import { NavbarBrandImage } from './styles';
import styles from './navigation.module.scss';

import { StyledNavbar } from './styles';



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
                <DropdownItem key={navItemIndex} className={styles.dropdownItemStyle} tag="a" href={Link.url(navItem.link, PrismicConfig.linkResolver)}>{navItem.label}</DropdownItem>
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
								<DropdownToggle nav caret>
									{slice.primary.label}
								</DropdownToggle>
								<DropdownMenu right>
									{navItems}
								</DropdownMenu>
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
				<StyledNavbar light fixed="top" expand="lg">
					<Container fluid>
		        <NavbarBrand href="/">
							<NavbarBrandImage
								src={document.image.url}
								alt={document.image.alt}
							/>
						</NavbarBrand>
						<div className="navbar-toggler">
							<Burger
				        onClick={this.toggle}
				        active={this.state.isOpen}
								burger="squeeze"
								color="#79b241"
								hoverOpacity={0.8}
								scale={1}
								marginTop='0.625rem'
				      />
						</div>
		        <Collapse isOpen={this.state.isOpen} navbar>
		          <Nav className="mr-auto" navbar>
								{navContent}
		          </Nav>
							<a className="nav-item nav-link mr-3 text-secondary" href="tel:18552978278">
								<Media className="align-items-center">
									<Media left>
										<FontAwesomeIcon icon="phone" color="#79b241" size="lg" className={styles.iconPhone} />
									</Media>
									<Media body>
										<span className={styles.phoneNumber}>1-855-297-8278</span>
									</Media>
								</Media>
							</a>
							<Button color="primary" size="lg">Book Now</Button>
		        </Collapse>

					</Container>
		    </StyledNavbar>
      )
    }
    return(
      <Fragment>
			</Fragment>
    )
  }
}
