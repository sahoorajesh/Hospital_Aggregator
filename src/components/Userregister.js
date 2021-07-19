import React from "react";
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import "./Userregister.css"
function Userregister() {
    return (
        <div className="body-info">
        	<Navigation Tabchange="Hospital Register" url="/hospitalregister" Tabchange1="Sign in" url1="/login"/>
            <div className="signup-form black">
                <form> 
                <h2>Sign Up</h2>
                
                
                <div className="form-group">
                    <div className="input-group">
                        <i className="fa fa-user mr2"></i>
                        <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        
                        <i className="fa fa-paper-plane mr2"></i>
                        <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                    </div>
                </div>
                <div className="form-group ">
                    <div className="input-group">
                       
                        <i className="fa fa-lock mr3"></i>
                        <input type="text" className="form-control" name="password" placeholder="Password" required="required" />
                    </div>
                </div>
                
                <div className="form-group ">
                    <button type="submit" className="btn btn-outline-primary">Sign Up</button>
                </div>

                <div className="text-center black">Already have an account? <NavLink to="/login">Login here</NavLink></div>
            </form>
            </div>

        </div>
    )
}

export default Userregister;
