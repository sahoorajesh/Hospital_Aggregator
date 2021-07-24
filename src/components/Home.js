import React from "react";

import "./Home.css"

import Navigation from "./Navigation";


function Home(){
    const[userData,setUserData]=React.useState([]);

    
    React.useEffect(()=>{
        const data=[
            {name:"Hos1",spec:"Cardio"},
            {name:"Hos2",spec:"Skeletal"},
            {name:"Hos3",spec:"Cardio"},
            {name:"Hos4",spec:"Nervous"}
        ];
        setUserData(data);
    },[])
    
   
    
    return (
        <div className="yu8 bg-white-30">
            <Navigation Tabchange="Hospital Register" url="/hospitalregister" Tabchange1="Sign in" url1="/login"/>
            <div> 
        
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<form class="example" >
  <input type="text" placeholder="Search.." name="search"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
            </div>
            {/* Search bar */}
            


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
                    <tbody id="h1" >
                        {
                            userData && userData.length >0 ?
                            userData.map(item =>
                                <tr className="m3 shadow shadow-hover drk " id="rd">
                            

                            <td className="rf"><big><img className="icon" src="https://image.flaticon.com/icons/png/512/33/33777.png" alt="hosp" width="100px" />{item.name}<br/>
                            
                             <strong className="f4">About Hospital: </strong>
                                Ut nulla et amet sint tempor eiusmod labore consectetur qui ullamco Lorem fugiat mollit.                         
                        
                            </big></td>
                            <td className="kj4"><big>{item.spec}</big></td>
                            <td>
                                <button
                                    className=" btn btn-outline-primary mr-2" id="btn2">
                                    <b> SEND ENQUIRY </b>
                                </button></td>
                            <td>
                                <button className=" btn btn-outline-primary mr-2" id="btn1">
                                    <b>MORE</b>
                                </button>


                            </td>
                        </tr>
                        
                                )
                                : 'No data'
                        }




                        
                        

                       
                        
                        
                        


                    </tbody>
                </table>


            </div>

        </div>


    );
}


export default Home;

