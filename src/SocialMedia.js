import React, { Component } from 'react';
import PrismicConfig from './prismic-configuration';
import { Link, RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'reactstrap';

const MenuTitle = styled.h6`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
  margin-bottom: 1.5rem;
`

const MenuLink = styled.a`
  display: block;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0;
  padding-right: 0;
  color: #fff;
  &:hover {
    color: #fff;
  }
`

export default class SocialMedia extends Component {
  render(){
    const { slice } = this.props;
    const items = slice.items.map(function(item, index){
      const icon = item.font_awesome;
      return(
        <li className="nav-item" key={index}>
          <MenuLink href={Link.url(item.link, PrismicConfig.linkResolver)} >
            <FontAwesomeIcon icon={['fab', icon]} fixedWidth className="mr-2" />
            {item.label}
          </MenuLink>
        </li>
      )
    });
    return(
      <Col sm="3" xs="6">
        <MenuTitle>{RichText.asText(slice.primary.title)}</MenuTitle>
        <ul className="nav flex-column">
          {items}
        </ul>
      </Col>
    )
  }
}
