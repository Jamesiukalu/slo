import React, {useState} from "react"
import { useDispatch } from "react-redux";
import { registerAction } from "../redux/actions/auth/registerAction";

export const Register = () => {
 const dispatch = useDispatch();
 const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname:'',
    confirm_password:''
  })
  const [invalidPassord, setInvalidPassord] = useState(false)
  const [invalidPassordError, setInvalidPassordError] = useState('')

  const handleInputChange = (e) => {
   setInvalidPassord(false)
   setInvalidPassordError('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  
    const register = async (e) => {
      e.preventDefault();
      if(formData.password !== formData.confirm_password){
        setInvalidPassord(true)
        setInvalidPassordError("Password and conform passwrod must match")
      }else{
        setInvalidPassord(false)
        setInvalidPassordError("")
        await dispatch(registerAction({ ...formData }));
      }
  };

   return (
      <div>
        <div className="row justify-content-center">

          <div className="col-sm-8 col-md-6 col-lg-4">
             <div className="card border-0">
              <div className="card-body">
              <div>
                   
                   <div className="row justify-content-center">
                      <div className="col">
                       <h3 className="text-center">
                        Sign In
                      </h3>
                      <p className="text-center text-muted">
                        Fill in your credentials below to get started 😎
                      </p>
                      </div>
                     
                   </div>
              </div>

              <form onSubmit={register}>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">Fullname</label>
                  <input 
                   type="text" 
                   name="fullname" 
                   className="form-control"
                   id="fullname" 
                    placeholder="John Doe"
                    value={formData.fullname}
                    onChange={handleInputChange}
                   />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="johndoe@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="*********"
                   value={formData.password}
                   onChange={handleInputChange}
                   name="password"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                  <input 
                  type="password" 
                  className="form-control" 
                  id="confirm_password" 
                  placeholder="*********"
                  name="confirm_password"
                  value={formData.value}
                  onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  {
                    invalidPassord && <div className="alert alert-danger mb-2">{invalidPassordError}</div>
                  }
                <button  className="form-control btn btn-primary">Rgister</button>
                </div>
              </form>

              </div>
             </div>
          </div>
        </div>
      </div>

   )
}
