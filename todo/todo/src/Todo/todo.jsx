import { useState, useEffect } from "react";
import Addtodos from "./Addtodo";
import { getTodos } from "./api";
import { addnewtodos } from "./api";
import { deletetodos } from "./api";

function Todos() {
  const [todos, setTodos] = useState([]);
  const[page,setpage]=useState(1)

  const fetchdatafun=(page)=>{
    getTodos({page,limit:2, sort:"title",order: "desc"})
    .then((res) => setTodos(res.data))
    .catch((err)=>console.log(err))
    .finally(()=>console.log("Completed"))
  };

  useEffect((page) => {
    fetchdatafun(page);
    }, [page]);

  const handledec=()=>{
    setpage(page-1)
  }
  const handleinc=()=>{
    setpage(page+1)
  }
  
  const addtodosform=(todos)=>{
    addnewtodos(todos).then(()=>{
        fetchdatafun(page)
    })
  }

  const handleDelete=(id)=>{
    deletetodos(id).then(()=>{
        fetchdatafun(page)
    })
  }
  return (
    <div>
      <h1>Todos</h1>
      <Addtodos data={addtodosform}/>
      {todos?.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
           <button onClick={() => handleDelete(item.id)}>DELETE</button> 
        </div>
      ))}
      <button disabled={page===1} onClick={handledec}>Deccrement</button>
      <button>{page}</button>
      <button onClick={handleinc}>Increment</button>
      
    </div>
  );
}

export default Todos;
