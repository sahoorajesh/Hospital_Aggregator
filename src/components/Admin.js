import React from 'react';
import Navigation from "./Navigation.js";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import "./Admin.css"

class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hospital: [],
         
        };
      }
    
      componentDidMount() {
        axios.get("http://localhost:8010/api/test/getalluser")
          .then(res => {
            this.setState({ hospital: res.data });
            console.log(this.state.hospital);
          });
      }

      delete(username){
        console.log(username);
        axios.delete("http://localhost:8010/api/test/deletehospital/" + username)
          .then((result) => {
            this.props.history.push("/admin")
          });
      }

    render() {
        return(
            <div className="bg-white">
                <Navigation Tabchange="Logout" Tabchange1="Welcome, Admin"/>
                <h1>
                    <strong>
                        Admin Page
                    </strong>
                </h1>
                <br/>
                <strong className="f2">
                    List of new Hospitals Registered 
                </strong>
               <hr className="bg-black"/>
                <table className="tl">
                    
                    <tbody>
                        {   
                            this.state.hospital.map(hospital =>
                                    <tr key={hospital.id}>
                                        <td>
                                            <ul>
                                                <li>
                                                    <dl>
                                                        <dt className="mb2"><strong className="f4">Hospital Name: </strong>{hospital.hospname}</dt>
                                                        
                                                        <dt className="mb2"><strong className="f4">Speciality: </strong> {hospital.hospspec}</dt>
                                                        
                                                        <dt className="mb2"><strong className="f4">District:  </strong>{hospital.district}</dt>
                                                        
                                                        <dt className="mb2"><strong className="f4">Address:  </strong>{hospital.hospAddress}</dt>
                                                        
                                                        <dt className="mb2"><strong className="f4">Ownership:  </strong>{hospital.ownership}</dt>
                                                        
                                                        <dt className="mb2"><strong className="f4">Year: </strong>{hospital.year}</dt>
                                                        
                                                        <dt className="mb2"><strong className="f4">Email: </strong>{hospital.email}</dt>
                                                        
                                                        <dt className="mb2"><strong className="f4">Website:  </strong>{hospital.website}</dt>
                                                        
                                                        <dt className="mb2"><strong className="f4">Contact  </strong>{hospital.mobile}</dt>
                                                        
                                                        <dt className="mb2"><strong className="f4">About us:  </strong>{hospital.aboutus}</dt>
                                                    </dl>
                                                </li>
                                            </ul>
                                            <hr className="bg-black"/>
                </td>
                                      
                                        <button onClick={this.delete.bind(this, hospital.username)} class="btn btn-danger">Delete</button>
                                    </tr>
                                    
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default admin;