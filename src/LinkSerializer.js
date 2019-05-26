import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';
import PrismicConfig from './prismic-configuration';
const Elements = RichText.Elements;

// -- Function to add unique key to props
const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const LinkSerializer = function(type, element, content, children, key) {

  var props = {};
  switch(type) {

    // Add a class to hyperlinks
    // If external link create "a" element else use link from react-router
    case Elements.hyperlink:
      const targetAttr = element.data.target ? { target: element.data.target } : {};
      const relAttr = element.data.target ? { rel: 'noopener' } : {};
      props = Object.assign({
        className: 'link-class',
        href: element.data.url || PrismicConfig.linkResolver(element.data)
      }, targetAttr, relAttr);
      if (element.data.url) {
        return React.createElement('a', propsWithUniqueKey(props, key), children);
      } else {
        return <Link key={key} to={{pathname: (element.data.url || PrismicConfig.linkResolver(element.data))}}>{children}</Link>
      }

    // Return null to stick with the default behavior
    default:
      return null;
  }
};

export default LinkSerializer
