import React from 'react'
import { StyledNavLink } from '../styles';

const NavLink = props => {
  const pageURI = window.location.pathname+window.location.search
  const aClassName = (props.path === pageURI) ? "nav-link active" : "nav-link"
  return(
    <StyledNavLink href={props.path} className={aClassName}>
      {props.name}
    </StyledNavLink>
  )
}

export default NavLink
