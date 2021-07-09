import React from "react";
import "./Navigation.css";

import {Link } from "react-router-dom";
const Navigation = (props) =>{
	
	
	return(
		<div>

			<nav className="zone ma0 bg pointer br4 ">
				<ul className="main-nav white ma0 list flex f4">
				  <li className= "pa3 grow">
				  	Website name
				  </li>
				 
				  <li className= "pa3 grow">
				  	About us
				  </li>
				  
				  <li className= "pa3 grow">
				  	<Link className="link white" to={"/"}>View Hospitals</Link>
				  </li>

				  <li className= "pa3 grow">
				  	<Link className="link white" to={"/login"}>Sign in</Link>
				  </li>

				  <li className="ml-auto pa3 grow">
				  	<Link className="link white" to={props.url}>{props.Tabchange}</Link>
				  </li>
				</ul>
	  		</nav>
	  		
  		</div>
		);
}

export default Navigation;