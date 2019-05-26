import React from 'react';
import PrismicConfig from '../prismic-configuration';
import { Link, RichText } from 'prismic-reactjs';
import { Col } from 'reactstrap';
import { MenuTitle, MenuLink } from '../styles'


const MenuItems = props => (
  <>
    {props.items.map(({ link, label }) =>
      <li className="nav-item" key={label} >
        <MenuLink href={Link.url(link, PrismicConfig.linkResolver)} >
          {label}
        </MenuLink>
      </li>
    )}
  </>
)

const Menu = props => (
  <Col sm="3" xs="6" className="mb-3 mb-sm-0">
    <MenuTitle>{RichText.asText(props.slice.primary.title)}</MenuTitle>
    <ul className="nav flex-column">
      <MenuItems items={props.slice.items} />
    </ul>
  </Col>
)
export default Menu
