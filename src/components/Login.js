import React from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Register from './Register'


function Login() { 
    const [id, setid] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {  
        sessionStorage.clear();
    }, []);

    const login = (e) => {
        e.preventDefault();
            fetch("http://localhost:3002/users/" + id)
                .then((res) => res.json())
                
                .then((resp) => {
                    if (Object.keys(resp).length === 0) {  
                    setError('Please Enter valid E-mail');
                    } else {
                        if (resp.pwd === pwd) {
                            sessionStorage.setItem('name', id);
                            sessionStorage.setItem('userrole', resp.role);
                            navigate('/Home');
                        } else {
                            setError('Please Enter valid Password');
                        }
                    }
                })
                .catch((err) => {
                setError('Login Failed due to: ' + err.message);
                });
    }
    return (
    <div>
    <div className=" container-fluid row login">
        <div className='col-sm-12 col-md-4 col-lg-6 col-12 '>
            <h1 className='head'>facebook</h1>
            <p className='fs-3 text '>
            Facebook helps you connect and share with the people in your life.
            </p>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 col-12 border rounded container form'>
        <form className='p-2' onSubmit={login}>
<div className="mb-3 mt-3">
<input value={id} onChange={e => setid(e.target.value)} type="text" className="form-control shadow-none" id="email" placeholder="Enter email or Phone Number" name="email"/>
</div>
<div className="mb-3">
<input value={pwd} onChange={e => setPwd(e.target.value)} type="password" className="form-control shadow-none" id="pwd" placeholder="Enter password" name="pwd"/>
{error && <div className="alert alert-danger mt-2">{error}</div>}
</div>
<button type="submit" className="btn btn-primary d-flex mx-auto logbtn">Log in</button>
<p className='text-center my-3'>Forgotten password?</p>
<hr/>
<Register/>
</form> 
        </div>
    </div>
</div>
    )
}

export default Login