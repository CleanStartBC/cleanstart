import React from 'react'

const NavLink = props => {
  const pageURI = window.location.pathname+window.location.search
  const aClassName = (props.path === pageURI) ? "nav-link active" : "nav-link"
  return(
    <a href={props.path} className={aClassName}>
      {props.name}
    </a>
  )
}

export default NavLink
