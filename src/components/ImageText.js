import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from '../prismic-configuration';
import { Container, Row, Col } from 'reactstrap';
import { StyledSection, StructuredText, ResponsiveImage } from '../styles';
import LinkSerializer from '../LinkSerializer';

const ImageRow = props => (
  <Fragment>
  {props.items.map(({ position, alignment, image, width, body1 }, index) =>
    <Row className={`justify-content-center ${alignment}`} key={index}>
      {position === 'left'
        ?
        <Fragment>
          <Col>
            <ResponsiveImage src={image.url} alt="" className="mb-4 mb-sm-4 mb-md-0" />
          </Col>
          <Col lg={width} className="pl-lg-5">
            <StructuredText largetext>
              {RichText.render(body1, PrismicConfig.linkResolver, LinkSerializer)}
            </StructuredText>
          </Col>
        </Fragment>
        :
        <Fragment>
          <Col lg={width}>
            <StructuredText largetext>
              {RichText.render(body1, PrismicConfig.linkResolver, LinkSerializer)}
            </StructuredText>
          </Col>
          <Col className="pl-lg-5">
            <ResponsiveImage src={image.url} alt="" className="mb-4 mb-sm-4 mb-md-0" />
          </Col>
        </Fragment>
      }
    </Row>
  )}
  </Fragment>
)

const ImageText = props => {
  return(
    <StyledSection className={`${props.slice.primary.color}`}
      >
      <Container fluid>
        <Row className={`justify-content-center`}>
        {
          (props.slice.primary.position === 'top')
          ?
          <Fragment>
            <Col lg="12">
              { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText >{RichText.render(props.slice.primary.body1)}</StructuredText>) }
              <ImageRow items={props.slice.items} />
            </Col>
          </Fragment>
          :
          <Fragment>
            { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<Col lg={{ size: 3 }}><StructuredText className="mb-5 mb-sm-5 mb-md-0 text-center text-md-left" >{RichText.render(props.slice.primary.body1)}</StructuredText></Col>) }
            <Col lg={{ size: 9 }}>
              <ImageRow items={props.slice.items} />
            </Col>
          </Fragment>
        }
        </Row>
      </Container>
    </StyledSection>
  )
}

export default ImageText
