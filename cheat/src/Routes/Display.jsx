import { getCities } from "./api";
import { useState ,useEffect} from "react";

function Display(){


   const [data, setData] = useState([]);

   let obj = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  };    
    //const[val,setvalue]=useState(false)
    const fetchnUpdate = async () => {
        let res = await fetch(`https://reqres.in/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(obj)
        });
    
        let data = await res.json();
        console.log(data.token);
        setData(data.token);
      };

    fetchnUpdate()
  
    return(
        <div>
            
          <div></div>
         
    

        </div>
    )
}
export default Display