import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../redux/actions/users/updateUserAction";
import { getUserDetailAction } from "../../redux/actions/users/singleUserActions";
import { ScreenLoader } from "../commons/ScreenLoader";
import { useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


export const EditUser = () => {

 const dispatch = useDispatch();
 const error = useSelector(state => state.user_update.error);
 const statusCode = useSelector(state => state.user_details.statusCode);
 const updateStatusCode = useSelector(state => state.user_update.updateStatusCode);
 const loading = useSelector(state => state.user_update.loading);
 const userData = useSelector(state => state.user_details.data);
 const navigation = useNavigate()
 const {id} = useParams()

const [formData, setFormData] = useState({
    name: "",
    email: "",
    user_type: 'Admin'
  });

  
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  
    const updateUser = async (e) => {
      e.preventDefault();
      dispatch(updateUserAction({data:{...formData},id}));
  };

  const navigateToNextPage = () => {
    if(updateStatusCode >= 200 && updateStatusCode <=299){
      toast.success("Users updated successfull", {autoClose:300})
      navigation('/users')
    }
  }
  

  
  
  useEffect(() => {
    if (!userData) {
      dispatch(getUserDetailAction(id));
    } else {
      setFormData({
        name: userData.data.name || "",
        email: userData.data.email || "",
        user_type:'Admin'
      });
    }
    navigateToNextPage()
  }, [userData, dispatch, id, statusCode, updateStatusCode]);

  return (
    <div>
      <ScreenLoader status={loading} />
      <div className="row justify-content-center">

        <div className="col-sm-8 col-md-6 col-lg-4">
           <div className="card border-0">
            <div className="card-body">
            <form onSubmit={updateUser}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Fullname</label>
                <input 
                 type="text" 
                 name="name" 
                 className="form-control"
                 id="fullname" 
                  placeholder="John Doe"
                  value={formData.name}
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
                
                {
                  error && <div className="alert alert-danger mb-2">{error?.message}</div>
                }
              <button  className="form-control btn btn-primary">Update</button>
              </div>
            </form>

            </div>
           </div>
        </div>
      </div>
    </div>

 )
}
