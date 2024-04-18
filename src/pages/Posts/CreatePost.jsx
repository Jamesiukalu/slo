import React, {useState} from "react"
import { useDispatch } from "react-redux";
import { createPostAction } from "../../redux/actions/posts/postActions";

export const CreatePost = () => {
 const dispatch = useDispatch();
 const [formData, setFormData] = useState({
    title: '',
    body: '',
    media:'',
  })
  
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
      await dispatch(createPostAction({ ...formData }));
  };

   return (
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-8 col-lg-6">
             <div className="card border-0">
              <div className="card-body">
              <form onSubmit={register}>
              <div>
                   
                   <div className="row ">
                      <div className="col d-flex justify-content-between">
                       <h3 className="text-s">
                        Create a Post
                      </h3>
                      <button className=" btn btn-primary">
                       Publis Post
                      </button>
                      </div>
                     
                   </div>
              </div>

            
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input 
                   type="text" 
                   name="title" 
                   className="form-control"
                   id="fullname" 
                    placeholder="Investments"
                    value={formData.title}
                    onChange={handleInputChange}
                   />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input 
                   type="file" 
                   name="media" 
                   className="form-control"
                   id="fullname" 
                    value={formData.media}
                    onChange={handleInputChange}
                   />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <textarea 
                   
                  className="form-control" 
                  id="password" 
                  placeholder="Good services"
                   value={formData.content}
                   onChange={handleInputChange}
                   name="body"
                  />
                </div>

              </form>
              </div>
             </div>
          </div>
        </div>

   )
}
