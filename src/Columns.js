import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import { StructuredText, StyledSection } from './styles';
import PrismicConfig from './prismic-configuration';

const ColumnsContent = props => (
  <Fragment>
    {props.items.map(({ width, body1 }, index) =>
      <Col md={width} key={index}>
        <StructuredText largetext style={{ marginBottom: '3rem' }} >
          {RichText.render(body1, PrismicConfig.linkResolver)}
        </StructuredText>
      </Col>
    )}
  </Fragment>
)

const Columns = props => (
  <StyledSection pbt className={`${props.slice.primary.color}`}>
    <Container fluid>
      <Row>
        {(props.slice.primary.position === 'top')
          ?
          <Fragment>
            <Col lg="12">
              { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText>{RichText.render(props.slice.primary.body1)}</StructuredText>) }
            </Col>
            <ColumnsContent items={props.slice.items} />
          </Fragment>
          :
          <Fragment>
            <Col lg={{ size: 3 }}>
              { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText className="mb-5 mb-sm-5 mb-md-0 text-center text-md-left">{RichText.render(props.slice.primary.body1)}</StructuredText>) }
            </Col>
            <Col lg={{ size: 9 }}>
              <Row className={`${props.slice.primary.alignment} justify-content-center`}>
                <ColumnsContent items={props.slice.items} />
              </Row>
            </Col>
          </Fragment>
        }
      </Row>
    </Container>
  </StyledSection>
)
export default Columns;
