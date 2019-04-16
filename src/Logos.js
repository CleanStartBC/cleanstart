import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { Container, Row, Col } from 'reactstrap'
import { StyledSection, StructuredText } from './styles';

export default class Logos extends Component {
  render () {
		const { slice } = this.props;
    const items = slice.items.map(function(item, itemIndex){
      return(
        <Col md="3" sm="4" xs="6" key={itemIndex}>
          <img src={item.image.url} alt="" className="img-fluid" />
        </Col>
      );
    });
    return(
      <StyledSection pb="3rem" className="bg-white">
        <Container fluid>
          { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText>{RichText.render(slice.primary.body1)}</StructuredText>) }
          <Row className="justify-content-center">
						<Col md="10" className="mx-auto">
							<Row>
								{items}
							</Row>
						</Col>
          </Row>
        </Container>
      </StyledSection>
    )
  }
}
