import React, { Component, Fragment } from 'react'
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import QuestionAnswer from './QuestionAnswer';
import { StyledSection, StructuredText } from '../styles';

export default class Faq extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {};
  }

  toggle(item) {
    this.setState({ collapse: this.state.collapse === item ? null : item });
  }
  render(){
    const { slice } = this.props;
    const items = slice.items

    return(
      <StyledSection className="bg-white">
        <Container fluid>
            <Row className={`justify-content-center`}>
              {
                (slice.primary.position === 'top')
                ?
                <Fragment>
                  <Col lg="12">
                    { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText>{RichText.render(slice.primary.body1)}</StructuredText>) }
                    {Object.keys(items).map((key, index) =>
                      <QuestionAnswer key={index}
                        cat={items[key]}
                        isOpen={this.state.collapse === items[key]}
                        toggle={this.toggle} />
                    )}
                  </Col>
                </Fragment>
                :
                <Fragment>
                  <Col lg={{ size: 3 }}>
                    { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText>{RichText.render(slice.primary.body1)}</StructuredText>) }
                  </Col>
                  <Col lg={{ size: 9 }}>
                    {Object.keys(items).map((key, index) =>
                      <QuestionAnswer key={index}
                        cat={items[key]}
                        isOpen={this.state.collapse === items[key]}
                        toggle={this.toggle} />
                    )}
                  </Col>
                </Fragment>
              }
            </Row>
        </Container>
      </StyledSection>
    );
  }
}
