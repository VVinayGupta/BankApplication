import React, { useState, useEffect } from 'react'
import {  Link,useNavigate,useLocation, Navigate } from 'react-router-dom';
import axios from 'axios'
import HomeNavBar from './HomeNavBar';


const Home = () => {
    const location = useLocation();
    const [Requestor, setRequestor] = useState([]);
    const [Req,setReq]= useState({id:''});
    const [Res,setRes]=useState({amount:''});
    const navigate=useNavigate();
    const Attr = ["First Name", "Last Name", "Age", "Gender", "Email", "Amount"];
    useEffect(() => {
        //console.log(location)
        axios
            .get('http://localhost:3000/users') 
            .then((res) => {
                console.log(res.data)
                setRequestor(res.data.filter((a) =>(a.email === location.state.email)
                ))
               // console.log(Requestor)
               // console.log(Requestor)
                Requestor.map((p)=>{
                    Req.id=p.id
                    Res.amount=p.amount
                
                })
                //console.log(Req)
                console.log(Res)
                
            })
            .catch((err) => console.log(err));
    }, []);
    const handleTransfer=(e)=>{
       
       navigate("/Transfer",{state:{email:location.state.email,id:Req.id,amount:Res.amount}})
        e.preventDefault();

    }
    
    return ( 
        
        <section>
            <div>
                <HomeNavBar></HomeNavBar>
            </div>
            <div>
                <h1>HDFC BANK</h1>
                <h2>Account Details:</h2>
                <div>
                    <button type="button" onClick={handleTransfer} >
                        Transfer
                    </button>
                </div>

            </div>
            <table>
                <tbody>
                    <td>
                        {Attr.map((att) => (
                            <tr key={att}>{att}:</tr>
                        ))}

                    </td>
                    {Requestor.map((infos) => (
                        
                        
                        <td>
                            {/* <tr><h1>data:</h1></tr> */}
                            <tr>{infos.firstName}</tr>
                            <tr>{infos.lastName}</tr>
                            <tr>{infos.age}</tr>
                            <tr>{infos.gender}</tr>
                            <tr>{infos.email}</tr>
                            <tr>{infos.amount}</tr>
                            
                            
                        </td>
                        


                    ))}


                </tbody>
            </table>


        </section>
    )
}

export default Home
