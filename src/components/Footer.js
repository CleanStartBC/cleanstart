import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TopFooter, BottomFooter } from '../styles'
import SliceZone from './SliceZone';
import logo from '../images/cleanstartbc-logo-white.png';


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

  renderBottom() {
    if (this.state.doc) {
      const document = this.state.doc.data
      return(
        <BottomFooter>
          <Container fluid>
            <Row>
              <Col md="6" className={`text-center text-md-left my-auto`}>
                <p className={`small mb-0`}>
                  <FontAwesomeIcon icon={['far', 'map-marker-alt']} className={`mr-2`} />
                  {document.address}
                </p>
              </Col>
              <Col md="6" className={`text-center text-md-right my-auto`}>
                <p className={`small mb-0`}>
                  {document.copyright}
                </p>
              </Col>
            </Row>
          </Container>
        </BottomFooter>
      )
    }
  }

  render(){
    return(
      <footer>
        <TopFooter>
          <Container fluid>
            <Row>
              <Col md="2">
                <a href="/" className={`d-block w-100 text-center`}>
                  <img src={logo} alt="CleanStart BC - Property Services" className={`img-fluid mb-5 mb-md-0 footerImg`} />
                </a>
              </Col>
              <Col md={{ size: 9, offset: 1 }}>
                <Row>{this.renderLinks()}</Row>
              </Col>
            </Row>
          </Container>
        </TopFooter>
        {this.renderBottom()}
      </footer>
    )
  }
}
