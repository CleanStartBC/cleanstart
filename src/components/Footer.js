import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TopFooter, BottomFooter } from '../styles'
import SliceZone from './SliceZone';

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null
    }
  }
  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

	fetchPage(props) {
    if (props.prismicCtx) {
			return props.prismicCtx.api.getSingle('footer', (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  renderLinks(){
    if (this.state.doc) {
      const document = this.state.doc.data;
      return <SliceZone sliceZone={document.body} />
    }
  }

  renderImg(){
    if (this.state.doc) {
      const document = this.state.doc.data
      return <img src={document.image.url} alt={document.image.alt} className={`img-fluid mb-5 mb-md-0 footerImg`} />
    }
  }

  renderCopyText() {
    if (this.state.doc) {
      const document = this.state.doc.data
      return <>{document.copyright}</>
    }
  }

  render(){
    return(
      <footer>
        <TopFooter>
          <Container fluid>
            <Row>
              <Col md="2">
                <a href="/" className={`d-block w-100 text-center`}>{this.renderImg()}</a>
              </Col>
              <Col md={{ size: 9, offset: 1 }}>
                <Row>{this.renderLinks()}</Row>
              </Col>
            </Row>
          </Container>
        </TopFooter>
        <BottomFooter>
          <Container fluid>
            <Row>
              <Col md="6" className={`text-center text-md-left my-auto`}>
                <p className={`small mb-0`}>
                  <FontAwesomeIcon icon={['far', 'map-marker-alt']} className={`mr-2`} />
                  210 – 3989 Henning Drive, Burnaby BC V5C 6P8
                </p>
              </Col>
              <Col md="6" className={`text-center text-md-right my-auto`}>
                <p className={`small mb-0`}>{this.renderCopyText()}</p>
              </Col>
            </Row>
          </Container>
        </BottomFooter>
      </footer>
    )
  }
}
