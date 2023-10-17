import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [userData, setUserData] = useState({
      id: '',
      fname: '',
      sname:'',
      pwd:''
    });
    const navigate=useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:3002/users",{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(userData)
      }).then((res)=>{
        alert("Registered Successfully.")
        navigate('/Home');
      }).catch((err)=>{
        alert("Registered failed:"+err.message)
      });
    };
  return (
<>
<Button variant="success" onClick={handleShow} className='d-flex mx-auto my-3 cna'>
Create New Account
</Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Sign Up</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <form onSubmit={handleSubmit}>
<div className="d-flex flex-column">
    <div className='row name '>
      <input type="text" name="fname" id="fname" className='col-sm-12 col-md-4 col-lg-6 col-12 form-control shadow-none fname' placeholder='First Name' value={userData.fname} onChange={handleChange} required/>
      <input type="text" name="sname" id="sname" className='col-sm-12 col-md-4 col-lg-6 col-12 form-control shadow-none lname' placeholder='Surname' value={userData.sname} onChange={handleChange} required/>
    </div>
    <input type="text" name='id' id='id' placeholder='Enter email or Phone Number' className='my-2 form-control shadow-none' value={userData.id} onChange={handleChange} required/>
    <br />
    <input type="password" name='pwd' id='pwd' placeholder='Set Password' className='form-control shadow-none my-2' value={userData.pwd} onChange={handleChange} required/>
    <label>Date of Birth</label>
    <input type="date" name="dob" id="dob" className='form-control shadow-none my-2'/>
    <label>Gender</label>
    <div className='d-flex mx-3 my-2'>
    <div className='border rounded mx-3 px-3'><input type="radio" name="gender" id='gender' />  Male</div>
    <div className='border rounded mx-3 px-3'><input type="radio" name="gender" id='gender'  />  Female</div>
  <div className='border rounded mx-3 px-3'><input type="radio" name="gender" id='gender' />  Other</div>
    </div>
    <p>People who use our service may have uploaded your contact information to Facebook. <a href="https://www.facebook.com/help/637205020878504">Learn more</a>.</p>
    <p>By clicking Sign Up, you agree to our <a href="https://www.facebook.com/legal/terms/update">Terms</a>, <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">Privacy Policy</a> and <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
  </div>
  <div className='d-flex justify-content-end'>
    <Button variant="danger" onClick={handleClose}>
      Close
    </Button>
    <button className='btn btn-success mx-3'>
      Save Changes
    </button>
  </div>
    </form>
    </Modal.Body>
</Modal>
</>
  )
}

export default Register

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function StaticExample() {
//   return (
//     <div
//       className="modal show"
//     >
//       <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Sign Up</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//         <div className="d-flex flex-column">
//     <div className='row name '>
//       <input type="text" name="" id="" className='col-sm-12 col-md-4 col-lg-6 col-12 form-control shadow-none fname' placeholder='First Name'/>
//       <input type="text" name="" id="" className='col-sm-12 col-md-4 col-lg-6 col-12 form-control shadow-none lname' placeholder='Surname'/>
//     </div>
//     <input type="text" placeholder='Enter email or Phone Number' className='my-2 form-control shadow-none'/>
//     <br />
//     <input type="password" placeholder='Set Password' className='form-control shadow-none my-2'/>
//     <label>Date of Birth</label>
//     <input type="date" name="" id="" className='form-control shadow-none my-2'/>
//     <label>Gender</label>
//     <div className='d-flex mx-3 my-2'>
//     <div className='border rounded mx-3 px-3'><input type="radio" name="" id="" />  Male</div>
//     <div className='border rounded mx-3 px-3'><input type="radio" name="" id="" />  Female</div>
//     <div className='border rounded mx-3 px-3'><input type="radio" name="" id="" />  Other</div>
//     </div>
//     <p>People who use our service may have uploaded your contact information to Facebook. <a href="https://www.facebook.com/help/637205020878504">Learn more</a>.</p>
//     <p>By clicking Sign Up, you agree to our <a href="https://www.facebook.com/legal/terms/update">Terms</a>, <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">Privacy Policy</a> and <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
//   </div>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </div>
//   );
// }

// export default StaticExample;