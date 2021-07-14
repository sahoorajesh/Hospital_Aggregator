import React from 'react';
import Navigation from "./Navigation";
import hospitalicon from '../images/hospital.jpg';
import axios from "axios";
import {Col, Container,Row} from "react-bootstrap";
import "./Hospitalregister.css";
import {Link } from "react-router-dom";
import { Component } from 'react';

class Hospitalregister extends Component {
	constructor(props){
        super(props);

        this.state = {
			hospname : "",
			hospspec : "",
			district : "",
			hospAddress : "",
			ownership:"",
			year : "",
			email : "",
			website : "",
			mobile : "",
			aboutus : "",
            username : "",
            password : "",
			roles : ["hospital"],
			showButton: true,
			showDetails: false,
			showapproveStatus: false,
			showrejectStatus:false
			
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

	handleFormSubmit = event => {
        event.preventDefault();
    
        const endpoint = "http://localhost:8010/api/auth/signup";
		
		const { hospname, hospspec, district,
				hospAddress, ownership, year,
				email, website, mobile,
				aboutus, username, password, roles,
				showButton,showDetails,
				showapproveStatus,showrejectStatus} = this.state;


        const hospital_user = {
			hospname: hospname,
			hospspec: hospspec,
			district: district,
			hospAddress: hospAddress,
			ownership: ownership,
			year: year,
			email: email,
			website: website,
			mobile: mobile,
			aboutus: aboutus,
			username: username,
			password: password,
			roles: roles,
			showButton:showButton,
			showDetails:showDetails,
			showapproveStatus:showapproveStatus,
			showrejectStatus:showrejectStatus,
			
        };

		this.setState({
			hospname : "",
			hospspec : "",
			district : "",
			hospAddress : "",
			ownership:"",
			year : "",
			email : "",
			website : "",
			mobile : "",
			aboutus : "",
            username : "",
            password : "",
		});
    
        axios.post(endpoint, hospital_user).then(res => {
            localStorage.setItem("authorization", res.data.token);
			if(res.status === 200){
				alert("Hospital Registered Successfully")
			}
			
               
        })
		.catch((error) => {
            alert(error)
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
							
							<h2> Register as Hospital with us!</h2> 

							<Col lg={4} md={6} sm={12} className="mt-5 p-3">
								<img className="icon-img mv2 br-100 h4 w4 dib" src={hospitalicon} alt="icon"/>
								<form className="measure center">
									<fieldset id="sign_up " className="ba b--transparent ph0 mh0">

									
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Hospital-Name:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="hospname" value={this.state.hospname} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Hospital-Speciality:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="hospspec"  value={this.state.hospspec} onChange={this.handleChange} required/>
										</div>
										
										<div className="mt3">
											<label className="db fw6 lh-copy f4">District:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="district"  value={this.state.district} onChange={this.handleChange} required/>
										</div>
										
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Address:</label>
											<textarea className="pa2 input-reset ba bg-transparent w-75" rows = "5" cols = "60" name = "hospAddress" value={this.state.hospAddress} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Ownership</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="ownership" placeholder="Public/Private"  value={this.state.ownership} onChange={this.handleChange} required />
											
										</div>
										
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Year of Starting:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="year"  value={this.state.year} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Email-id:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="email" name="email"  id="email-address"  value={this.state.email} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Website(if any):</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="url" name="website"  value={this.state.website} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">Contact-details:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="tel" pattern="[0-9]{4}[0-9]{2}[0-9]{4}" name="mobile" placeholder="XXXX-XX-XXXX"  value={this.state.mobile} onChange={this.handleChange} required/>
										</div>

										<div className="mt3">
											<label className="db fw6 lh-copy f4">About hospital in short:</label>
											<textarea className="pa2 input-reset ba bg-transparent w-75" rows = "5" cols = "60" name = "aboutus" value={this.state.aboutus} onChange={this.handleChange} required/>
										</div>
										
										
										<div className="mt3">
											<label className="db fw6 lh-copy f4">Username:</label>
											<input className="pa2 input-reset ba bg-transparent w-75" type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} required/>
										</div>
										
										<div className="mv3">
											<label className="db fw6 lh-copy lh-copy f4">Password</label>
											<input className="b pa2 input-reset ba bg-transparent w-75" type="password" name="password"  id="password"  value={this.state.password} onChange={this.handleChange} required/>
										</div>
										
										
									</fieldset>
									
									<div className="">
									<input className="b ph3 pv2 input-reset ba btn-primary bn grow pointer f4 dib" type="submit" onClick={this.handleFormSubmit} value="Sign up as Hospital" />
									</div>
									
									<div className="lh-copy mt3">
									{/* <Link className="f4 grow link dim black db" to={"/login"}>Sign in as Hospital</Link> */}
									<h4 className="ma0 grow ">Forgot Password? <Link className="dim link" to={"/forgotpassword"}>Click Here</Link></h4>
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

export default Hospitalregister;
// Sanket_testing