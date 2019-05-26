import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'
import { StyledSection, StructuredText } from '../styles';

const Logo = props => (
  <Fragment>
    {props.items.map(({ image }) =>
      <Col md="3" sm="4" xs="6" key={image.url}>
        <img src={image.url} alt={image.alt} className="img-fluid" />
      </Col>
    )}
  </Fragment>
)

const Logos = props => (
  <StyledSection className={`bg-white`} pbt>
    <Container fluid>
      { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText>{RichText.render(props.slice.primary.body1)}</StructuredText>) }
      <Row className={`justify-content-center`}>
        <Col md="10" className="mx-auto">
          <Row>
            <Logo items={props.slice.items} />
          </Row>
        </Col>
      </Row>
    </Container>
  </StyledSection>
)
export default Logos
