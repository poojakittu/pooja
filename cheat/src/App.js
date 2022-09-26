//import { Container } from '@chakra-ui/react'
import './App.css';
import Allroutes from './Routes/Allroutes';
//import Home from './Routes/Allroutes';
import Navbar from './Routes/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Allroutes/>
    </div>
  );
}

export default App;
