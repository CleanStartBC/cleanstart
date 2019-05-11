import React, { Component } from 'react'
import styled from 'styled-components'

const Loader = styled.div`
 margin-top: calc(50vh - 126px);
 margin-bottom: calc(50vh - 126px);
 margin-left: auto;
 margin-right: auto;
 border: 16px solid #f3f3f3;
 border-radius: 50%;
 border-top: 16px solid #005891;
 border-right: 16px solid #D12331;
 border-bottom: 16px solid #D9D458;
 width: 120px;
 height: 120px;
 -webkit-animation: spin 2s linear infinite;
 animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
   0% { -webkit-transform: rotate(0deg); }
   100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
  }
`

export default class Loading extends Component {
  render(){
    return(
      <Loader />
    )
  }
}
