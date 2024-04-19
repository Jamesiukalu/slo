import React, {useEffect,useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { formatDateTime } from "../../services/helpers";
import {getUserDataAction} from "../../redux/actions/users/userDataActions";
import { ScreenLoader } from "../commons/ScreenLoader";

export const Users = () => {

 const dispatch = useDispatch();

 const loading = useSelector(state => state.user_data.loading);
 const userData = useSelector(state => state.user_data.data);

  useEffect(() => {
     dispatch(getUserDataAction({}))
  }, []);
  

  return (
        <>
         <ScreenLoader status={loading}/>
          <div className="posts-wrapper">
            <div className="container p-4">
               <div className="d-flex justify-content-between mb-2">
                 <h5>Blog Post</h5>
                 <a href="/create/users" className="btn btn-sm btn-primary">+Add New Users</a>
               </div>
            <div className="table-responsive">
            <table className="table">
                <thead>
                  <tr className="">
                    <th scope="col" className="text-start">Name</th>
                    <th scope="col" className="text-center">Role</th>
                    <th scope="col" className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    userData ?  
                    userData?.data?.map((data) => (
                    <tr key={data?.email} className="text-">
                      <td className="text-start" >{data?.name}</td>
                      <td className="text-center">{data?.user_type}</td>
                      <td className="text-end">
                        <a href = {`user/edit/${data?.id}`}  className="btn btn-sm btn-primary me-4">
                          Edit
                        </a>
                      </td>
                    </tr>
                    
                    ))
                      
                    :
                    <tr>
                      <td>No Data</td>
                    </tr>
                  }
                  
                </tbody>
              </table>
            </div>
            </div>

          </div>
        </>

   )
}
