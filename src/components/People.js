import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import { StructuredText, StyledSection } from '../styles';
import Person from './Person';

const People = props => (
  <StyledSection pbt className={`${props.slice.primary.color}`}>
    <Container fluid>
      <Row>
        {
          (props.slice.primary.position === 'top')
          ?
          <>
            <Col lg={`12`}>
              { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText >{RichText.render(props.slice.primary.body1)}</StructuredText>) }
            </Col>
            <Person items={props.slice.items}/>
          </>
          :
          <>
            <Col lg={{ size: 3 }}>
              { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText className={`mb-5 mb-sm-5 mb-md-0 text-center text-md-left`} >{RichText.render(props.slice.primary.body1)}</StructuredText>) }
            </Col>
            <Col lg={{ size: 9 }}>
              <Row className={`${props.slice.primary.alignment} justify-content-center`}>
                <Person items={props.slice.items}/>
              </Row>
            </Col>
          </>
        }
      </Row>
    </Container>
  </StyledSection>
)
export default People
