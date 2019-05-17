import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Menu from './Menu';
import SocialMedia from './SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TopFooter, BottomFooter } from '../styles'

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
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }
  render(){
    if (this.state.doc) {
      const { doc } = this.state;
      const document = doc.data;

      const slices = document.body.map(function(slice, index){
        if (slice.slice_type === 'menu') {
          return(
            <Menu slice={slice} key={index} />
          )
        } else if (slice.slice_type === 'social_media') {
          return(
            <SocialMedia slice={slice} key={index} />
          )
        } else {
          return null;
        }
      });

      return(
        <footer>
          <TopFooter>
            <Container fluid>
              <Row>
                <Col md="2">
                  <a href="/" className="d-block w-100 text-center"><img src={document.image.url} alt={document.image.alt} className="img-fluid mb-5 mb-md-0 footerImg" /></a>
                </Col>
                <Col md={{ size: 9, offset: 1 }}>
                  <Row>{slices}</Row>
                </Col>
              </Row>
            </Container>
          </TopFooter>
          <BottomFooter>
            <Container fluid>
              <Row>
                <Col md="6" className="text-center text-md-left my-auto">
                  <p className="small mb-0">
                    <FontAwesomeIcon icon={['far', 'map-marker-alt']} className="mr-2" />
                    210 – 3989 Henning Drive, Burnaby BC V5C 6P8
                  </p>
                </Col>
                <Col md="6" className="text-center text-md-right my-auto">
                  <p className="small mb-0">{document.copyright}</p>
                </Col>
              </Row>
            </Container>
          </BottomFooter>
        </footer>
      )
    }
    return(
      <footer>
        <TopFooter />
        <BottomFooter />
      </footer>
    )
  }
}
