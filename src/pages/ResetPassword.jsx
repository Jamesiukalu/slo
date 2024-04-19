import React, {useState} from "react"
import { useDispatch,useSelector } from "react-redux";
import { updatePasswordAction } from "../redux/actions/auth/updatePasswordAction";
import { useNavigate,Navigate } from 'react-router-dom';
import auth from "../services/auth/authService";
import { ScreenLoader } from "./commons/ScreenLoader";


export const ResetPassword = () => {
 const dispatch = useDispatch();
 const navigation = useNavigate()
 const error = useSelector(state => state.update_password.error);
 const statusCode = useSelector(state => state.update_password.statusCode);
 const loading = useSelector(state => state.update_password.loading);


 const [formData, setFormData] = useState({
    token: '',
    password: '',
    password_confirmation:''
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
    if(formData.password !== formData.password_confirmation){
      setInvalidPassord(true)
      setInvalidPassordError("Password and conform passwrod must match")
    }else{
      setInvalidPassord(false)
      setInvalidPassordError("")
      await dispatch(updatePasswordAction({ ...formData }));
      
      if(statusCode >= 200 && statusCode <=299){
          console.log(statusCode)
          navigation('/login')
        }
      }
  };

  if (auth.getCurrentUser()) { return <Navigate to='/' /> }

  return (
      <div>
        <ScreenLoader status={loading} />
        <div className="row justify-content-center">

          <div className="col-sm-8 col-md-6 col-lg-4">
             <div className="card border-0">
              <div className="card-body">
              <div>
                   
                   <div className="row justify-content-center">
                      <div className="col">
                       <h3 className="text-center">
                         Reset Password
                      </h3>
                      </div>
                     
                   </div>
              </div>

              <form onSubmit={register}>
                <div className="mb-3">
                  <label htmlFor="token" className="form-label">token</label>
                  <input 
                   type="text" 
                   name="token" 
                   className="form-control"
                   id="token" 
                    placeholder="89894"
                    value={formData.token}
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
                  <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                  <input 
                  type="password" 
                  className="form-control" 
                  id="password_confirmation" 
                  placeholder="*********"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  {
                    invalidPassord && <div className="alert alert-danger mb-2">{invalidPassordError}</div>
                  }
                  {
                    error && <div className="alert alert-danger mb-2">{error?.message}</div>
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
