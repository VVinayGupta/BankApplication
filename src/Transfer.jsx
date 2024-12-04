import React, { useState, useEffect } from 'react'
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import HomeNavBar from './HomeNavBar';

const Transfer = () => {
  const loc = useLocation();
  console.log(loc)
  const [UsersForTransfer, setUsersForTransfer] = useState([]);
  const [userAmount, AddUserAmount] = useState(0);
  const [User, setUser] = useState({ id: null });
  const [amount1, setAmount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {

    axios
      .get('http://localhost:3000/users')
      .then((res) => {
        //console.log(res.data)

        setUsersForTransfer(res.data.filter((a) => a.id !== loc.state.id))
        console.log(UsersForTransfer)

      })
      .catch((err) => console.log(err));
  }, []);
  const performTransfer = (e) => {


    User.id = document.getElementById('mydropdown').value


    e.preventDefault();
    axios
      .get(`http://localhost:3000/users/${User.id}`)
      .then((res) => {
        //console.log(res.data.amount)
        //console.log(amount1)
        AddUserAmount(res.data.amount + amount1)
        //console.log(userAmount)
      })
      .catch((err) => console.log(err));

    axios
      .patch(`http://localhost:3000/users/${User.id}`, { amount: userAmount })
      .then((res) => {
        //console.log(res);

      })
      .catch((err) => console.log(err));

    axios
      .patch(`http://localhost:3000/users/${loc.state.id}`, { amount: loc.state.amount - amount1 })
      .then((res) => {
       // console.log(res);

      })
      .catch((err) => console.log(err));
    navigate("/home", { state: { email: loc.state.email } })

  }

  return (

    <div>
      <HomeNavBar></HomeNavBar>

      <form method="post">
        <h5>Available Balance:{loc.state.amount}</h5>
        <br />
        <br />
        <label>Select the account number you would like to transfer to:</label>
        <select id="mydropdown">
          {UsersForTransfer.map((KA) => {
            return (

              <option key={KA.id} value={KA.id}>{KA.firstName}</option>
            );
          })}
        </select>


        <br />
        <br />
        <label for="amount1"><b>Amout to be transfered:</b></label>
        <input class="form-control" type="number" name="amount1" className="w-64 h-7 rounded-xl px-2" placeholder="Enter amount" value={amount1} onChange={e => setAmount(e.target.value)} required />
        <button type="button" onClick={performTransfer}>Submit</button>
      </form>
    </div>
  )
}

export default Transfer
