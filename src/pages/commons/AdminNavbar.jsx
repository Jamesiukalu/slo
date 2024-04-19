import React from "react"
import logo from '../../assets/logo/image1.jpg'
import auth from "../../services/auth/authService"
import {  useSelector } from "react-redux";


export const AdminNavbar  = () => {
    const user = auth.getCurrentUser()
    const userData = useSelector(state => state.login.data); // Accessing data from the login slice
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-white">
            <div className="container-fluid">
                <div className="navbar-brand mx-auto">
                <div className="row justify-content-center">
                    <div className="col-3">
                        <a href="/" className="navbar-brand">
                            <img src={logo} alt="logo" className="logo"/>
                        </a>
                    </div>
                       
                    <div className="col-7 -p-2">
                        <input type="text" placeholder="search" className="form-control bg-muted" />
                    </div> 

                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center " id="navbarSupportedContent">
               
                <ul className="navbar-nav ms-auto " role="search">
                   <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {user?.name || userData?.data?.name}
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/logout">Logout</a></li>
                        {/* <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                    </ul>
                    </li>
                </ul>
               
                </div>
            </div>
            <hr />
        </nav>
        <hr />
          {/* <div className="d-flex justify-content-between"> */}
             <ul className="d-flex justify-content-evenly">
                <li className="nav-item">
                    <a href="/" className="btn-primary btn-sm">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/users" className=" btn-primary btn-sm">User Management</a>
                </li>
                <li className="nav-item">
                    <a href="/blogs" className="  btn-sm btn-primary">Blogs Management</a>
                </li>
             </ul>
          {/* </div> */}
        </>
    )
}
