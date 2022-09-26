import React from "react";
import {Routes,Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Display from "./Display";

const AllRoutes=()=>{

    return(
    <Routes>
    
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Display" element={<Display/>}></Route>
       
        </Routes>
    )
}
export default AllRoutes;
