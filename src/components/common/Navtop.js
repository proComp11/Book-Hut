import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
function Navtop(){
        const navigate = useNavigate();
        const [items,setItems] = useState([]);
        useEffect(()=>{
            const items =localStorage.getItem("userFname") + " " +localStorage.getItem("userLname");
            if(items){
                setItems(items);
            }
        }, []);    

        const logoutSubmit = (e) => {
            e.preventDefault();
            
            const url = `${process.env.REACT_APP_BASE_URL}/api/logout`;
            axios.post(url).then(res =>{
                console.log(res.data.success);
                if(res.data.success === true){
                    localStorage.clear();
                    console.log('I am in logout Submit body')
                    navigate('/');
                }
            })
        }
        return(
            <div className="header-container fixed-top">
                <header className="header navbar navbar-expand-sm expand-header">
                    <a href="javascript:0;" className="sidebarCollapse" data-placement="bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </a>
                    <ul className="navbar-item flex-row ml-auto">
                        <li className="nav-item align-self-center search-animated">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search toggle-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <form className="form-inline search-full form-inline search" role="search">
                                <div className="search-bar">
                                    <input type="text" className="form-control search-form-control  ml-lg-auto" placeholder="Search..." />
                                </div>
                            </form>
                        </li>
                        <li className="nav-item dropdown notification-dropdown">
                            <a href="javascript:0;" className="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                <span className="badge badge-success"></span>
                            </a>
                            <div className="dropdown-menu position-absolute" aria-labelledby="notificationDropdown">
                                <div className="notification-scroll">
                                    <div className="dropdown-item">
                                        <div className="media server-log">
                                            <div className="media-body">
                                                <div className="data-info">
                                                    <h6 className="">Server Rebooted</h6>
                                                    <p className="">45 min ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown user-profile-dropdown  order-lg-0 order-1">
                            <a href="javascript:0;" className="nav-link dropdown-toggle user" id="userProfileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </a>
                            <div className="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
                                <div className="user-profile-section">
                                    <div className="media mx-auto">
                                        <img src="assets/image/user.jpg" className="img-fluid mr-2" alt="avatar" />
                                        <div className="media-body">
                                            <h5>Book Hut</h5>
                                            <h6 id="user" className="text-white">Welcome - {items}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-item">
                                    <a href="/#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span>Profile</span>
                                    </a>
                                </div>
                                <div className="dropdown-item">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg><span onClick={logoutSubmit}>Logout</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </header>
            </div>
        )
}

export default Navtop;