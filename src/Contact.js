import React, { Component } from 'react';
import GoogleMapContainer from './GoogleMapContainer';
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import { StyledSection } from './styles';
import styled from 'styled-components';

const MapWrapper = styled.div`
	width: 100%;
	height: 220px;
	margin-bottom: 3.5rem;
`

export default class Contact extends Component {
  render(){
    const { slice } = this.props;
    const items = slice.items.map(function(item, index){
      const options = { hour: 'numeric', minute: 'numeric' };
      const start = new Date(item.day_start)
      const end = new Date(item.day_end)
      return(
        <div key={index}>
          <strong>{RichText.asText(item.day_label)}</strong>
          <p>{start.toLocaleTimeString("en-US", options)} - {end.toLocaleTimeString("en-US", options)}</p>
        </div>
      )
    })

    return(
      <StyledSection className={`${slice.primary.color} contact-page`}>
        <Container fluid>
          <Row className="justify-content-center">


							<Col lg="8" className="text-center">
									<h1 className="mb-5">{RichText.asText(slice.primary.name1)}</h1>
									<MapWrapper>
										<GoogleMapContainer location={slice.primary.geolocation} name="CleanStart" address={RichText.asText(slice.primary.address)} />
									</MapWrapper>

							</Col>

							<Col lg="5">

								<div className="d-block mb-3">
									<strong>Phone</strong>
									<p><a href={`tel:${RichText.asText(slice.primary.phone)}`}>{RichText.asText(slice.primary.phone)}</a></p>
								</div>
								<div className="d-block mb-3">
									<strong>Email</strong>
									<p><a href={`mailto:${RichText.asText(slice.primary.email)}`}>{RichText.asText(slice.primary.email)}</a></p>
								</div>
								<div className="d-block">
									<strong>Address</strong>
									<p className="mb-0">
										<a href={`http://maps.google.com/?q=${RichText.asText(slice.primary.address)}`}>
											{RichText.asText(slice.primary.address)}
										</a>
									</p>
								</div>
							</Col>

							<Col lg={{ size: 3 }} className="pl-5 border-left">
								{items}

							</Col>



          </Row>
        </Container>
      </StyledSection>
    )
  }
}
