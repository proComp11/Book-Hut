import React from "react";
import {Route, Router,Routes,Link} from 'react-router-dom';
function Maincontain(){
    return(
        <div id="content" className="main-content">
            <div className="container-fluid">
                <div className="page-header">
                    <div className="page-title">
                        Book Hut - Dashboard
                    </div>
                </div>
                <div className="text-center">
                    <h3>Book</h3>
                </div>
                <div class="row justify-content-center">
                    <div class="col-sm-2">
                        <div class="card bg-success">
                            <Link to="/bookEntry" style={{ textDecoration: 'none' }}>
                                <div class="card-body">
                                    <div className="text-center">
                                        <img src="assets/image/book.png" alt="book" className="rounded" align="center" height="50px" width="50px" />
                                        <h5 class="card-title">New Book Entry</h5>
                                    </div> 
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                        <div class="card-body bg-secondary">
                            <div className="text-center">
                                <img src="assets/image/definition.png" alt="managebook" className="rounded" align="center" height="50px" width="50px" />
                                <h5 class="card-title">Manage Books Entry</h5>
                            </div> 
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                        <div class="card-body bg-warning">
                            <div className="text-center">
                                <img src="assets/image/book-stack.png" alt="stock" className="rounded" align="center" height="50px" width="50px" />
                                <h5 class="card-title">Manage Book Stock</h5>
                            </div> 
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="container-fluid mt-5">
                <div className="page-header">
                    <div className="text-center">
                        <h3>Users</h3>
                    </div>
                </div>
                
                <div class="row justify-content-center">
                    <div class="col-sm-2">
                        <div class="card">
                        <div class="card-body bg-warning">
                            <div className="text-center">
                                <img src="assets/image/group.png" alt="group" className="rounded" align="center" height="50px" width="50px" />
                                <h5 class="card-title">All Registerd Users</h5>
                            </div> 
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                        <div class="card-body bg-info">
                            <div className="text-center">
                                <img src="assets/image/new.png" alt="new" className="rounded" align="center" height="50px" width="50px" />
                                <h5 class="card-title">User Operation</h5>
                            </div> 
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                        <div class="card">
                        <div class="card-body bg-success">
                            <div className="text-center">
                                <img src="assets/image/blacklist.png" alt="blacklist" className="rounded" align="center" height="50px" width="50px" />
                                <h5 class="card-title">Blacklist Users</h5>
                            </div> 
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="container-fluid mt-5">
                <div className="page-header">
                    <div className="text-center">
                        <h3>Orders</h3>
                    </div>
                </div>
                
                <div class="row justify-content-center">
                    <div class="col-sm-2">
                        <div class="card">
                        <div class="card-body bg-info">
                            <div className="text-center">
                                <img src="assets/image/order.png" alt="order" className="rounded" align="center" height="50px" width="50px" />
                                <h5 class="card-title">All Orders</h5>
                            </div> 
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                        <div class="card-body bg-warning">
                            <div className="text-center">
                                <img src="assets/image/list.png" alt="list.png" className="rounded" align="center" height="50px" width="50px" />
                                <h5 class="card-title">Manage Orders</h5>
                            </div> 
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                        <div class="card">
                        <div class="card-body bg-primary">
                            <div className="text-center">
                                <img src="assets/image/received.png" alt="received" className="rounded" align="center" height="50px" width="50px" />
                                <h5 class="card-title">Today's Order</h5>
                            </div> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontain;