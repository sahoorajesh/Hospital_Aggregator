import React from "react";
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import "./Userregister.css"
function Userregister() {
    return (
        <div className="body-info ">
        	<Navigation Tabchange="Hospital Register" url="/hospitalregister"/>
            <div class="signup-form black">
                <form> 
                <h2>Sign Up</h2>
                
                <div class="form-group">
                    <div class="input-group">
                        
                        <i class="fa fa-user mr2"></i>
                        <input type="text" class="form-control" name="name" placeholder="name" required="required" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <i class="fa fa-user mr2"></i>
                        <input type="text" class="form-control" name="username" placeholder="Username" required="required" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        
                        <i class="fa fa-paper-plane mr2"></i>
                        <input type="email" class="form-control" name="email" placeholder="Email Address" required="required" />
                    </div>
                </div>
                <div class="form-group ">
                    <div class="input-group">
                       
                        <i class="fa fa-lock mr3"></i>
                        <input type="text" class="form-control" name="password" placeholder="Password" required="required" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        
                        <i class="fa fa-lock"></i>
                        <i class="fa fa-check mr2"></i>
                        <input type="text" class="form-control" name="cpassword" placeholder="Confirm Password" required="required" />
                    </div>
                </div>
                <div class="form-group ">
                    <button type="submit" class="btn btn-outline-primary">Sign Up</button>
                </div>

                <div class="text-center black">Already have an account? <NavLink to="/login">Login here</NavLink></div>
            </form>
            </div>

        </div>
    )
}

export default Userregister;
