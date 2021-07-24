// import React from "react";

import "./Home.css"

// import Navigation from "./Navigation";


// function Home(){
//     const[userData,setUserData]=React.useState([]);

//     const[name,setName]=React.useState('');
//     React.useEffect(()=>{
//         const data=[
//             {name:"Hos1",spec:"Cardio"},
//             {name:"Hos2",spec:"Skeletal"},
//             {name:"Hos3",spec:"Cardio"},
//             {name:"Hos4",spec:"Nervous"}
//         ];
//         setUserData(data);
//     },[])
//     const handleSearch = () => {
//         debugger
        
//         const newData = userData.filter(x => x.name === (name ==='' ? x.name : name));
//         setUserData(newData);

//     };
    
//     return (
//         <div className="yu8 bg-white-30">
//             <Navigation Tabchange="Hospital Register" url="/hospitalregister" Tabchange1="Sign in" url1="/login"/>
//             <div> <form>
                
//                 <input className="black pa2 mv2" type="text" placeholder="Search.." name="search"
//                 onChange={(e)=>setName(e.target.value)}/>

//                 <button className="black pa2 ma2" 
//                 onClick={()=> handleSearch()} ><i className="fa fa-search "></i></button>
//             </form></div>
//             {/* Search bar */}
            


//             <div className=" bd-callout bd-callout-info overflow-auto ">
//                 <table className="bb  shadow-3 f6 mw8 center width" cellSpacing="auto">
//                     <thead className=" bg ">
//                         <tr >
                            
//                             <th scope="col"><big> HOSPITAL DETAILS</big>
//                             </th>
//                             <th scope="col"  ><big className="thmain">SPECIALITY</big></th>
//                             <th scope="col" colSpan="2" className="tc "><big>ACTION</big></th>
//                         </tr>
//                     </thead>
//                     <tbody id="h1" >
//                         {
//                             userData && userData.length >0 ?
//                             userData.map(item =>
//                                 <tr className="m3 shadow shadow-hover drk " id="rd">
                            

//                             <td className="rf"><big><img className="icon" src="https://image.flaticon.com/icons/png/512/33/33777.png" alt="hosp" width="100px" />{item.name}<br/>
                            
//                              <strong className="f4">About Hospital: </strong>
//                                 Ut nulla et amet sint tempor eiusmod labore consectetur qui ullamco Lorem fugiat mollit.                         
                        
//                             </big></td>
//                             <td className="kj4"><big>{item.spec}</big></td>
//                             <td>
//                                 <button
//                                     className="close2 btn btn-outline-primary mr-2" id="btn1">
//                                     <b> SEND ENQUIRY </b>
//                                 </button></td>
//                             <td>
//                                 <button className=" btn btn-outline-primary mr-2" id="btn1">
//                                     <b>MORE</b>
//                                 </button>


//                             </td>
//                         </tr>
                        
//                                 )
//                                 : 'No data'
//                         }




                        
                        

                       
                        
                        
                        


//                     </tbody>
//                 </table>


//             </div>

//         </div>


//     );
// }


// export default Home;

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
            <div>
                <h2 className="text-center"> Hospital List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <th> Hospital Detail</th>
                                <th> Spaciality</th>
                                <th> Action</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.state.hospital.map(
                                    hospital =>
                                        <tr key={hospital.id}>
                                            <td> {hospital.aboutus} </td>
                                            <td> {hospital.hospspec} </td>
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

