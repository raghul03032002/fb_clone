import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCommentDots, faNewspaper, faPhotoFilm, faPlusCircle, faShare, faShop, faSmile, faThumbsUp, faTv, faUser, faUserGroup, faUsers, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import img from'../images/fb_logo.png'

function Home() {
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
    <Link to="/Shop" className='l-icon text-dark d-flex'>
      <FontAwesomeIcon icon={faShop} className='px-3 pt-1 pe-1'/><span>Market</span>
    </Link >
  </div>
  </div>
  <div className='center-side'>
    <div className="story mb-3">
    <div class="container">
  <div class="row">
    <div class="col">
      <div class="card text-start story_creat-card">
        <div >
        <FontAwesomeIcon icon={faUser} className=' p-2 story-icon'/>
        <div className="d-flex align-items-center justify-content-center position-relative bg-white story_create px-2 ">
          <p className='mt-3 pb-4  text-center fs-8 fw-bold'>Create&nbsp;Story</p>
        <div className="position-absolute top-0 start-50 translate-middle">
          <FontAwesomeIcon icon={faPlusCircle} className='fs-3 text-primary bg-white p-1 rounded-circle'/>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-start story_card">
        <div >
        <FontAwesomeIcon icon={faUser} className=' p-2 story-icon'/>
        <div className="story_name text-light">Hari</div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-start story_card">
        <div >
        <FontAwesomeIcon icon={faUser} className=' p-2 story-icon'/>
        <div className="story_name text-light">Abilash</div>
        </div>
      </div>
    </div>
    <div class="col">
    <div class="card text-start story_card ">
        <div >
        <FontAwesomeIcon icon={faUser} className=' p-2 story-icon'/>
        <div className="story_name text-light">Saravana</div>
        </div>
      </div>
    </div>
    <div class="col">
    <div class="card text-start story_card ">
        <div >
        <FontAwesomeIcon icon={faUser} className=' p-2 story-icon'/>
          <div className="story_name text-light">Kishore</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="card text-start  ">
        <div className="card-body ">
          <div className="card-title d-flex">
            <FontAwesomeIcon icon={faUser} className=' px-3 cprofile'/>
            <button className='btn mind-btn w-100'>What's on Your Mind?</button>
            </div>
          <hr />
        <div className="card-text d-flex justify-content-between ">
          <div className='border  d-flex px-1 pt-2 mx-2 btn c-btn' >
            <FontAwesomeIcon icon={faVideoCamera} className="pt-1 px-2 mt-1 crd-icon"/>
            <p className='mt-1 c-text'>Live_video</p>
          </div> 
          <div className='border  d-flex px-1 mx-2 pt-2 btn c-btn'>
            <FontAwesomeIcon icon={faPhotoFilm} className="pt-1 px-2 mt-1 crd-icon"/>
            <p className='mt-1 c-text'>Photos/Videos</p>
          </div> 
          <div className='border  d-flex px-1 mx-2 pt-2 btn c-btn'>
            <FontAwesomeIcon icon={faSmile} className="pt-1 px-2 mt-1 crd-icon"/>
            <p className='mt-1 c-text'>Feelings/Activity</p>
            </div>
          </div>
      </div>
    </div>
    <div><hr />
    <div className='d-flex flex-column-reverse'>
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
            <img src={`https://source.unsplash.com/640x426/?${p.image}`} className='p-img object-fit-cover' alt=''/>
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