import React from "react"


export const AdminHeader  = () => {

    return (
        <>
        <hr />
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
        </>
    )
}



