import React from 'react'
import { Link } from 'react-router-dom'
const HomeNavBar = () => {
  return (
    <nav>
        <ul>
             <li>
                <Link to="/">Logout</Link>
            </li>
         </ul>
    </nav>
  )
}

export default HomeNavBar
