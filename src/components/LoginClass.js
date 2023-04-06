import React from "react";
import backboneapi from "../actions/AuthAction";
import {useNavigate} from 'react-router-dom';
import Dashboard from "./Dashboard";
class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username: {name:'username', value: '', error:''},
            password: {name:'password', value: '', error:''}
        }
    }

    validateForm = () => {
        const {username, password} = this.state;    
        let status = true;
        if(username.value.length === 0 || username.value === ''){
            status = false;
            this.setState({username : {...username, error: 'Please Enter Your Username'}})
        }else{
            this.setState({username : {...username, error: ''}})
        }
        if(password.value.length === 0 || password.value === ''){
            status = false;
            this.setState({password : {...password, error: 'Please Enter Your Password'}})
        }else{
            this.setState({password : {...password, error: ''}})
        }
        return status;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const validateStatus = this.validateForm();
        const navigate = useNavigate();
        if(validateStatus === true){
            const {username,password} = this.state;
            const model = {
                username : username.value,
                password: password.value
            }
            console.log(model);
            backboneapi(model).then(
                (res)=>{
                    if(res.success === true){
                        const { address,created_at,email,fname,id,lname,password,phone,updated_at,username } = res.user
                        localStorage.setItem("token", res.token);
                        localStorage.setItem("userInfo", {fname, lname, username,address,email, phone, created_at, password, updated_at,id});
                        navigate('/dashboard');
                    }else{
                        alert(res.success);
                    }
                },
                (err) => {
                    alert(err.message);
                }
            );
        };
    }

    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({[name]:{...this.state[name], value}});
    }
    render(){
        const {username, password} = this.state;
        return(
            <div className="form-container outer">
                <div className="form-form">
                    <div className="form-form-wrap">
                        <div className="form-container">
                            <div className="form-content">
                                <h1 className="">Sign In</h1>
                                <p className="">Log in to your account to continue.</p>
                                <form className="text-left" onSubmit={this.handleSubmit}>
                                    <div className="form">
                                        <div id="username-field" className="field-wrapper input">
                                            <label htmlFor="username">USERNAME</label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            <input 
                                                type="text" 
                                                id="username" 
                                                name={username.name}
                                                value={username.value} 
                                                className="form-control" 
                                                placeholder="Username" 
                                                onChange={this.onChange}
                                            />
                                            <div style={{color: 'red'}}>
                                                {username.error.length > 0 && username.error}
                                            </div>
                                        </div>
        
                                        <div id="password-field" className="field-wrapper input mb-2">
                                            <div className="d-flex justify-content-between">
                                                <label htmlFor="password">PASSWORD</label>
                                                
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                            <input 
                                                id="password" 
                                                name={password.name}
                                                value={password.value}
                                                type="password" 
                                                className="form-control" 
                                                placeholder="Password"  
                                                onChange={this.onChange}
                                            />
                                            <div style={{color: 'red'}}>
                                                {password.error.length > 0 && password.error}
                                            </div>
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
}

export default Login;