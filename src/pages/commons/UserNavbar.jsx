import React from "react"
import logo from '../../assets/logo/image1.jpg'
import auth from "../../services/auth/authService"
import {  useSelector } from "react-redux";


export const UserNavbar  = () => {
    const user = auth.getCurrentUser()
    const userData = useSelector(state => state.login.data); // Accessing data from the login slice
    return (
        <nav className="navbar navbar-expand-lg bg-body-white">
            <div className="container-fluid">
            <a className="navbar-brand mx-auto" href ="/">
                <div className="row justify-content-center">
                        <div className="col-3">
                            <img src={logo} alt="logo" className="logo"/>
                        </div>
                        <div className="col-7">
                            <h3 className="logo-nav-text-1">Standardlife</h3>
                            <p className="logo-nav-text-2">organization</p>
                        </div>
                    </div>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center " id="navbarSupportedContent">
                    
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active text-uppercase" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#">about us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#">contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase" href="/create/post">blog</a>
                        </li>
                    </ul>
                   
                   {/* Check if there is logged in user */}
                    {
                    user || userData ?
                    <ul className="navbar-nav ms-auto " role="search">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {user?.name || userData?.data?.name}
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/logout">Logout</a></li>
                        </ul>
                        </li>
                    </ul>
                    :
                    
                    <ul className="navbar-nav" role="search">
                        <li className="nav-item">
                            <a className="btn btn-default outline-double" aria-current="page" href="/login">Log in</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary" aria-current="page" href="/register">Sign Up</a>
                        </li>
                    </ul>
                    }
                </div>
            </div>
        </nav>
    )
}

