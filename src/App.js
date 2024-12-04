import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Transfer from './Transfer';

function App() {
  return (
    <div className="App">
       <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/Register' element={<Register/>}/>
           <Route path='/Home' element={<Home/>}/>
           <Route path='/Transfer' element={<Transfer/>}/>
       </Routes>
    </div>
  
  );
}

export default App;