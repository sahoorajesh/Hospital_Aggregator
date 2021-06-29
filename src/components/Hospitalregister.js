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
							        <input class="pa2 input-reset ba bg-transparent w-75" type="text" name="hospital-name"/>
							      </div>

							      <div class="mt3">
							        <label class="db fw6 lh-copy f4" for="speciality">Hospital-Speciality:</label>
							        <input class="pa2 input-reset ba bg-transparent w-75" type="text" name="hospital-speciality"/>
							      </div>
							      
							      <div class="mt3">
							        <label class="db fw6 lh-copy f4" for="district">District:</label>
							        <input class="pa2 input-reset ba bg-transparent w-75" type="text" name="district"/>
							      </div>
							      
							      <div class="mt3">
							        <label class="db fw6 lh-copy f4" for="state">State:</label>
							        <input class="pa2 input-reset ba bg-transparent w-75" type="text" name="state" />
							      </div>

							      <div class="mt3">
							        <label class="db fw6 lh-copy f4" for="owner">Ownership</label>
							        <select className="pa2 input-reset ba bg-transparent w-75 "name="ownership" id="ownership">
									  <option value="select">Select a choice </option>
									  <option value="private">Private</option>
									  <option value="public">Public</option>
									</select>
							      </div>
							      
							      <div class="mt3">
							        <label class="db fw6 lh-copy f4" for="year">Year of Starting:</label>
							        <input class="pa2 input-reset ba bg-transparent w-70" type="month" name="start" />
							      </div>

							      <div class="mt3">
							        <label class="db fw6 lh-copy f4" for="email-address">Email-id:</label>
							        <input class="pa2 input-reset ba bg-transparent w-75" type="email" name="email-address"  id="email-address"/>
							      </div>

							      <div class="mt3">
							        <label class="db fw6 lh-copy f4" for="website">Website(if any):</label>
							        <input class="pa2 input-reset ba bg-transparent w-75" type="url" name="website"/>
							      </div>

							      <div class="mt3">
							        <label class="db fw6 lh-copy f4" for="contact">Contact-details:</label>
							        <input class="pa2 input-reset ba bg-transparent w-75" type="tel" pattern="[0-9]{4}-[0-9]{2}-[0-9]{4}" name="contact"/>
							      </div>

							      <div class="mt3">
							        <label class="db fw6 lh-copy f4" for="username">Username:</label>
							        <input class="pa2 input-reset ba bg-transparent w-75" type="text" name="username" id="username"/>
							      </div>
							      
							      <div class="mv3">
							        <label class="db fw6 lh-copy lh-copy f4" for="password">Password</label>
							        <input class="b pa2 input-reset ba bg-transparent w-75" type="password" name="password"  id="password" />
							      </div>
							      
							     
							    </fieldset>
							    
							    <div class="">
							      <input class="b ph3 pv2 input-reset ba btn-primary bn grow pointer f4 dib" type="submit" value="Sign up as Hospital" />
							    </div>
							    
							    <div class="lh-copy mt3">
							      <Link class="f4 grow link dim black db" to={"/hospitallogin"}>Sign in as Hospital</Link>
							      <a href="#0" class="f4 grow link dim black db">Forgot your password?</a>
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