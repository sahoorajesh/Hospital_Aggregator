import React from 'react';
import Navigation from "./Navigation.js";
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Component } from 'react';
import "./Admin.css"
import Cardlist from "./Cardlist"
// import {Row} from "react-bootstrap";
class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hospital: [],
          
        };
        
        this.editReject = this.editReject.bind(this);
        this.editApprove = this.editApprove.bind(this);
      };
    
    componentDidMount() {
        axios.get("http://localhost:8010/api/test/getalluser")
        .then(res => {
            this.setState({ hospital: res.data });
            // console.log(this.state.hospital);
        });
    }

    refreshPage() {
        window.location.reload();
    }

    editReject(id,un){
        var data = {
           
            hospname : this.state.hospital[id].hospname,
            hospspec : this.state.hospital[id].hospspec,
            district : this.state.hospital[id].district,
            hospAddress : this.state.hospital[id].hospAddress,
            ownership : this.state.hospital[id].ownership,
            year : this.state.hospital[id].year,
            email : this.state.hospital[id].email,
            website : this.state.hospital[id].website,
            mobile : this.state.hospital[id].mobile,
            aboutus : this.state.hospital[id].aboutus,
            username : this.state.hospital[id].username,
            password : this.state.hospital[id].password,
            showButton : false,
            showDetails : this.state.hospital[id].showDetails,
            showapproveStatus : this.state.hospital[id].showapproveStatus,
            showrejectStatus : true,
            imagelink:this.state.hospital[id].imagelink
        };
        
        axios.put(("http://localhost:8010/api/test/edithospital/" + un),data)
          .then((result) => {
           
            //   console.log(result.data);
              this.refreshPage();
          });

          
      }

      editApprove(id,un){
        var data = {
           
            hospname : this.state.hospital[id].hospname,
            hospspec : this.state.hospital[id].hospspec,
            district : this.state.hospital[id].district,
            hospAddress : this.state.hospital[id].hospAddress,
            ownership : this.state.hospital[id].ownership,
            year : this.state.hospital[id].year,
            email : this.state.hospital[id].email,
            website : this.state.hospital[id].website,
            mobile : this.state.hospital[id].mobile,
            aboutus : this.state.hospital[id].aboutus,
            username : this.state.hospital[id].username,
            password : this.state.hospital[id].password,
            showButton : false,
            showDetails : true,
            showapproveStatus : true,
            showrejectStatus : this.state.hospital[id].showrejectStatus,
            imagelink:this.state.hospital[id].imagelink
            
        };
        
        axios.put(("http://localhost:8010/api/test/edithospital/" + un),data)
          .then((result) => {
           
            //   console.log(result.data);
              this.refreshPage();
          });

          
      }

    render() {
        // const { showrejectapprove, showstatus } = this.state;
        return(
            <div className="bg-white">
                <Navigation Tabchange="Logout" Tabchange1="Welcome, Admin"/>
                <h1>
                    <strong>
                        Admin Page
                    </strong>
                </h1>
                <hr className="w-20 admin bg-black"/>
                <br/>
                <strong className="f2">
                    List of new Hospitals Registered 
                </strong>
               <hr className=" bg-black"/>
               <Cardlist hospitals={this.state.hospital}/ >
                {/* <table className="tl">
                    
                    <tbody>
                        {   
                            this.state.hospital.map(hospital =>
                                    <tr key={hospital.id}>
                                        <td>
                                            <ul>
                                                <li>
                                                    <dl>
                                                        <dt className="mb2 margin">
                                                            <strong className="f3"> Hospital Name: </strong>{hospital.hospname} 
                                                            <strong className="f3 ml7">Speciality: </strong> {hospital.hospspec}
                                                            <strong className="f3 ml7">District:  </strong>{hospital.district}
                                                        </dt>
                                                        
                                                        <dt className="mb2 margin">
                                                            <strong className="f3">Address:  </strong>{hospital.hospAddress}
                                                            <strong className="f3 ml6">Ownership:  </strong>{hospital.ownership}
                                                            <strong className="f3 ml7">Year: </strong>{hospital.year}
                                                        </dt>
                                                        
                                                        <dt className="mb2 margin">
                                                            <strong className="f3">Email: </strong>{hospital.email}
                                                            <strong className="f3  ml7">Website:  </strong>{hospital.website}
                                                            <strong className="f3 ml6">Contact  </strong>{hospital.mobile}
                                                        </dt>
                                                       
                                                        <dt className="mb2 margin"><strong className="f3">About us:  </strong>{hospital.aboutus}</dt>
                                                    </dl>
                                              </li>
                                              </ul>
                                           
                                            <hr className="bg-black"/>
                                        </td>
                                        {
                                            hospital.showButton 
                                                && 
                                                    <div className="flex">
                                                        <button className="btn f3  grow mr3 " onClick={()=>this.editApprove(hospital.id,hospital.username)}>Approve</button>
                                                        <button className="btn f3 b bg-dark-red white bn  grow mr3" onClick={()=>this.editReject(hospital.id,hospital.username) }>Reject</button>
                                                        
                                                    </div>
                                        }

                                        {
                                        hospital.showapproveStatus
                                            &&
                                                <div>
                                                    <strong className="f3">Status Approved!!!</strong>
                                                </div>                                        
                                        }

                                        {
                                        hospital.showrejectStatus
                                            &&
                                            <div>
                                            <strong className="f3">Status Rejected!!!</strong>
                                        </div>                                        
                                        }
                                    </tr>
                                    
                            )
                        }
                    </tbody>
                </table> */}

            </div>
        );
    }
}

export default admin;