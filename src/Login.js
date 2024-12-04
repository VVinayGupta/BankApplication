import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link,useNavigate } from "react-router-dom"


const Login = () => {
  const [name,setName]=useState({uname:'',pswrd:''})
  const [data, setData] = useState([]);
  const[find,setFound]=useState({found:'false'})
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users") //connecting to JSON Server/External URL for get data.
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const validateLogin=(e)=>{
        if (name.uname!="" && name.pswrd!=""){
      if(find.found=data.some(a=>a.email===name.uname))
      {
        navigate("/home",{state:{email:name.uname}})
        e.preventDefault();
      }
      else
      {
        alert('username/password not correct')
        e.preventDefault();
      }}
    else {
      alert("Username/Password is mandatory")

    }     
    
  }
  return (
    <div>
      <form method="post">
        <div>

        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" value={name.uname} onChange={e=>setName({...name,uname:e.target.value})}  required/>
        <div><label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="pswrd" value={name.pswrd} onChange={e=>setName({...name,pswrd:e.target.value})} required/></div>
        <button type="submit" onClick={validateLogin}>
            
              Login
            
        </button>
        <br/>
        </div>
        <div>
          <button type="button" className='btn btn-danger' >
            <Link to="/Register">
              Sign Up
            </Link>
          </button>
        </div>


      </form>
    </div>
  )
}

export default Login
