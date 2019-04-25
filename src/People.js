import React, { Fragment } from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import { StructuredText } from './styles';
import Person from './Person';

const Section = styled.section`
  padding: 6rem 0 3rem;
`

const People = props => (
  <Section className={`${props.slice.primary.color}`}>
    <Container fluid>
      <Row>
        {
          (props.slice.primary.position === 'top')
          ?
          <Fragment>
            <Col lg="12">
              { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText >{RichText.render(props.slice.primary.body1)}</StructuredText>) }
            </Col>
            <Person items={props.slice.items}/>
          </Fragment>
          :
          <Fragment>
            <Col lg={{ size: 3 }}>
              { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText className="mb-5 mb-sm-5 mb-md-0 text-center text-md-left" >{RichText.render(props.slice.primary.body1)}</StructuredText>) }
            </Col>
            <Col lg={{ size: 9 }}>
              <Row className={`${props.slice.primary.alignment} justify-content-center`}>
                <Person items={props.slice.items}/>
              </Row>
            </Col>
          </Fragment>
        }
      </Row>
    </Container>
  </Section>
)
export default People
