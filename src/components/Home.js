import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCommentDots, faNewspaper, faPhotoFilm, faPlus, faPlusCircle, faShare, faShop, faSmile, faThumbsUp, faTv, faUser, faUserGroup, faUsers, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import img from '../images/fb_logo.png'
import Navbar from './Navbar'
import axios from 'axios'

function Home(props) {
  const[post,setpost]=useState([])
  useEffect(()=>{
axios.get("http://localhost:3002/post")
.then(res=>setpost(res.data))
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
  </div>
  </div>
  <div className='center-side mt-4'>
    <div className="card text-start ">
      <div className="card-body ">
        <div className="card-title d-flex"><FontAwesomeIcon icon={faUser} className=' px-3 cprofile'/><button className='btn mind-btn w-100'>What's on Your Mind?</button></div><hr />
        <div className="card-text d-flex justify-content-between ">
          <div className='border  d-flex px-1 pt-2 mx-2 btn c-btn' ><FontAwesomeIcon icon={faVideoCamera} className="pt-1 px-2 mt-1 crd-icon"/><p className='mt-1 c-text'>Live_video</p></div> 
          <div className='border  d-flex px-1 mx-2 pt-2 btn c-btn'><FontAwesomeIcon icon={faPhotoFilm} className="pt-1 px-2 mt-1 crd-icon"/><p className='mt-1 c-text'>Photos/Videos</p></div> 
          <div className='border  d-flex px-1 mx-2 pt-2 btn c-btn'><FontAwesomeIcon icon={faSmile} className="pt-1 px-2 mt-1 crd-icon"/><p className='mt-1 c-text'>Feelings/Activity</p></div>
          </div>
      </div>
    </div>
    <div><hr />
    {post.map((p)=>(
      <div className="card text-start mt-3" key={p.id}>
        <div className="ca "  >
          <div className="card-header">
          Suggested for you 
          </div>
          <div className="card-body">
            <div className='d-flex'>
              <FontAwesomeIcon icon={faUser} className=' p-3 rounded-circle profile'/>
              <div className='d-flex '>
                <span className='mx-2 fs-3 align-item-center'>Ram</span>
              </div>
            </div>
            <h4 className="card-title py-3">{p.textarea}</h4>
            <div className='p-img_area d-flex justify-content-center'>
            <img src={p.image} className='p-img object-fit-contain' alt=''/>
            </div>
            
            <div className='d-flex justify-content-between text-muted'>
              <div>
                <FontAwesomeIcon icon={faThumbsUp}/>25
              </div>
              <div>
              <FontAwesomeIcon icon={faCommentDots}/>25 &nbsp;&nbsp;
              <FontAwesomeIcon icon={faShare}/>25
              </div>
            </div>
          </div>
          <div className="card-footer text-muted d-flex justify-content-around">
            <div className='d-flex btn p-btn'>
              <FontAwesomeIcon icon={faThumbsUp} className='p-icon'/><p>Like</p>
            </div>
            <div className='d-flex btn p-btn'>
              <FontAwesomeIcon icon={faCommentDots} className='p-icon'/><p>Comment</p>
            </div>
            <div className='d-flex btn p-btn'>
              <FontAwesomeIcon icon={faShare} className='p-icon'/><p>Share</p>
            </div>
          </div>
        </div>
      </div>
                  ))}
    </div>
  </div>
  <div className='r-side mx-5 mt-5'>
    <h5 className='text-muted'>Group&nbsp;conversations</h5>
    <div className='grp-btn mt-4 p-2'><FontAwesomeIcon icon={faPlusCircle} className='pe-3'/>Create New Group</div>
  </div>
    </div>
    </div>
  )
}

export default Home