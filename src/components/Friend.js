import { faGear, faUserCheck, faUserGroup, faUserPen, faUserPlus, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Friend() {
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
            <div className='center-side '>
                <div className='fc-content'>
                    <FontAwesomeIcon icon={faUsersLine} className='fc-icon'/>
                <p className='text-center fw-bold text-muted'>When you have friend requests or suggestions, you'll see them here.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Friend