
import { useState } from "react";



function Addtodos({data}){
    const[formval,addform]=useState({
        "title":""
    });
    const handlechange=(e)=>{
        const{name,value,type}=e.target;
        const val = type === "number" ? Number(value) : value;
        addform({
            ...formval,
            [name]:val
        });
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        data(formval)
    }

    return(
        <div>
            <form onSubmit={onsubmit}>
            <h1>Add Todos</h1>
            <input type="text" 
            name="title" 
            placeholder="Enter Todo" 
            value={formval.title} 
            onChange={handlechange}/>
            <input type="submit" value="Submit"/>
            </form>

        </div>
    )
}
export default Addtodos