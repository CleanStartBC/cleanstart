import React, { Component } from 'react';
import { Link } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';

import {
	Container,
	Collapse,
	Navbar,
	Nav,
	NavItem,
} from 'reactstrap';

import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Subnav extends Component {
  render() {
    const { slice } = this.props;
    const items = slice.items.map(function(item, itemIndex){
      return(
        <NavItem key={itemIndex}>
          <NavLink name={item.label} path={Link.url(item.link, PrismicConfig.linkResolver)} />
        </NavItem>
      );
    });
    return(
      <Navbar dark expand="lg" color="primary">
        <Container fluid>
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              {items}
            </Nav>

						<FontAwesomeIcon icon={['fab', 'facebook-f']} color="white" size="lg" className="mr-4" />
						<FontAwesomeIcon icon={['fab', 'twitter']} color="white" size="lg" className="mr-4" />
						<FontAwesomeIcon icon={['fab', 'linkedin-in']} color="white" size="lg" />



          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
