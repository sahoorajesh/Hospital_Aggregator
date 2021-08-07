import "./Home.css"

import Navigation from "./Navigation";
import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import HospitalServices from './HospitalServices';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            hospital: [],
            searchfield:"",
            filteredHospitals:[]
        };
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        HospitalServices.getHospital().then((res) => {
            this.setState({ hospital: res.data });
        }
        );
    }
    refreshPage() {
        window.location.reload();
    }
    handleChange = (event) => {
        this.setState(
            { 
                searchfield: event.target.value 
            })

        if(event.target.value === "Accepted"){
            this.setState({
                filteredHospitals: this.state.hospital.filter(hospital =>{
                    return hospital.showapproveStatus===true;
                    })
            })
        }

        else if(event.target.value === "Rejected"){
            this.setState({
                filteredHospitals: this.state.hospital.filter(hospital =>{
                    return hospital.showrejectStatus===true;
                    })
            })
        }

        else if(event.target.value === "New"){
            this.setState({
                filteredHospitals: this.state.hospital.filter(hospital =>{
                    return hospital.showButton===true;
                    })
            })
        }

        else if(event.target.value === ""){
            this.setState({
                filteredHospitals: this.state.hospital
            })
        }
        
      }


    render() {
        return (
            <div className="yu8 bg-white-30">
                <Navigation Tabchange="Hospital Register" url="/hospitalregister" Tabchange1="Sign in" url1="/login" />


                {/* Search bar */}
                <div className='pa2'>
                    <input
                        className='pa3 ba bg-lightest-blue w-30'
                        type='search'
                        placeholder='Enter Speciality..'
                        onChange={this.handleChange}

                    />
                    <strong className="f4 mr3"> &nbsp; Show All</strong>
                </div>

                {/* Search bar */}




                {/* Main Home Page Code */}
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
                                            <td className="rf"><big><img className="icon avatar1" src={hospital.imagelink} alt="hosp" width="100px" />Name: {hospital.hospname}<br />
                                                <strong className="f4">About Hospital: </strong>About: {hospital.aboutus}</big><div className="hide" id={hospital.id} ><h5>District: {hospital.district}<h5>Address: {hospital.hospaddress}</h5></h5><h5>Mobile: {hospital.mobile}</h5><h5>Website: {hospital.website}</h5><h5>Ownership: {hospital.ownership}</h5><h5>Year: {hospital.year}</h5></div></td>


                                            <td className="kj4"><big>Speciality: {hospital.hospspec}</big></td>
                                            <td>
                                                <Link to={"/enquiry"}><button
                                                    className=" btn btn-outline-primary mr-2" id="btn2">
                                                    <b> SEND ENQUIRY </b>
                                                </button></Link></td>
                                            <td>
                                                <button onClick={() => {
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