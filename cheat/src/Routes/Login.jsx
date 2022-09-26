import { useReducer } from "react";
import reducer from "../Context/reducer";
import { incrementAction } from "../Context/reducerlogic";
import { Button,FormControl,FormLabel,Input,Heading} from '@chakra-ui/react'
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Login=()=>{

    const [formState, setFormState] = useState({});   
    

        
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        isAuth: "false",
        todos: []
      });

      
      
      const handleChange = (e) => {
          const { name, value, type } = e.target;
          const val = type === "number" ? Number(value) : value;
          setFormState({
              ...formState,
              [name]: val
            });
        };
        if((state.isAuth==="true") && (formState.email==="eve.holt@reqres.in") && (formState.password==="cityslicka")){
          return (
          <Navigate to="/Dashboard"/>
          )
        }
        
      
    return(
    <div style={{width:"300px", margin:"auto"}}>
        <Heading>Login</Heading>
        {/* <Heading>{state.isAuth}</Heading>
        <Heading>{formState.email}</Heading>
        <Heading>{formState.password}</Heading> */}
        <box w='50%'>
        <FormControl isRequired>
        <FormLabel>Login</FormLabel>
        <Input placeholder='Login' type="text" name="email" value={formState.email} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder='Password' type="Password" name="password" value={formState.password} onChange={handleChange} />
        </FormControl>
        
        <Button onClick={() => dispatch(incrementAction)}>Login</Button>
        </box>
        <Heading>
        
        </Heading>
        
   </div>

    )
}
export default Login;