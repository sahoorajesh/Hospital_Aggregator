import React from "react";
import "./Home.css"
import Search from "./Search";
import Navigation from "./Navigation";


const Home = () => {
    return (
        <div className="yu8 bg-white-30">
            <Navigation Tabchange="Hospital Register" url="/hospitalregister" Tabchange1="Sign in" url1="/login"/>
            <Search />


            <div className=" bd-callout bd-callout-info overflow-auto ">
                <table className="bb  shadow-3 f6 mw8 center width" cellSpacing="auto">
                    <thead className=" bg ">
                        <tr >
                            
                            <th scope="col"><big> HOSPITAL DETAILS</big>
                            </th>
                            <th scope="col"  ><big className="thmain">SPECIALITY</big></th>
                            <th scope="col" colSpan="2" className="tc "><big>ACTION</big></th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* Ist entry in the table */}
                        <tr className="m3 shadow shadow-hover drk " id="rd">
                            

                            <td className="rf"><big><img className="icon" src="https://image.flaticon.com/icons/png/512/33/33777.png" alt="hosp" width="100px" />XYZ Hospital <br/>
                            
                             <strong className="f4">About Hospital: </strong>
                                Ut nulla et amet sint tempor eiusmod labore consectetur qui ullamco Lorem fugiat mollit.                         
                        
                            </big></td>
                            <td className="kj4"><big>__Speciality</big></td>
                            <td>
                                <button
                                    className="close2 btn btn-outline-primary mr-2" id="btn1">
                                    <b> SEND ENQUIRY </b>
                                </button></td>
                            <td>
                                <button className=" btn btn-outline-primary mr-2" id="btn1">
                                    <b>MORE</b>
                                </button>


                            </td>
                        </tr>
                        

                        <tr className="thead-dark shadow shadow-hover   drk ">

                            <td className="rf"><big><img className="icon" src="https://image.flaticon.com/icons/png/512/33/33777.png" alt="hosp" width="100px" />XYZ Hospital <br/>
                            <strong className="f4">About Hospital: </strong>
                                Ut nulla et amet sint tempor eiusmod labore consectetur qui ullamco Lorem fugiat mollit.                         
                            </big></td>
                            <td className="kj4"><big>__Speciality</big></td>
                            <td>
                                <button
                                    className="close2 btn btn-outline-primary mr-2"
                                    id="btn1"

                                >
                                    <b>SEND ENQUIRY</b>
                                </button></td>
                            <td>
                                <button className="btn btn-outline-primary mr-2" id="btn1">
                                    <b>MORE</b>
                                </button>


                            </td>
                        </tr>
                        {/* 3rd entry */}
                        <tr className="thead-dark shadow shadow-hover  drk ">

                            <td className="rf"><big><img className="icon" src="https://image.flaticon.com/icons/png/512/33/33777.png" alt="hosp" width="100px" />XYZ Hospital <br/>
                            <strong className="f4">About Hospital: </strong>
                                Ut nulla et amet sint tempor eiusmod labore consectetur qui ullamco Lorem fugiat mollit.                         
                        
                            </big></td>
                            <td className="kj4"><big>__Speciality</big></td>
                            <td>
                                <button
                                    className="close2 btn btn-outline-primary mr-2" id="btn1"

                                >
                                    <b>SEND ENQUIRY</b>
                                </button></td>
                            <td>
                                <button className="btn btn-outline-primary mr-2" id="btn1">
                                    <b>MORE</b>
                                </button>


                            </td>
                        </tr>
                        {/* 4th */}
                        <tr className="thead-dark  shadow shadow-hover drk ">

                            <td className="rf"><big><img className="icon" src="https://image.flaticon.com/icons/png/512/33/33777.png" alt="hosp" width="100px" />XYZ Hospital<br/> 
                            <strong className="f4">About Hospital: </strong>
                                Ut nulla et amet sint tempor eiusmod labore consectetur qui ullamco Lorem fugiat mollit.                         
                        
                            </big></td>
                            <td className="kj4"><big>__Speciality</big></td>
                            <td className="tl">
                                <button
                                    className="close2 btn btn-outline-primary mr-2" id="btn1"

                                >
                                    <b>SEND ENQUIRY </b>
                                </button></td>
                            <td>
                                <button className="btn btn-outline-primary mr-2" id="btn1" >
                                    <b>MORE</b>
                                </button>


                            </td>
                        </tr>


                    </tbody>
                </table>


            </div>

        </div>


    );
}


export default Home;


