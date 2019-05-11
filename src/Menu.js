import React, { Fragment } from 'react';
import PrismicConfig from './prismic-configuration';
import { Link, RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Col } from 'reactstrap';

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

const MenuItems = props => (
  <Fragment>
    {props.items.map(({ link, label }) =>
      <li className="nav-item" key={label} >
        <MenuLink href={Link.url(link, PrismicConfig.linkResolver)} >
          {label}
        </MenuLink>
      </li>
    )}
  </Fragment>
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
