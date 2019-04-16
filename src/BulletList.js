import React, { Component, Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col, Media } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StructuredText, StyledSection } from './styles';

export default class BulletList extends Component {
  render () {
		const { slice } = this.props;
    const listItems = slice.items.map(function(item, index){
      const icon = item.font_awesome
      return(
        <Col key={index} lg={item.size} xs="6">
          <Media className={`${item.alignment}`} style={{ marginBottom: '1.5rem' }}>
            <Media left>
              <FontAwesomeIcon icon={['fal', icon]} size="2x" fixedWidth className="mr-3 fontIcon"/>
            </Media>
            <Media body>
              <StructuredText>{RichText.render(item.item)}</StructuredText>
            </Media>
          </Media>
				</Col>
      )
    })
    return(
			<StyledSection pbt className={`${slice.primary.color}`}>
				<Container fluid>
          <Row className={`justify-content-center`}>
            {
              (slice.primary.position === 'top')
              ?
              <Fragment>
                <Col lg="12">
                  { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText className="mb-5">{RichText.render(slice.primary.body1)}</StructuredText>) }
                </Col>
                {listItems}
              </Fragment>
              :
              <Fragment>
                <Col lg={{ size: 3 }}>
                  { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText className="mb-5 mb-sm-5 mb-md-0 text-center text-md-left">{RichText.render(slice.primary.body1)}</StructuredText>) }
                </Col>
                <Col lg={{ size:9 }}>
                  <Row>
                    {listItems}
                  </Row>
                </Col>
              </Fragment>
            }
          </Row>
				</Container>
			</StyledSection>
    )
  }
}
