import React,{ useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import backboneapi from "../actions/AuthAction";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const [usernameErr, setUserNameErr] = useState(false);
    const [passErr, setPasswordErr] = useState(false);
    const [data,setData] = useState({
        username : "",
        password: ""
    })
    const handleChange = (event) =>{
        setData({ ...data,[event.target.name]: event.target.value});
        console.log(data.username);
    }
    const submitForm = (e) => {
        e.preventDefault();
        
        if(data.username.length === 0){
            setUserNameErr(true);
        }else{
            setUserNameErr(false);
        }
        if(data.password.length === 0){
            setPasswordErr(true);
        }else{
            setPasswordErr(false);
        }
        const formData = {
            username: data.username,
            password: data.password
        }
        backboneapi(formData).then(
            (res)=>{
                if(res.success === true){
                    const { address,created_at,email,fname,id,lname,password,phone,updated_at,username } = res.user
                    localStorage.setItem("token", res.token);
                    localStorage.setItem('userFname',fname);
                    localStorage.setItem('userLname',lname);
                    localStorage.setItem("userInfo", {fname, lname, username,address,email, phone, created_at, password, updated_at,id});
                    localStorage.setItem("authenticated", true);
                    console.log('Login Successful');
                    navigate('/dashboard');
                }else{
                    toast.error(res.status, {
                        position: toast.POSITION.TOP_CENTER
                    });             
                }
            },
            (err) => {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        );
    }
  return (
        <div className="form-container outer">
             <ToastContainer />
            <div className="form-form">
                <div className="form-form-wrap">
                    <div className="form-container">
                        <div className="form-content">
                            <h1 className="">Sign In</h1>
                            <p className="">Log in to your account to continue.</p>
                            <form className="text-left" onSubmit={submitForm}>
                                <div className="form">
                                    <div id="username-field" className="field-wrapper input">
                                        <label htmlFor="username">USERNAME</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <input 
                                            type="text" 
                                            id="username" 
                                            name="username"
                                            value={data.username} 
                                            className="form-control" 
                                            placeholder="Username" 
                                            onChange={handleChange} 
                                        />
                                        {usernameErr ? <span style={{color:'red'}}>Username Required</span> : ''}
                                    </div>
    
                                    <div id="password-field" className="field-wrapper input mb-2">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="password">PASSWORD</label>
                                            
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                        <input 
                                            id="password" 
                                            name="password"
                                            value={data.password}
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password"  
                                            onChange={handleChange} 
                                        />
                                        {passErr ? <span style={{color: "red"}}>Password is required</span> : ''}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="toggle-password" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    </div>
                                    <div className="d-sm-flex justify-content-between">
                                        <div className="field-wrapper">
                                            <button type="submit" className="btn btn-primary" value="">Log In</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                                           
                        </div>                    
                    </div>
                </div>
            </div>
        </div>    
  )
}

export default Login;
