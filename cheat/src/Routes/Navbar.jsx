import React from "react";
import {Link} from "react-router-dom";

const links=[
    {path:"/", title:"Home"},  
    {path:"/Dashboard", title:"Dasboard"},
    {path:"/Login", title:"Login"},
    {path:"/Display", title:"Display"}

]
const Navbar=()=>{
    return(
    
        <div style={{
            display:"Flex",
            columnGap:"30px",
            paddingLeft:"30px",
            width:"80%"
        }}>
     
            {links.map((el)=><Link key={el.path} to={el.path}>{el.title}
            </Link>)}
            
        </div>
    )
};
export default Navbar;
