import React, { Fragment } from 'react';
import PrismicConfig from './prismic-configuration';
import { RichText } from 'prismic-reactjs';
import { Col } from 'reactstrap';
import { StructuredText } from './styles';

const ColumnContent = props => (
  <Fragment>
    {props.items.map(({ width, body1 }) =>
      <Col md={width} >
        <StructuredText largetext style={{ marginBottom: '3rem' }} >
          {RichText.render(body1, PrismicConfig.linkResolver)}
        </StructuredText>
      </Col>
    )}
  </Fragment>
)
export default ColumnContent
