import React from 'react'
import { Link } from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGrip, faHouse,faMessage,faUserGroup, faUsers,faBell,faUser, faPenToSquare, faBookOpen, faClapperboard, faStarAndCrescent, faFlagCheckered, faBullhorn, faCalendarPlus, faStore, faShop, faStar, faSearch, faGear, faQuestionCircle, faMoon, faCommentMedical, faRightFromBracket, faBars} from '@fortawesome/free-solid-svg-icons'
import Post from './Post'


function Navbar() {

  return (
    <div>
    <header id="home">
    <div className="container-fluid">
    <nav
        className="navbar navbar-expand-lg bg-light  px-4  fixed-top"
      >
      <div className="container-fluid d-flex justify-content-between">
        <div>
        <h1 className=" fs-2 px-3" id='logo'>f</h1>
        </div>
        <div className='center_nav d-xs-none'>
        <Link to="/Home">
          <FontAwesomeIcon icon={faHouse} className='px-3 icon'/></Link>
          <Link to="/Friend">
          <FontAwesomeIcon icon={faUserGroup} className='px-3 icon'/></Link>
          <Link to="/Group">
          <FontAwesomeIcon icon={faUsers} className='px-3 icon'/></Link>

        </div>
        <div className='d-flex' >
        <div className="dropdown">
          <FontAwesomeIcon icon={faGrip} className='px-3 icon dropdown-toggle'  type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false"/>
    <div className="dropdown-menu" aria-labelledby="triggerId">
      <Post/>
      <Link className="dropdown-item " href="#"><FontAwesomeIcon icon={faBookOpen} className='mx-3'/>Story</Link>
      <Link className="dropdown-item" href="#"><FontAwesomeIcon icon={faClapperboard} className='mx-3'/>Reel</Link>
      <Link className="dropdown-item" href="#"><FontAwesomeIcon icon={faStar} className='mx-3'/>Life Event</Link>
      <div className="dropdown-divider"></div>
      <Link className="dropdown-item" href="#"><FontAwesomeIcon icon={faFlagCheckered} className='mx-3'/>Page</Link>
      <Link className="dropdown-item" href="#"><FontAwesomeIcon icon={faBullhorn} className='mx-3'/>Ad</Link>
      <Link className="dropdown-item" href="#"><FontAwesomeIcon icon={faUsers} className='mx-3'/>Group</Link>
      <Link className="dropdown-item" href="#"><FontAwesomeIcon icon={faCalendarPlus} className='mx-3'/>Event</Link>
      <Link className="dropdown-item" href="#"><FontAwesomeIcon icon={faShop} className='mx-3'/>Market place</Link>

    </div>
  </div>
  <div className="dropdown-center dropstart">
          <FontAwesomeIcon icon={faMessage} className='px-3 icon dropdown-toggle'  type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false"/>
    <div className="dropdown-menu" aria-labelledby="triggerId">
      <Link className="dropdown-item mx-auto" href="#"><u>Chats</u></Link>
      <div className="input-group input-group-sm px-3 mb-3">
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  <span className="input-group-text" id="inputGroup-sizing-sm"><FontAwesomeIcon icon={faSearch}/></span>
</div>

      <p className='mx-5'>No Messages Found</p>
      <div className='dropdown-divider'></div>
      <Link className="dropdown-item mx-auto px-5" href="#">See all in Messenger</Link>
    </div>
  </div>        
  <div className="dropdown dropstart">
          <FontAwesomeIcon icon={faBell} className='px-3 icon dropdown-toggle'  type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false"/>
    <div className="dropdown-menu justify-content-center notf w-100" aria-labelledby="triggerId">
    <h3>Notifications</h3>
    <div className='d-flex'>
    <p>All</p><p >Unread</p>
    </div>
  
    <h3>Earlier</h3>
    <div className='d-flex' >
      <div><FontAwesomeIcon icon={faUser}/></div>
      <div>
        <div>you have a new friend suggestion:</div>
        <div>jhon</div>
      </div>
    </div>
    </div>
  </div>       
  <div className="dropdown dropstart ">
          <FontAwesomeIcon icon={faUser} className='px-3 icon' id="triggerId" data-bs-toggle="dropdown"
        aria-expanded="false"/>
    <div className="dropdown-menu justify-content-center profiles mt-5" aria-labelledby="triggerId">
      <div className='card p-card mb-5'>
        <div className='d-flex mt-3 pro-icon '>
        <FontAwesomeIcon icon={faUser} className=' p-1'/><p className=' px-2'>Ram</p>
      </div>
      <div className='dropdown-divider'></div>
      <p className=' oth-pro'>See All Profiles</p>
      </div>
      <Link className="dropdown-item"><FontAwesomeIcon icon={faGear} className='me-3'/>Setting & privacy</Link>
      <Link className="dropdown-item"><FontAwesomeIcon icon={faQuestionCircle} className='me-3'/>Help & Support</Link>
      <Link className="dropdown-item"><FontAwesomeIcon icon={faMoon} className='me-3'/>Display & accessibility</Link>
      <Link className="dropdown-item"><FontAwesomeIcon icon={faCommentMedical} className='me-3'/>Give feedback</Link>
      <Link to="/" className="dropdown-item"><FontAwesomeIcon icon={faRightFromBracket} className='me-3'/>Log out</Link>
      <p className='mx-1'>Privacy  · Terms  · Advertising  · Ad choices   · Cookies  · More · 
Meta © 2023</p>
    </div>
  </div>
        </div>
      </div>
    </nav>
    </div>
  </header>
    </div>
  )
}

export default Navbar