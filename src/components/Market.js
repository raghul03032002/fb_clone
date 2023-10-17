import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faNewspaper, faShop, faTv, faUser, faUserGroup, faUsers} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function market() {
    return (
    <div>
        <div className='home_lside d-flex' >
        <div className='lside '>
  <div className=" pt-3 mx-2 d-grid gap-3 ">
    <Link className='l-icon text-dark d-flex'><FontAwesomeIcon icon={faUser} className=' px-3 pt-1 pe-1'/><span>Ram</span></Link>
    <Link to="/Friend" className='l-icon text-dark d-flex'>
      <FontAwesomeIcon icon={faUserGroup} className='px-3 pt-1 pe-1'/><span>Friends</span>
    </Link >
    <Link className='l-icon text-dark d-flex'>
      <FontAwesomeIcon icon={faUsers} className='px-3 pt-1 pe-1'/><span>Group</span>
    </Link>
    <Link className='l-icon text-dark d-flex'>
      <FontAwesomeIcon icon={faTv} className='px-3 pt-1 pe-1'/><span>video</span>
    </Link >
    <Link className='l-icon text-dark d-flex'>
      <FontAwesomeIcon icon={faNewspaper} className='px-3 pt-1 pe-1'/><span>Feeds</span>
    </Link>
    <Link className='l-icon text-dark d-flex'>
      <FontAwesomeIcon icon={faShop} className='px-3 pt-1 pe-1'/><span>Market</span>
    </Link >
  </div>
  </div>
        </div>
        {/* <div class="card">
            <div class="card-header">
                Header
            </div>
            <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Text</p>
            </div>
            <div class="card-footer text-muted">
                Footer
            </div>
        </div> */}
    </div>
    )
}

export default market