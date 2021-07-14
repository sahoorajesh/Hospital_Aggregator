import React from 'react';
import Navigation from "./Navigation";
import hospitalicon from '../images/hospital.jpg';
// import axios from "axios";
import {Col, Container,Row} from "react-bootstrap";
import "./Hospitalregister.css";
// import {Link } from "react-router-dom";
import { Component } from 'react';

class Enquiry extends Component {
	constructor(props){
        super(props);

        this.state = {
			custname : "",
			custAddress : "",
			email : "",
			mobile : "",
			query : "",
		
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
		
    }

	handleFormSubmit = event => {
        event.preventDefault();
    
        // const endpoint = "http://localhost:8010/api/auth/signup";
		
		// const { custname, custAddress,
		// 		email, mobile,
		// 		query } = this.state;


        // const hospital_user = {
		// 	custname: custname,
		// 	custAddress: custAddress,
		// 	email: email,
		// 	mobile: mobile,
		// 	query: query,
		// };

		this.setState({
			custname : "",
			custAddress : "",
			email : "",
			mobile : "",
			query : "",
        });
    
        
    };

    handleChange (event) {
        this.setState(
            {
            [event.target.name] 
                : event.target.value 
            }
        );
    };

	

	render() {
		return(
			<div>
				<Navigation Tabchange="Sign in" url="/login"/>
				<Container className="mt-5 body-info">
					<Row>
					<br/>
						<div className="w-50 bg-light black center br4">
							
							<h2> Send us your Query</h2> 

							<Col lg={4} md={6} sm={12} className="mt-5 p-3">
								<img className="icon-img mv2 br-100 h4 w4 dib" src={hospitalicon} alt="icon"/>
								<form className="measure center">
									<fieldset id="sign_up " className="ba b--transparent ph0 mh0">

									
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Your Name:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="custname" required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Address:</label>
											<textarea className="pa2 input-reset ba bg-transparent w-75" rows = "5" cols = "60" name = "custAddress" value={this.state.hospAddress} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Email-id:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="email" name="email"  id="email-address"  value={this.state.email} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Contact-details:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="tel" pattern="[0-9]{4}[0-9]{2}[0-9]{4}" name="mobile" placeholder="XXXX-XX-XXXX"  value={this.state.mobile} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Your Query in short:</label>
											<textarea className="pa2 input-reset ba bg-transparent w-75" rows = "5" cols = "60" name = "query" value={this.state.aboutus} onChange={this.handleChange} required/>
										</div>										
										
									</fieldset>
									
									<div className="">
									<input className="b ph3 pv2 mv2 input-reset ba btn-primary bn grow pointer f4 dib" type="submit" onClick={this.handleFormSubmit} value="Submit" />
									</div>

								</form>
							</Col>
						</div>
						<br />
						
					</Row>
				</Container>

			</div>
			);
	}
}

export default Enquiry;
// Sanket_testing