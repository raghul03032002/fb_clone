import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {  faLocationDot, faPenToSquare, faPencilSquare, faPhotoFilm, faSmile, faUser, faUserTag, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';


function Post() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [userData, setUserData] = useState({
        textarea:'',
        image:'',
        like:''
      });

      const navigate=useNavigate();

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/post",userData)
        .then(res=>
        alert("Post successfully"),
        navigate("/Home")
        )
        .catch(err=>console.log(err))
      };
  return (
    <div>
      
        <Link className="dropdown-item " onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='mx-3'/>Post</Link>
        <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Create Post</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <form onSubmit={handleSubmit}>
    <div className='d-flex ms-4'>
        <FontAwesomeIcon icon={faUser} className='post-uicon border rounded-5 p-2 mb-3 mx-1'/>
        <h4>Ram</h4>
    </div>
    <div className='ms-4'>
        <textarea  className="p-text" cols="30" rows="5" placeholder="What's Your Mind?" name="textarea" onChange={handleChange} required></textarea>
        </div>
        <input type="text" name="image" id=""  value={userData.image} onChange={handleChange} className='ms-4' placeholder='Enter the Image Name'/>
        <div className='d-flex justify-content-end m-3 post-card'>
          
            <Link to="" className='mx-3 mt-1'><FontAwesomeIcon icon={faPhotoFilm} className='post-icon'/></Link>
            <FontAwesomeIcon icon={faUserTag} className='mx-2 mt-1 post-icon '/>
            <FontAwesomeIcon icon={faSmile} className='mx-2 mt-1 post-icon'/>
            <FontAwesomeIcon icon={faLocationDot} className='mx-2 mt-1 post-icon'/>
            <FontAwesomeIcon icon={faPencilSquare} className='mx-2 mt-1 post-icon'/>
            <FontAwesomeIcon icon={faVideoCamera} className='mx-2 mt-1 post-icon'/>
        </div>
        <button type='submit' className='post btn btn-primary'>Post</button>

    </form>
    </Modal.Body>
</Modal>
    </div>
  )
}
export default Post;

