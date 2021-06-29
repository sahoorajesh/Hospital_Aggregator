import React,{Component} from "react";
import Login from  "./components/Login";
import Userregister from "./components/Userregister";
import Hospitalregister from "./components/Hospitalregister";
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Home from "./components/Home";

import Loginhospital from "./components/Loginhospital";

class App extends Component{
  render(){
    return (
    <BrowserRouter>
      <div className="tc bg-black-10">
        
        
        <div>
          
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route path = "/login" component = {Login}/>
                <Route path= "/hospitallogin" component ={Loginhospital}/>
                <Route path="/hospitalregister" component ={Hospitalregister}/>
                <Route path="/userregister" component = {Userregister}/>
            </Switch>
       
        </div>
      </div>
    </BrowserRouter>
   
  );  
  }
  
}

export default App;