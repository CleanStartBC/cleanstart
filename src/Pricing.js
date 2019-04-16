import React, { Component } from 'react';
import {  RichText } from 'prismic-reactjs';
import { Container, Card, CardHeader, Button, CardDeck, CardBody } from 'reactstrap';
import { StyledParallaxBanner, StructuredText } from './styles';

export default class Pricing extends Component {
  render(){
    const { slice } = this.props;
    const items = slice.items.map(function(item, index) {
      const hClass = (item.highlight === "true") ? "pricing-highlight" : " "
      return(
        <Card className={`px-0 text-center rounded-0 bg-white border-0 mb-5 mb-sm-0 ${hClass} pricing-card`} key={index}>
          <span className="h5 w-100 mx-auto px-4 pt-3 pb-2 text-white bg-primary mb-0">{RichText.asText(item.label)}</span>
          <CardHeader className="pt-4 border-0 bg-transparent mb-0">
            <h1 className="font-weight-normal text-center text-white"><span className="price">${item.price}</span><span className="h6 text-muted ml-2">/ {item.unit}</span></h1>
          </CardHeader>
          <CardBody className="pt-0 pricing-description">
            {RichText.render(item.description)}
            {
              (item.highlight === 'false')
              ?
              <Button color="primary" outline size="md"  className="mb-3">Book Now</Button>
              :
              <Button color="primary" size="md" className="mb-3">Book Now</Button>
            }
          </CardBody>
        </Card>
      )
    });
    return(
      <StyledParallaxBanner image={slice.primary.image.url} className={`${slice.primary.color}`}
        layers={[
                  {
                      image: slice.primary.image.url,
                      amount: 0.2,
                  },
                ]}
        >
        <Container fluid>
          { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText className="mb-5" >{RichText.render(slice.primary.body1)}</StructuredText>) }

          <CardDeck>
            {items}
          </CardDeck>
        </Container>
      </StyledParallaxBanner>
    )
  }
}
