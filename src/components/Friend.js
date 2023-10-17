import { faGear, faUser, faUserCheck, faUserGroup, faUserPen, faUserPlus, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'

function Friend() {
    const[del,setdel]=useState([])
    useEffect(()=>{
  axios.get("http://localhost:3002/users")
  .then(res=>setdel(res.data))
  },[])
  return (
    <div>
        <Navbar/>
        <div className="d-flex">
            <div className='fl-lside ms-4 '>
                <div className='fl-head d-flex justify-content-between'>
                    <h3 className='fw-bolder'>Friends</h3>
                    <FontAwesomeIcon icon={faGear} className='ms-3 p-2 fl-icon  rounded-circle'/>
                </div>
                <div className="fl-body">
                <Link to="/Friend" className='l-icon text-dark d-flex mt-2'>
                    <FontAwesomeIcon icon={faUserGroup} className='me-4 flh-icon rounded-circle bg-primary '/><span>Home</span>
                </Link >
                <Link to="/Friend" className='l-icon text-dark d-flex mt-2'>
                    <FontAwesomeIcon icon={faUserPen} className='me-4 fl-icon rounded-circle'/><span>Friend Request</span>
                </Link >
                <Link to="/Friend" className='l-icon text-dark d-flex mt-2'>
                    <FontAwesomeIcon icon={faUserPlus} className='me-4 fl-icon rounded-circle'/><span>Suggestion</span>
                </Link >
                <Link to="/Friend" className='l-icon text-dark d-flex mt-2'>
                    <FontAwesomeIcon icon={faUserCheck} className='me-4 fl-icon rounded-circle'/><span>All Friends</span>
                </Link >
                </div>
            </div>
            <div className='center-side mt-5'>
            
  <div className="row ">
  {del.map((p)=>(
    <div className='col-sm-12 col-md-4 col-lg-4 col-12 coldata' key={p.id}>
                <div className='data border rounded p-1 bg-dark text-light mcard '>
                    <div className='d-flex'>
                <FontAwesomeIcon icon={faUser} className=' ps-3 pt-4 mt-3 l-icon '/>
                <p className='mt-4 px-5 mx-1 text-capitalize fs-3 text-light'>{p.fname}</p></div>
                <img src={`https://source.unsplash.com/640x426/?${p.image}`} alt='image not found' className="card-text img-fluid  border-0 rounded" />
                <div ><p className='btn btn-light m-3 d-flex mx-auto fri-btn'>Add friend</p>
                <p className='btn btn-light m-2 d-flex mx-auto fri-btn '>Remove</p></div>
                  </div>
                  </div>
                  ))}
        </div>
            
            </div>

        </div>
    </div>
  )
}

export default Friend