import "./Home.css"

import Navigation from "./Navigation";
import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import HospitalServices from './HospitalServices';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            hospital: []
        }
    }

    componentDidMount() {
        HospitalServices.getHospital().then((res) => {
            this.setState({ hospital: res.data });
        }
        );
    }

    render() {
        return (
            <div className="yu8 bg-white-30">
                 <Navigation Tabchange="Hospital Register" url="/hospitalregister" Tabchange1="Sign in" url1="/login"/>


             
            {/* Search bar */}





                <h2 className="text-center"> Hospital List</h2>
                <div className="bd-callout bd-callout-info overflow-auto ">
                    <table className="bb  shadow-3 f6 mw8 center width" cellSpacing="auto">
                    <thead className=" bg ">
                        <tr >
                           
                             <th scope="col"><big> HOSPITAL DETAILS</big>
                             </th>
                             <th scope="col"  ><big className="thmain">SPECIALITY</big></th>
                             <th scope="col" colSpan="2" className="tc "><big>ACTION</big></th>
                         </tr>
                     </thead>
                       
                        {/* <tbody>
                            <tr>
                                <th> Hospital Detail</th>
                                <th> Spaciality</th>
                                <th> Action</th>
                            </tr>
                        </tbody> */}

                       
                        <tbody id="h1">
                            {
                                this.state.hospital.map(
                                    hospital =>
                                        <tr className="m3 shadow shadow-hover drk " id="rd"
                                           key={hospital.id}>
                                               <td className="rf"><big><img className="icon avatar1" src={hospital.imagelink} alt="hosp" width="100px" />{hospital.hospname}<br/>
                                               <strong className="f4">About Hospital: </strong>{hospital.aboutus}</big><div className="hide" id={hospital.id} ><h5>{hospital.district}<h5>{hospital.hospaddress}</h5></h5><h5>{hospital.mobile}</h5><h5>{hospital.website}</h5><h5>{hospital.ownership}</h5><h5>{hospital.year}</h5></div></td>
                                               

                                               <td className="kj4"><big>{hospital.hospspec}</big></td>
                                               <td>
                                               <Link to={"/enquiry"}><button
                                    className=" btn btn-outline-primary mr-2" id="btn2">
                                     <b> SEND ENQUIRY </b>
                                 </button></Link></td>
                             <td>
                                 <button onClick={ () =>{
                                     var x = document.getElementById(hospital.id);
                                     x.className = "show";
                                   

                                 }} className=" btn btn-outline-primary mr-2" id="btn1">
                                    <b>MORE</b>
                                </button>


                             </td>

{/*
                                            <td> {hospital.aboutus} </td>
                                            <td> {hospital.hospspec} </td> */}
                                            {/* <td> {hospital.action} </td> */}
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default Home;