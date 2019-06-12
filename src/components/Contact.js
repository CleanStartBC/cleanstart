import React from 'react';
import GoogleMapContainer from './GoogleMapContainer';
import { RichText, Date } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import { StyledSection, MapWrapper } from '../styles';

const options = { hour: 'numeric', minute: 'numeric' };

const BusinessHours = props => {
  const items = props.items.map(function(item, i) {
    const start = Date(item.day_start)
    const end = Date(item.day_end)

    const formattedStart = Intl.DateTimeFormat('en-us', options).format(start)
    const formattedEnd = Intl.DateTimeFormat('en-us', options).format(end)

    return(
      <div key={i}>
        <strong>{RichText.asText(item.day_label)}</strong>
        <p>{formattedStart} - {formattedEnd}</p>
      </div>
    )
  })
  return items
}

const Contact = props => (
  <StyledSection className={`${props.slice.primary.color} contact-page`}>
    <Container fluid>
      <Row className={`justify-content-center`}>
        <Col lg="8" className={`text-center`}>
          <h1 className="mb-5">{RichText.asText(props.slice.primary.name1)}</h1>
          <MapWrapper>
            <GoogleMapContainer location={props.slice.primary.geolocation} name="CleanStart" address={RichText.asText(props.slice.primary.address)} />
          </MapWrapper>
        </Col>
        <Col lg="5">
          <div className="d-block mb-3">
            <strong>Phone</strong>
            <p><a href={`tel:${RichText.asText(props.slice.primary.phone)}`}>{RichText.asText(props.slice.primary.phone)}</a></p>
          </div>
          <div className="d-block mb-3">
            <strong>Email</strong>
            <p><a href={`mailto:${RichText.asText(props.slice.primary.email)}`}>{RichText.asText(props.slice.primary.email)}</a></p>
          </div>
          <div className="d-block">
            <strong>Address</strong>
            <p className="mb-0">
              <a href={`http://maps.google.com/?q=${RichText.asText(props.slice.primary.address)}`}>
                {RichText.asText(props.slice.primary.address)}
              </a>
            </p>
          </div>
        </Col>
        <Col lg={{ size: 3 }} className="pl-lg-5 mt-4 mt-md-0 border-left">
          <BusinessHours items={props.slice.items} />
        </Col>
      </Row>
    </Container>
  </StyledSection>
)

export default Contact
