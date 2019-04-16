import React, { Component, Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col, Media } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PrismicConfig from './prismic-configuration';
import { Feature, FaCircle, StyledSection, StructuredText, ResponsiveImage } from './styles';

export default class ImageIconList extends Component {
  render () {
		const { slice } = this.props;
    const items = slice.items.map(function(item, index){
      const icon = item.font_awesome;
      if (slice.primary.circle === 'true') {
        return(
          <Col lg={item.width} key={index}>
            <Feature mbtwo className={item.alignment}>
              <Media left>
                <span className={`fa-layers fa-fw mt-3 mr-5`}>
                  <FaCircle icon="circle" size="3x" />
                  <FontAwesomeIcon icon={['fal', icon]} size="lg" inverse transform="right-8" fixedWidth color="white"/>
                </span>
              </Media>
              <Media body>
                <StructuredText >
                  {RichText.render(item.body1, PrismicConfig.linkResolver)}
                </StructuredText>
              </Media>
            </Feature>
          </Col>
        );
      } else {
        return(
          <Col lg={item.width} key={index} >
            <Feature mbtwo>
              <Media left>
                <FontAwesomeIcon icon={['fal', icon]} size="2x" fixedWidth className="fontIcon mr-3"/>
              </Media>
              <Media body>
                <StructuredText>
                  {RichText.render(item.body1, PrismicConfig.linkResolver)}
                </StructuredText>
              </Media>
            </Feature>
          </Col>
        );
      }
    });
    return(
			<StyledSection pbt className={slice.primary.color}>
        <Container fluid>
          <Row noGutters className={`justify-content-center ${slice.primary.alignment}`}>
            {
              slice.primary.position === 'left'
              ?
              <Fragment>
                <Col lg="5" >
                  <ResponsiveImage src={slice.primary.image.url} alt={slice.primary.image.alt} className="mb-4 mb-sm-0" />
                </Col>
                <Col lg={{ size: 6, offset: 1 }}>
                  { ((typeof slice.primary.grid_body !== 'undefined' && typeof slice.primary.grid_body[0] !== 'undefined') && slice.primary.grid_body[0].text ) && (<StructuredText lgp mbt>{RichText.render(slice.primary.grid_body)}</StructuredText>) }
                  <Row>
                    {items}
                  </Row>
                </Col>
              </Fragment>
              :
              <Fragment>
                <Col lg={{size: 7,order: 1}} md={{ size: 8, order: 12}} xs={{ order: 12 }}>
                  { ((typeof slice.primary.grid_body !== 'undefined' && typeof slice.primary.grid_body[0] !== 'undefined') && slice.primary.grid_body[0].text ) && (<Col lg="12"><StructuredText lgp mbt>{RichText.render(slice.primary.grid_body)}</StructuredText></Col>) }
                  <Row>
                    {items}
                  </Row>
                </Col>
                <Col lg={{ size: 4, offset: 1, order: 12}} md={{ size: 8, order: 1}} xs={{ order: 1 }}>
                  <ResponsiveImage src={slice.primary.image.url} alt={slice.primary.image.alt} className="mb-3 mb-sm-0" />
                </Col>
              </Fragment>
            }
          </Row>
        </Container>
			</StyledSection>
    )
  }
}
