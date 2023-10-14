import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { faLocation, faLocationDot, faPenToSquare, faPencilSquare, faPerson, faPhotoFilm, faSmile, faUser, faUserTag, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
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
        .then(res=>alert("Post successfully"),
        navigate('/Home'))
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
        <textarea  className="p-text" cols="30" rows="10" placeholder="What's Your Mind?" name="textarea" onChange={handleChange}></textarea>
        </div>
        <div className='d-flex justify-content-end m-3 post-card'>
          <input type="file" name="image" id="" value={userData.image} onChange={handleChange}/>
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

// import React, { useState } from 'react';
// import axios from 'axios';

// function Post() {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [image, setImage] = useState(null);

//   const handleMobileNumberChange = (e) => {
//     setMobileNumber(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     // Assuming you have an input element with type "file" for image upload
//     const selectedImage = e.target.files[0];
//     setImage(selectedImage);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a FormData object to send the image and mobile number
//     const formData = new FormData();
//     formData.append('mobileNumber', mobileNumber);
//     formData.append('image', image);

//     try {
//       // Send a POST request to your API endpoint
//       await axios.post('http://localhost:3002/post', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Data uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading data', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Mobile Number and Image</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="mobileNumber">Mobile Number:</label>
//           <input
//             type="text"
//             id="mobileNumber"
//             value={mobileNumber}
//             onChange={handleMobileNumberChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="image">Image:</label>
//           <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
//         </div>
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }

// export default Post;
// import React, { useState } from 'react';

// function Post() {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [image, setImage] = useState(null);

//   const handleMobileNumberChange = (e) => {
//     setMobileNumber(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setImage(selectedImage);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('mobileNumber', mobileNumber);
//     formData.append('image', image);

//     try {
//       const response = await fetch(' http://localhost:3002/data', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         alert('Data uploaded successfully');
//         // Clear the form or perform any other necessary actions.
//       } else {
//         console.error('Failed to upload data');
//       }
//     } catch (error) {
//       console.error('Error: ', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Mobile Number"
//           value={mobileNumber}
//           onChange={handleMobileNumberChange}
//         />
//         <input type="file" onChange={handleImageChange} />
//         <button type="submit">Upload Data</button>
//       </form>
//     </div>
//   );
// }

// export default Post;

