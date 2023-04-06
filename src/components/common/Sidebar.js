import React from "react";

function Sidebar(){
        return(
            <div className="sidebar-wrapper sidebar-theme">
                <nav id="sidebar">
                    <ul className="navbar-nav theme-brand flex-row  text-center">
                        <li className="nav-item theme-logo">
                            <a href="/#">
                                <img src="assets/image/logo.png" class="navbar-logo" alt="logo" />
                            </a>
                        </li>
                        <li className="nav-item theme-text">
                            <a href="/#" className="nav-link"> MCLI </a>
                        </li>
                    </ul>
                    <ul className="list-unstyled menu-categories" id="accordionExample">
                        <li className="menu active">
                            <a href="/#" aria-expanded="true" class="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    <span>Dashboard</span>
                                </div>
                            </a>
                        </li>
                        <li className="menu">
                            <a href="#users" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users text-info"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    <span>Users</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                            <ul className="collapse submenu list-unstyled" id="users" data-parent="#accordionExample">
                                <li><a href="/#"> Manage </a></li>
                                <li><a href="/#"> Access Level </a></li>                           
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="#master" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database text-success"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                                    <span>Master Data</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                            <ul className="collapse submenu list-unstyled" id="master" data-parent="#accordionExample">
                                <li><a href="/#"> All Master </a></li>                           
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="#log" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder text-warning"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                    <span>Log Details</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                            <ul className="collapse submenu list-unstyled" id="log" data-parent="#accordionExample">
                                <li><a href="#"> Data Log </a></li>                           
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="#logger" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info text-danger"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                    <span>Logger Info</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                            <ul className="collapse submenu list-unstyled" id="logger" data-parent="#accordionExample">
                                <li><a href="/#"> Bulk IMEI Fetch </a></li>
                                <li><a href="/#"> All Records </a></li> 
                                <li><a href="/#"> LI Records </a></li> 
                                <li><a href="/#"> TL Records </a></li> 
                                <li><a href="/#"> Add New All India SDR  </a></li> 
                                <li><a href="/#"> All Request </a></li> 
                                <li><a href="/#"> Update HSPA </a></li> 
                                <li><a href="/#"> Form Setup </a></li> 
                                <li><a href="/#"> Special Operation </a></li> 
                                <li><a href="/#"> All Request </a></li> 
                                <li><a href="/#"> Upload CDR </a></li>                         
                                <li><a href="/#"> Update Memo </a></li>
                                <li><a href="/#"> Retention Form </a></li>
                                <li><a href="/#"> Nodal Designated List </a></li>
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="#report" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-flag text-info"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                    <span>Reports</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                            <ul className="collapse submenu list-unstyled" id="report" data-parent="#accordionExample">
                                <li><a href="/#"> Monthly Report </a></li>
                                <li><a href="/#"> Section Report </a></li> 
                                <li><a href="/#"> Divison Provider Report </a></li> 
                                <li><a href="/#"> Consolidated Provider Report </a></li> 
                                <li><a href="/#"> E-Register Report  </a></li> 
                                <li><a href="/#"> Partially Replied Report</a></li> 
                                <li><a href="/#"> Request Send to Provider </a></li> 
                                <li><a href="/#"> Other State HSPA Report </a></li> 
                                <li><a href="/#"> Regularization Report </a></li> 
                                <li><a href="/#"> Activation Report </a></li> 
                                <li><a href="/#"> Reconciliation Report </a></li>                         
                                <li><a href="/#"> Delivery Report </a></li>
                                <li><a href="/#"> Destruction List I </a></li>
                                <li><a href="/#"> Destruction List II </a></li>
                                <li><a href="/#"> Destruction Report III </a></li>
                                <li><a href="/#"> CDR Report </a></li>
                                <li><a href="/#"> Consolidated Report </a></li>
                                <li><a href="/#"> Evaluation Report </a></li>
                                <li><a href="/#"> BlackList Report </a></li>
                                <li><a href="/#"> Clint Node Report </a></li>
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="#analytics" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers text-success"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                    <span>Analytics</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                            <ul className="collapse submenu list-unstyled" id="analytics" data-parent="#accordionExample">
                                <li><a href="/#"> LI Request Analytics </a></li>
                                <li><a href="/#"> Pending Requests Report  </a></li>                           
                                <li><a href="/#"> Other Request Analytics </a></li>
                                <li><a href="/#"> LI Status Report </a></li>
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="#" aria-expanded="false" className="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail text-warning"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    <span>SMS</span>
                                </div>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        
        )
}

export default Sidebar;