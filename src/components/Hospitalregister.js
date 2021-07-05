import React from 'react';
import Navigation from "./Navigation";
import hospitalicon from '../images/hospital.jpg';

import {Col, Container,Row} from "react-bootstrap";
import "./Hospitalregister.css";
import {Link } from "react-router-dom";

const Hospitalregister = () => {

	return(
		<div>
			<Navigation Tabchange="Sign in as User" url="/login"/>
			<Container className="mt-5 body-info">
                <Row>
                <br/>
                    <div className="w-50 bg-light black center br4">
                        
                        <h2> Register as Hospital with us!</h2> 

                        <Col lg={4} md={6} sm={12} className="mt-5 p-3">
                            <img className="icon-img mv2 br-100 h4 w4 dib" src={hospitalicon} alt="icon"/>
                            <form className="measure center">
							    <fieldset id="sign_up " className="ba b--transparent ph0 mh0">

							      
									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="name">Hospital-Name:</label>
										<input class="pa2 input-reset ba bg-transparent w-75" type="text" name="hospital-name" required="true"/>
									</div>

									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="speciality">Hospital-Speciality:</label>
										<input class="pa2 input-reset ba bg-transparent w-75" type="text" name="hospital-speciality" required="true"/>
									</div>
									
									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="district">District:</label>
										<input class="pa2 input-reset ba bg-transparent w-75" type="text" name="district" required="true"/>
									</div>
									
									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="state">State:</label>
										<input class="pa2 input-reset ba bg-transparent w-75" type="text" name="state" required="true" />
									</div>

									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="owner">Ownership</label>
										<input class="pa2 input-reset ba bg-transparent w-75" type="text" name="ownership" placeholder="Public/Private" required="true" />
										
									</div>
									
									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="year">Year of Starting:</label>
										<input class="pa2 input-reset ba bg-transparent w-75" type="number" name="start" min="1800" max="2021" required="true"/>
									</div>

									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="email-address">Email-id:</label>
										<input class="pa2 input-reset ba bg-transparent w-75" type="email" name="email-address"  id="email-address" required="true"/>
									</div>

									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="website">Website(if any):</label>
										<input class="pa2 input-reset ba bg-transparent w-75" type="url" name="website" required="true"/>
									</div>

									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="contact">Contact-details:</label>
										<input class="pa2 input-reset ba bg-transparent w-75" type="tel" pattern="[0-9]{4}-[0-9]{2}-[0-9]{4}" name="contact" required="true"/>
									</div>

									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="state">About hospital in short:</label>
										<textarea class="pa2 input-reset ba bg-transparent w-75" rows = "5" cols = "60" name = "description" required="true"/>
							     	</div>
									
									
									<div class="mt3">
										<label class="db fw6 lh-copy f4" for="username">Username:</label>
										<input class="pa2 input-reset ba bg-transparent w-75" type="text" name="username" id="username" required="true"/>
									</div>
									
									<div class="mv3">
										<label class="db fw6 lh-copy lh-copy f4" for="password">Password</label>
										<input class="b pa2 input-reset ba bg-transparent w-75" type="password" name="password"  id="password"  required="true"/>
									</div>
									
									
							    </fieldset>
							    
							    <div class="">
							      <input class="b ph3 pv2 input-reset ba btn-primary bn grow pointer f4 dib" type="submit" value="Sign up as Hospital" />
							    </div>
							    
							    <div class="lh-copy mt3">
							      <Link class="f4 grow link dim black db" to={"/hospitallogin"}>Sign in as Hospital</Link>
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

export default Hospitalregister;