import React from 'react';
import { Container } from 'reactstrap';
import { StyledSection } from '../styles';

const NotFound = props => (
  <StyledSection className="bg-light">
    <Container fluid>
      <h1>Page Not Found</h1>
      <p className="lead mb-0">We're sorry but we can't find the page you are looking for.</p>
    </Container>
  </StyledSection>
)
export default NotFound
