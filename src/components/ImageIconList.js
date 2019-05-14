import React, { Component, Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col, Media } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PrismicConfig from '../prismic-configuration';
import { Feature, FaCircle, StyledSection, StructuredText, ResponsiveImage } from '../styles';

const ImageRow = props => (
  <Fragment>
    {props.items.map(({ width, alignment, font_awesome, body1 }, index) =>
      <Fragment>
        {props.circle === 'true'
        ?
        <Fragment>
          <Col lg={width} key={index}>
            <Feature className={alignment}>
              <Media left>
                <span className={`fa-layers fa-fw mt-3 mr-5`}>
                  <FaCircle icon="circle" size="3x" />
                  <FontAwesomeIcon icon={['fal', font_awesome]} size="lg" inverse transform="right-8" fixedWidth color="white"/>
                </span>
              </Media>
              <Media body>
                <StructuredText >
                  {RichText.render(body1, PrismicConfig.linkResolver)}
                </StructuredText>
              </Media>
            </Feature>
          </Col>
        </Fragment>
        :
        <Fragment>
          <Col lg={width} key={index} >
            <Feature>
              <Media left>
                <FontAwesomeIcon icon={['fal', font_awesome]} size="2x" fixedWidth className="fontIcon mr-3"/>
              </Media>
              <Media body>
                <StructuredText>
                  {RichText.render(body1, PrismicConfig.linkResolver)}
                </StructuredText>
              </Media>
            </Feature>
          </Col>
        </Fragment>
        }
      </Fragment>
    )}
  </Fragment>
)


const ImageIconList = props => (
  <StyledSection pbt className={props.slice.primary.color}>
    <Container fluid>
      <Row noGutters className={`justify-content-center ${props.slice.primary.alignment}`}>
        {
          props.slice.primary.position === 'left'
          ?
          <Fragment>
            <Col lg="5" >
              <ResponsiveImage src={props.slice.primary.image.url} alt={props.slice.primary.image.alt} className="mb-4 mb-sm-4 mb-md-0" />

            </Col>
            <Col lg={{ size: 6, offset: 1 }}>
              { ((typeof props.slice.primary.grid_body !== 'undefined' && typeof props.slice.primary.grid_body[0] !== 'undefined') && props.slice.primary.grid_body[0].text ) && (<StructuredText  >{RichText.render(props.slice.primary.grid_body)}</StructuredText>) }
              <Row>
                <ImageRow items={props.slice.items} circle={props.slice.primary.circle} />
              </Row>
            </Col>
          </Fragment>
          :
          <Fragment>
            <Col lg={{size: 7,order: 1}} md={{ size: 8, order: 12}} xs={{ order: 12 }}>
              { ((typeof props.slice.primary.grid_body !== 'undefined' && typeof props.slice.primary.grid_body[0] !== 'undefined') && props.slice.primary.grid_body[0].text ) && (<Col lg="12"><StructuredText className="mb-5">{RichText.render(props.slice.primary.grid_body)}</StructuredText></Col>) }
              <Row>
                <ImageRow items={props.slice.items} circle={props.slice.primary.circle} />
              </Row>
            </Col>
            <Col lg={{ size: 4, offset: 1, order: 12}} md={{ size: 8, order: 1}} xs={{ order: 1 }}>
              <ResponsiveImage src={props.slice.primary.image.url} alt={props.slice.primary.image.alt} className="mb-4 mb-sm-4 mb-md-0" />
            </Col>
          </Fragment>
        }
      </Row>
    </Container>
  </StyledSection>
)
export default ImageIconList
