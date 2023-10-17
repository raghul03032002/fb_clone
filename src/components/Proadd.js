// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/esm/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAdd } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';


// function Proadd() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const [proData, setproData] = useState({
//       title: '',
//       image:'',
//       price:''
//     });
//     const navigate=useNavigate();
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setproData({ ...proData, [name]: value });
//     };
    
  
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:3002/product",proData)
//         .then(res=>
//         alert("Product Added successfully"),
//         navigate("/Shop")
//         )
//         .catch(err=>console.log(err))
//       };
//   return (
//     <div>
// <FontAwesomeIcon icon={faAdd} onClick={handleShow} className='px-3 pt-1 pe-1'/><span>Add</span>

// <Modal show={show} onHide={handleClose}>
//   <Modal.Header closeButton>
//     <Modal.Title>Add Product</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//   <form onSubmit={handleSubmit}>
// <div className="d-flex flex-column">
//     <input type="text" name="title" id="" placeholder='Enter the Product Name' value={proData.title} onChange={handleChange}/>
//     <input type="text" name="image" id="" placeholder='Enter the image name' value={proData.image} onChange={handleChange}/>
//     <input type="text" name="price" id="" placeholder='Enter The Amount'value={proData.price} onChange={handleChange}/>
//   </div>
//   <div className='d-flex justify-content-end'>
//     <Button variant="danger" onClick={handleClose}>
//       Close
//     </Button>
//     <button className='btn btn-success mx-3'>
//       Save Changes
//     </button>
//   </div>
//     </form>
//     </Modal.Body>
// </Modal>
//     </div>
//   )
// }

// export default Proadd

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Changed icon to 'faPlus' for clarity
import axios from 'axios';

function Proadd() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [proData, setProData] = useState({
    title: '',
    image: '',
    price: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProData({ ...proData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/product", proData)
      .then((res) => {
        alert("Product added successfully");
        navigate("/Shop");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <FontAwesomeIcon icon={faPlus} onClick={handleShow} className='px-3 pt-1 pe-1'/><span>Add</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column">
              <input type="text" name="title" id="" placeholder='Enter the Product Name' value={proData.title} onChange={handleChange} />
              <input type="text" name="image" id="" placeholder='Enter the image name' value={proData.image} onChange={handleChange} />
              <input type="text" name="price" id="" placeholder='Enter The Amount' value={proData.price} onChange={handleChange} />
            </div>
            <div className='d-flex justify-content-end'>
              <button type="submit" className='btn btn-success mx-3'>
                Save Changes
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Proadd;

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons'; 

// function Proadd() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     // Api
//     const [proData, setproData] = useState({
//         title: '',
//         image: '',
//         price: '',
//       });
//       const navigate=useNavigate();
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setproData({ ...proData, [name]: value });
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch("http://localhost:3003/product",{
//           method:'POST',
//           headers:{'content-type':'application/json'},
//           body:JSON.stringify(proData)
//         }).then((res)=>{
//           alert("Product Added Successfully.")
//           navigate('/Shop');
//         }).catch((err)=>{
//           alert("failed to Add :"+err.message)
//         });
//         console.log(proData)
//       };
//   return (
//     <div>
// <div>
// <FontAwesomeIcon icon={faPlus} onClick={handleShow} className='px-3 pt-1 pe-1'/><span>Add</span>

// <Modal show={show} onHide={handleClose}>
//   <Modal.Header closeButton>
//     <Modal.Title>Add Product</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     <form onSubmit={handleSubmit}>
//       <div className="d-flex flex-column">
//         <input type="text" name="title" id="" placeholder='Enter the Product Name' value={proData.title} onChange={handleChange} />
//         <input type="text" name="image" id="" placeholder='Enter the image name' value={proData.image} onChange={handleChange} />
//         <input type="text" name="price" id="" placeholder='Enter The Amount' value={proData.price} onChange={handleChange} />
//       </div>
//       <div className='d-flex justify-content-end'>
//         <button type="submit" className='btn btn-success mx-3'>
//           Save Changes
//         </button>
//       </div>
//     </form>
//   </Modal.Body>
// </Modal>
// </div>
//     </div>
//   )
// }

// export default Proadd