import React, { Fragment } from 'react';
import { Link, RichText } from 'prismic-reactjs';
import { Container, Card, CardHeader,CardDeck, CardBody } from 'reactstrap';
import { StyledParallaxBanner, StructuredText } from '../styles';
import { Link as RouterLink } from 'react-router-dom';
import PrismicConfig from '../prismic-configuration';
import LinkSerializer from '../LinkSerializer';

const PriceCards = props => (
  <Fragment>
    {props.items.map(({ highlight, label, price, unit, description }, index) =>
      <Card className={`px-0 text-center rounded-0 bg-white border-0 mb-5 mb-sm-0 ${highlight} pricing-card`} key={index}>
        <span className="h5 w-100 mx-auto px-4 pt-3 pb-2 text-white bg-primary mb-0">{RichText.asText(label)}</span>
        <CardHeader className="pt-4 border-0 bg-transparent mb-0">
          <h1 className="font-weight-normal text-center text-white"><span className="price">${price}</span><span className="h6 text-muted ml-2">/ {unit}</span></h1>
        </CardHeader>
        <CardBody className="pt-0 pricing-description">
          {RichText.render(description)}
          {
            (highlight === 'false')
            ?
            <RouterLink to={`${Link.url(props.redirectLink, PrismicConfig.linkResolver)}`} className={`btn btn-outline-primary mb-3`}>Book Now</RouterLink>
            :
            <RouterLink to={`${Link.url(props.redirectLink, PrismicConfig.linkResolver)}`}  className={`btn btn-primary mb-3`}>Book Now</RouterLink>
          }
        </CardBody>
      </Card>
    )}
  </Fragment>
)


const Pricing = props => (
  <StyledParallaxBanner image={props.slice.primary.image.url} className={`${props.slice.primary.color}`}
    layers={[
              {
                  image: props.slice.primary.image.url,
                  amount: 0.2,
              },
            ]}
    >
    <Container fluid>
      { ((typeof props.slice.primary.body1 !== 'undefined' && typeof props.slice.primary.body1[0] !== 'undefined') && props.slice.primary.body1[0].text ) && (<StructuredText className="mb-5" >{RichText.render(props.slice.primary.body1, PrismicConfig.linkResolver, LinkSerializer)}</StructuredText>) }
      <CardDeck>
        <PriceCards items={props.slice.items} redirectLink={props.slice.primary.redirect_link} />
      </CardDeck>
    </Container>
  </StyledParallaxBanner>
)
export default Pricing
