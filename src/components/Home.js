import React from "react";
import "./Home.css"
import Search from "./Search";
import Navigation from "./Navigation";


const Home = () => {
    return (
        <div class="yu8 bg-white-30">
            <Navigation Tabchange="Hospital Register" url="/hospitalregister" />
            <Search />


            <div class=" bd-callout bd-callout-info overflow-auto ">
                <table class="bb  shadow-3 
                  f6 w-100 mw8 center" cellspacing="0">
                    <thead class=" bg ">
                        <tr >
                            <th scope="col"><big> HOSPITAL NAMES</big>
                            </th>
                            <th scope="col"  ><big class="thmain">SPECIALITY</big></th>
                            <th scope="col" colspan="2" class="tc "><big>ACTION</big></th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* Ist entry in the table */}
                        <tr class="m3  drk outline " id="rd">
                            {/* <td></td> */}

                            <td class="rf"><big><img class="icon" src="https://image.flaticon.com/icons/png/512/33/33777.png" alt="hosp" width="100px" />XYZ Hospital </big></td>
                            <td class="kj4"><big>__Speciality</big></td>
                            <td>
                                <button
                                    class="close2 btn btn-outline-primary mr-2" id="btn1"

                                >
                                    <b> SEND ENQUIRY </b>
                                </button></td>
                            <td>
                                <button class=" btn btn-outline-primary mr-2" id="btn1">
                                    <b>MORE</b>
                                </button>


                            </td>
                        </tr>


                        <tr class="thead-dark  drk ">

                            <td class="rf"><big><img class="icon" src="https://image.flaticon.com/icons/png/512/33/33777.png" alt="hosp" width="100px" />XYZ Hospital </big></td>
                            <td class="kj4"><big>__Speciality</big></td>
                            <td>
                                <button
                                    class="close2 btn btn-outline-primary mr-2"
                                    id="btn1"

                                >
                                    <b>SEND ENQUIRY</b>
                                </button></td>
                            <td>
                                <button class="btn btn-outline-primary mr-2" id="btn1">
                                    <b>MORE</b>
                                </button>


                            </td>
                        </tr>
                        {/* 3rd entry */}
                        <tr class="thead-dark outline drk ">

                            <td class="rf"><big><img class="icon" src="https://image.flaticon.com/icons/png/512/33/33777.png" alt="hosp" width="100px" />XYZ Hospital </big></td>
                            <td class="kj4"><big>__Speciality</big></td>
                            <td>
                                <button
                                    class="close2 btn btn-outline-primary mr-2" id="btn1"

                                >
                                    <b>SEND ENQUIRY</b>
                                </button></td>
                            <td>
                                <button class="btn btn-outline-primary mr-2" id="btn1">
                                    <b>MORE</b>
                                </button>


                            </td>
                        </tr>
                        {/* 4th */}
                        <tr class="thead-dark  drk ">

                            <td class="rf"><big><img class="icon" src="https://image.flaticon.com/icons/png/512/33/33777.png" alt="hosp" width="100px" />XYZ Hospital </big></td>
                            <td class="kj4"><big>__Speciality</big></td>
                            <td class="tl">
                                <button
                                    class="close2 btn btn-outline-primary mr-2" id="btn1"

                                >
                                    <b>SEND ENQUIRY </b>
                                </button></td>
                            <td>
                                <button class="btn btn-outline-primary mr-2" id="btn1" >
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


