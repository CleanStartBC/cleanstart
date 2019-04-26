import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import { StructuredText, QuestionAnswerContainer } from './styles';
import { RichText } from 'prismic-reactjs';

export default class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.toggle(this.props.cat);
  }

  render() {
    const cat = this.props.cat;

    return (
      <QuestionAnswerContainer>
        <Button className="btn-link p-0" color="link" onClick={this.toggle}>
          <h5 className="mb-0">{RichText.asText(cat.question)}</h5>
        </Button>
        <Collapse isOpen={this.props.isOpen}>
          <StructuredText className="pt-3">
            {RichText.render(cat.answer)}
          </StructuredText>
        </Collapse>
      </QuestionAnswerContainer>
    );
  }
}
