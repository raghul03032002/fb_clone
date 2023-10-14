import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarMinus, faGear, faSearch, faUsers,faUsersLine} from '@fortawesome/free-solid-svg-icons'


function Group() {
  return (
    <div>
        <Navbar/>
        <div className="d-flex">
            <div className='fl-lside ms-4 '>
                <div className='fl-head d-flex justify-content-between'>
                    <h3 className='fw-bolder'>Friends</h3>
                    <FontAwesomeIcon icon={faGear} className='ms-3 p-2 fl-icon  rounded-circle'/>
                </div>
                <div className='search'>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="search" name="" id="search" placeholder='Search Group'/>
                </div>
                <div className="fl-body">
                <Link to="/Friend" className='l-icon text-dark d-flex mt-2'>
                    <FontAwesomeIcon icon={faCalendarMinus} className='me-4 flh-icon rounded-circle bg-primary '/><span>Your Feed</span>
                </Link >
                <Link to="/Friend" className='l-icon text-dark d-flex mt-2'>
                    <FontAwesomeIcon icon={faCalendarMinus} className='me-4 fl-icon rounded-circle  '/><span>Discovery</span>
                </Link >
                <Link to="/Friend" className='l-icon text-dark d-flex mt-2'>
                    <FontAwesomeIcon icon={faUsers} className='me-4 fl-icon rounded-circle  '/><span>Your Group</span>
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

export default Group