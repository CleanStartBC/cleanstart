import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

export default class HTMLContent extends Component {
  contentClickHandler = (e) => {
    const targetLink = e.target.closest('a');
    if(!targetLink) return;
    e.preventDefault();

    console.log(targetLink.href)
  }

  render() {
    return(
      <div
        onClick={this.contentClickHandler}
        dangerouslySetInnerHTML={{__html: this.props.content }}
      />
    );
  }
}
