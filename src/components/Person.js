import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import { Col } from 'reactstrap';

const Person = props => (
  <Fragment>
  {props.items.map(({ image, name1, title1 }, index) =>
    <Col md="3" sm="4" xs="6" className="text-center" key={index}>
      <div className="px-3 pb-5">
        <img src={image.url} alt="CleanStart - Hoarding & Junk Removal" className="rounded-circle img-fluid mb-3" />
          {RichText.render(name1)}
          <p className="text-primary">{RichText.asText(title1)}</p>
      </div>
    </Col>
  )}
  </Fragment>
)
export default Person
