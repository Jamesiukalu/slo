import React,{useState} from "react"
import { useDispatch } from "react-redux";
import logo from   "../assets/logo/image1.jpg"
import {loginAction} from "../redux/actions/auth/loginAction";

export const AdminLogin = () => {
  const dispatch = useDispatch();
 const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

    const login = async (e) => {
      e.preventDefault();
      await dispatch(loginAction({ ...formData }));
  };

   return (
      <div>
        <div className="row justify-content-center">

          <div className="col-sm-8 col-md-6 col-lg-4">
             <div className="card border-0">
              <div className="card-body">
              <div>
                   <div className="row justify-content-center">
                      <div className="col-3">
                        <img src={logo} alt="" style={{width:'80px'}}/>
                      </div>
                      <div className="col-7">
                        <h3 className="logo-text-1">Standardlife</h3>
                        <h6 className="logo-text-2">organization</h6>
                      </div>
                   </div>
                   <div className="row justify-content-center mt-3">
                      <div className="col-6">
                        <h3 className="login-text text-center">Login</h3>
                        <h6 className="logo-text-3">Welcome back 👋</h6>
                      </div>
                     
                   </div>
              </div>

              <form onSubmit={login}>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                 type="email" 
                 value={formData.email} 
                 className="form-control" 
                 id="email"
                 name="email"
                 placeholder="name@example.com"
                 onChange={handleInputChange}
                 />
                </div>

                <div className="mb-3">
                <label htmlFor="passowrd" className="form-label">Example textarea</label>
                <input 
                 type="password" 
                 onChange={handleInputChange} 
                 name="password"
                 value={formData.password} 
                 className="form-control" id="passowrd" 
                 placeholder="*********"
                 />
                </div>
                <div className="mb-3">
                <button  className="form-control btn btn-primary">Login</button>
                </div>
              </form>

              </div>
             </div>
          </div>
        </div>
      </div>

   )
}
