import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col, Button, FormGroup, Input, Label, Media } from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator'
import { StyledParallaxBanner, SliderTitleContainer, StyledLabel, Feature, StructuredText } from '../styles';
import PlacesAutocomplete from 'react-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Recaptcha from 'react-recaptcha'

/*global google*/



const encode = (data) => {
   return Object.keys(data)
       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
       .join("&");
 }

const Checkbox = props => (
  <Input type={`checkbox`} value={props.value} id={props.id} onChange={props.onChange} />
)

const Features = props => (
  <>
    {props.items.map(({ callout_text, font_awesome },i) =>
      <Feature key={`callout_text` + i} className={`align-items-start`}>
        <Media left>
          <FontAwesomeIcon icon={['fas', 'check']} size="2x" fixedWidth  className={`fontIcon`}/>
        </Media>
        <Media body className="pl-3">
          <StructuredText extralarge >
            {RichText.render(callout_text)}
          </StructuredText>
        </Media>
      </Feature>
    )}
  </>
)

class BookingForm extends Component {
	constructor(props){
    super(props)
    this.validator = new SimpleReactValidator();
		this.state = {
      name: '',
      phone: '',
			email: '',
      preferredDays: [],
      preferredTime: '',
      service: '',
      address: '',
		}
    this.changeEvent = this.changeEvent.bind(this);
  }

  // componentWillMount() {
  //   const script = document.createElement("script");
  //   script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1bZH-qvcd5oiLv7F612YH-jHgzEMLCeA&libraries=places";
  //   script.async = true;
  //
  //   document.body.appendChild(script);
  // }

	handleSubmit = e => {
		e.preventDefault();
		if (this.validator.allValid()) {

			const redirect = this.props.slice.primary.redirect_link.uid

			fetch("/", {
	      method: "POST",
	      headers: { "Content-Type": "application/x-www-form-urlencoded" },
	      body: encode({ "form-name": "booking", ...this.state })
	    })
	      .catch(error => alert(error));
			e.preventDefault();
	    this.props.history.push('/' + redirect);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleAddress = address => {
    this.setState({ address });
  };

  changeEvent = e => {
    let checkedBoxes = this.state.preferredDays;
    let selectedDay = e.target.value

    if (e.target.checked === true) {
      checkedBoxes.push(selectedDay);
      this.setState({preferredDays: checkedBoxes});
    } else {
      let dayIndex = checkedBoxes.indexOf(selectedDay);
      checkedBoxes.splice(dayIndex, 1);
      this.setState({preferredDays: checkedBoxes});
    }
  }

	render () {

    const { slice } = this.props;

		const {
      name,
      phone,
			email,
			service,
      preferredDays,
      preferredTime,
      address
		} = this.state;
		const values = {
      name,
      phone,
			email,
			service,
      preferredDays,
      preferredTime,
      address
		}

    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Weekends'];

    let checkboxes = weekdays.map((day, index) => {
      return(
        <div key={`day-` + index} className={`d-inline-block w-50`}>
          <Label htmlFor={`day_` + index} className={`b-contain`}>
            <span>{day}</span>
            <Checkbox value={day} id={`day_` + index} onChange={this.changeEvent.bind(this)} />
            <div className={`b-input`}></div>
          </Label>
        </div>
      )
    })

    const serviceBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(48,-124),
      new google.maps.LatLng(50,-121),
    )

    const searchOptions = {
      bounds: serviceBounds,
      strictBounds: true,
      componentRestrictions: { country: 'ca' }
    }

    const callback = function () {
      console.log('Recaptcha Loaded!!');
    };

		return(
			<StyledParallaxBanner className={`bg-dark`}
				layers={[
		              {
		                  image: process.env.PUBLIC_URL + '/images/bg-dark-green.svg',
		                  amount: 0.2,
		              },
		            ]}
				>
				<Container fluid>
					<Row className={`align-items-center justify-content-center`}>
            <Col sm={{ size: 6 }}>
              <SliderTitleContainer className={`mb-5`}>
                {RichText.render(slice.primary.title)}
                <p className={`lead`}>{RichText.asText(slice.primary.subtitle)}</p>
              </SliderTitleContainer>
              <Features items={slice.items} />

            </Col>
						<Col sm={{ size: 5 }}>
					    <form className={`w-100 p-5 bg-white`} onSubmit={this.handleSubmit}>

                <Row>
                  <Col sm={`12`}>
                    <FormGroup className={`mb-4`}>
                      <StyledLabel htmlFor="name">Name</StyledLabel>
                      <input id="name" name="name" placeholder="Name" type="text" value={name} onChange={this.handleChange} className="form-control rounded-0 here"/>
                      {this.validator.message('name', values.name, 'required', {className: 'text-danger'})}
                    </FormGroup>
                  </Col>
                  <Col sm={`6`}>
                    <FormGroup className={`mb-4`}>
                      <StyledLabel htmlFor="phone">Phone</StyledLabel>
                      <input id="phone" name="phone" placeholder="Phone" type="text" value={phone} onChange={this.handleChange} className="form-control rounded-0 here"/>
                      {this.validator.message('phone', values.phone, 'required|phone', {className: 'text-danger'})}
                    </FormGroup>
                  </Col>
                  <Col sm={`6`}>
                    <FormGroup className={`mb-4`}>
                      <StyledLabel htmlFor="email">Email</StyledLabel>
                      <input id="email" name="email" placeholder="Email" type="text" value={email} onChange={this.handleChange} className="form-control rounded-0 here"/>
                      {this.validator.message('email', values.email, 'required|email', {className: 'text-danger'})}
                    </FormGroup>
                  </Col>
                  <Col sm={`12`}>
                    <FormGroup className={`mb-4`}>
                      <StyledLabel htmlFor="Address">Address</StyledLabel>
                      <PlacesAutocomplete
                        value={address}
                        onChange={this.handleAddress}
                        searchOptions={searchOptions}
                      >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                          <div>
                            <input
                              {...getInputProps({
                                placeholder: 'Address',
                                className: 'location-search-input form-control rounded-0',
                              })}
                            />
                            <div className="autocomplete-dropdown-container">
                              {loading && <div>Loading...</div>}
                              {suggestions.map(suggestion => {
                                const className = suggestion.active
                                  ? 'suggestion-item--active'
                                  : 'suggestion-item';

                                const style = suggestion.active
                                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                  <div
                                    {...getSuggestionItemProps(suggestion, {
                                      className,
                                      style,
                                    })}
                                  >
                                    <span>{suggestion.description}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete>
                      {this.validator.message('address', values.address, 'required', {className: 'text-danger'})}

                    </FormGroup>
                  </Col>
                  <Col sm={`6`}>
                    <FormGroup className={`mb-4`}>
                      <StyledLabel htmlFor="service">Service</StyledLabel>
                      <Input
                        type="select"
                        name="service"
                        id="service"
                        onChange={this.handleChange}
                        defaultValue={values.service}
                      >
                        <option>Service</option>
                        <option>Junk removal</option>
                        <option>Hoarding cleanup</option>
                        <option>Pest Control</option>
                        <option>Extreme Cleaning</option>
                        <option>Two or more services</option>
                      </Input>
                      {this.validator.message('service', values.service, 'required', {className: 'text-danger'})}
                    </FormGroup>
                  </Col>
                  <Col sm={`6`}>
                    <FormGroup>
                      <StyledLabel htmlFor="preferredTime">Preferred Time</StyledLabel>
                      <Input
                        type="select"
                        name="preferredTime"
                        id="preferredTime"
                        onChange={this.handleChange}
                        defaultValue={values.preferredTime}
                      >
                        <option>Preferred Time</option>
                        <option>8:00AM - 12:00PM</option>
                        <option>10:00AM - 2:00PM</option>
                        <option>12:00PM - 4:00PM</option>
                        <option>2:00PM - 6:00PM</option>
                        <option>No preferrence / flexible</option>
                      </Input>
                      {this.validator.message('preferredTime', values.preferredTime, 'required', {className: 'text-danger'})}
                    </FormGroup>
                  </Col>
                  <Col sm={`12`}>
                    <Label htmlFor={`preferredDays`} className={`d-block mb-3 text-dark`} style={{ fontWeight: '500' }}>Which days do you prefer we stop by?</Label>
                    <FormGroup>
                      {checkboxes}
                    </FormGroup>
                    {''}

                  </Col>
                </Row>
                <Recaptcha
									sitekey="6LfdQKUUAAAAAF8OoxCLkWi6IpG3KphVIVs4o-4o"
                  render="explicit"
                  onloadCallback={callback}
								/>
					      <Button color="primary" name="submit" type="submit" className="btn-lg btn-block mt-0">Book Free Estimate</Button>


					    </form>
						</Col>
					</Row>
				</Container>
			</StyledParallaxBanner>
	  )
	}
}

export default withRouter(BookingForm)
