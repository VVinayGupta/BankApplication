import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeNavBar from './HomeNavBar';

const Register = () => { 

const [Users, setUsers] = useState({
    firstName: '',
    lastName:'',
    age : '',
    gender:'',
    email:'',
    amount:''
    })
const handleSubmit = () => {
    axios
        .post("http://localhost:3000/users", Users)
        .then((res) => {
        console.log(res)
        navigate("/");
        })
        .catch((err) => console.log(err));

    }

const navigate = useNavigate();
  return (
    
    <div align="center">
    <div className="container">
      <HomeNavBar></HomeNavBar>
      <form className="form-group" >
        <div>
        <label for="name">First Name:</label>
          <input class="form-control" onChange={e => setUsers({...Users, firstName : e.target.value})} type="text" required  placeholder="Enter first name" name="firstName" className="w-64 h-7 rounded-xl px-2"/>
        </div>
        <div>
        <label for="name">Last Name:</label>
          <input class="form-control" onChange={e => setUsers({...Users, lastName : e.target.value})} type="text" required  placeholder="Enter last name" name="lastName" className="w-64 h-7 rounded-xl px-2"/>
        </div>
        <div>
        <label for="email">Enter Email:</label>
          <input class="form-control" onChange={e => setUsers({...Users, email : e.target.value})} type="email" required  placeholder="Enter Email" name="email" className="w-64 h-7 rounded-xl px-2"/>
        </div>
        <div>
        <label for="age">Age:</label>
          <input class="form-control" onChange={e => setUsers({...Users, age : e.target.value})} type="number" required  placeholder="Enter Age" name="age" className="w-64 h-7 rounded-xl px-2"/>
        </div>
        <div>
        <label for="amount">Amount:</label>
          <input class="form-control" onChange={e => setUsers({...Users, amount : e.target.value})} type="number" required  placeholder="Enter Amount" name="amount" className="w-64 h-7 rounded-xl px-2"/>
        </div>
        <div>
            <label for="Gender">Gender:</label>
            <input type="radio"  onChange={e => setUsers({...Users, gender : e.target.value})} id="Male" name="gender" value="Male"/>
            <label for="Male">Male</label><br/>
             <input type="radio" onChange={e => setUsers({...Users, gender : e.target.value})} id="Female" name="gender" value="Female"/>
             <label for="Female">Female</label><br/>
        </div>

      </form>
      <div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Sign Up
        </button> 
        <button className="btn btn-primary">
          <Link to="/" style={{color:"white"}}>Cancel</Link>
        </button>
      </div>
    </div>
  </div>

  )
}

export default Register
