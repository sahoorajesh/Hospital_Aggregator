import React from "react";
import "./Home.css"
import Search from "./Search";
import Navigation from "./Navigation";


const Home = () => {
    return (
        <div class="yu8 bg-white-30">
            <Navigation Tabchange="Hospital Register" url="/hospitalregister"/>
            <Search />
           

            <div class=" bd-callout bd-callout-info overflow-auto ">
                <table class="bb shadow-3  f6 w-100 mw8 center" cellspacing="0">
                    <thead class=" bg-blue ">
                        <tr >
                            <th scope="col"><big> HOSPITAL NAMEs</big>
                            </th>
                            <th scope="col" class="tl"><big>SPECIALITY</big></th>
                            <th scope="col" colspan="2" class="tc"><big>ACTION</big></th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* Ist entry in the table */}
                        <tr class="m3 drk  hover-bg-white">

                            <td ><big>XYZ Hospital </big></td>
                            <td class="kj4"><big>__Speciality</big></td>
                            <td>
                                <button
                                    class="close2 btn btn-outline-primary mr-2"

                                >
                                    SEND ENQUIRY
                                </button></td>
                            <td>
                                <button class=" btn btn-outline-primary mr-2" >
                                    MORE
                                </button>


                            </td>
                        </tr>

 
                        <tr class="thead-dark drk hover-bg-white">

                            <td><big>XYZ Hospital </big></td>
                            <td class="kj4"><big>__Speciality</big></td>
                            <td>
                                <button
                                    class="close2 btn btn-outline-primary mr-2"

                                >
                                    SEND ENQUIRY
                                </button></td>
                            <td>
                                <button class="btn btn-outline-primary mr-2" >
                                    MORE
                                </button>


                            </td>
                        </tr>
                        {/* 3rd entry */}
                        <tr class="thead-dark drk hover-bg-white">

                            <td><big>XYZ Hospital </big></td>
                            <td class="kj4"><big>__Speciality</big></td>
                            <td>
                                <button
                                    class="close2 btn btn-outline-primary mr-2"

                                >
                                    SEND ENQUIRY
                                </button></td>
                            <td>
                                <button class="btn btn-outline-primary mr-2" >
                                    MORE
                                </button>


                            </td>
                        </tr>
                        {/* 4th */}
                        <tr class="thead-dark drk hover-bg-white">

                            <td><big>XYZ Hospital </big></td>
                            <td class="kj4"><big>__Speciality</big></td>
                            <td class="tl">
                                <button
                                    class="close2 btn btn-outline-primary mr-2"

                                >
                                    SEND ENQUIRY
                                </button></td>
                            <td>
                                <button class="btn btn-outline-primary mr-2" >
                                    MORE
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


