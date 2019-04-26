import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col, Media } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StructuredText, StyledSection } from './styles';

const ListItem = props => (
  <Fragment>
    {props.items.map(({ size, alignment, item, font_awesome }) =>
      <Col lg={size} xs="6">
        <Media className={`${alignment}`} style={{ marginBottom: '1.5rem' }}>
          <Media left>
            <FontAwesomeIcon icon={['fal', font_awesome]} size="2x" fixedWidth className="mr-3 fontIcon"/>
          </Media>
          <Media body>
            <StructuredText>{RichText.render(item)}</StructuredText>
          </Media>
        </Media>
      </Col>
    )}
  </Fragment>
)

const BulletList = props => (
  <StyledSection pbt className={`${props.slice.primary.color}`}>
    <Container fluid>
      <Row className={`justify-content-center`}>
        {
          (props.slice.primary.position === 'top')
          ?
          <Fragment>
            <Col lg="12">
              { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText className="mb-5">{RichText.render(props.slice.primary.body1)}</StructuredText>) }
            </Col>
            <ListItem items={props.slice.items}/>
          </Fragment>
          :
          <Fragment>
            <Col lg={{ size: 3 }}>
              { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText className="mb-5 mb-sm-5 mb-md-0 text-center text-md-left">{RichText.render(props.slice.primary.body1)}</StructuredText>) }
            </Col>
            <Col lg={{ size:9 }}>
              <Row>
                <ListItem items={props.slice.items}/>
              </Row>
            </Col>
          </Fragment>
        }
      </Row>
    </Container>
  </StyledSection>
)
export default BulletList
