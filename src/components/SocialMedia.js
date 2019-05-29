import React, { Fragment } from 'react';
import PrismicConfig from '../prismic-configuration';
import { RichText, Link } from 'prismic-reactjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'reactstrap';
import { MenuTitle, SocialMediaLink } from '../styles'

const MenuItems = props => (
  <Fragment>
    {props.items.map(({ link, label, font_awesome }) =>
      <li className="nav-item" key={label} >
        <SocialMediaLink href={Link.url(link, PrismicConfig.linkResolver)} >
          <FontAwesomeIcon icon={['fab', font_awesome]} fixedWidth className="mr-2" />
          {label}
        </SocialMediaLink>
      </li>
    )}
  </Fragment>
)

const SocialMedia = props => (
  <Col sm="3" xs="6" className="mb-3 mb-sm-0">
    <MenuTitle>{RichText.asText(props.slice.primary.title)}</MenuTitle>
    <ul className="nav flex-column">
      <MenuItems items={props.slice.items} />
    </ul>
  </Col>
)
export default SocialMedia
