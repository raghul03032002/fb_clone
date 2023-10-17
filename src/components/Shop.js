import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faNewspaper, faShop, faTv, faUser, faUserGroup, faUsers} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useState,useEffect } from 'react'
import Proadd from './Proadd'

function Shop() {
    const[product,setproduct]=useState([])

    

    useEffect(()=>{
        fetch('http://localhost:3002/product')
        .then(det=>det.json())
        .then(det=>setproduct(det))

    },[])
    return (
    <div>
        <Navbar/>
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
    <Link className='l-icon text-dark d-flex'>
      <Proadd/>
    </Link >
  </div>
  </div>

  <div className="scenter-side mt-3">
  <div className="row ">
  {product.map((pro)=>(
    <div className='col-sm-12 col-md-4 col-lg-4 col-12 coldata' key={pro.id}>
                <div className='data border p-1 bg-dark text-light mcard'>
                <p className='mt-4 px-5 mx-1 text-capitalize fs-3'>{pro.title}</p>
                <img src={`https://source.unsplash.com/640x426/?${pro.image}`} alt='image not found' className="card-text img-fluid" />
                <p className='btn btn-light m-2 ms-5'>{pro.price}</p>
                  </div>
                  </div>
                  ))}
        </div>
        </div>

        <div className="mrside">

        </div>
        </div>
    </div>
    )
}

export default Shop