import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Col } from 'reactstrap';
import placeholder from '../images/placeholder.png';

const Person = props => (
  <>
  {props.items.map(({ image, name1, title1 }, index) =>
    <Col md={`3`} sm={`4`} xs={`6`} className={`text-center`} key={index}>
      <div className={`px-3 pb-5`}>
        {image.url
          ?
          <img src={image.url} alt={`CleanStart - ${RichText.asText(title1)}`} className={`rounded-circle img-fluid mb-3`} />
          :
          <img src={placeholder} alt={`CleanStart - ${RichText.asText(title1)}`} width={`100`} height={`100`} className={`rounded-circle img-fluid mb-3`} />
        }
          {RichText.render(name1)}
          <p className={`text-primary`}>{RichText.asText(title1)}</p>
      </div>
    </Col>
  )}
  </>
)
export default Person
