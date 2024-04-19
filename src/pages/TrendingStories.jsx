import React from "react"
import logo from "../assets/Rectangle1.png"
import { formatDateTime, getSubString } from "../services/helpers"

export const Trending  = ({props}) => {
  return(
  <>
  
    <div className="container">
        <div className="row justify-content-center">
            {
                props?.data[0] ? 
            <div className="col-sm-12 col-10 col-lg-8 ">

                <h4>Trending Stories</h4>
                
                {/* Trending */}
                <div className="row ">
                    {
                        props?.data[0] &&
                        <div className="col-sm-11 col-md-9 col-lg-8">
                            <div className="card border-0">
                                <div className="card-body">
                                    <img src= {props?.data[0]?.media} alt="Logo" style={{width:"100%"}} />
                                <div className="card-footer px-1 border-0">
                                    <small className="btn btn-sm btn-secondary">
                                        {props?.data[0]?.category}
                                    </small>
                                    <article>
                                        <h6>
                                            {props?.data[0]?.title}
                                        </h6>
                                        <p>
                                            {getSubString(props?.data[0]?.body,20)}
                                        </p>

                                    </article>
                                    <div className="d-flex justify-content-between px-1">
                                        <small>
                                            {formatDateTime( props?.data[0]?.created_on)}
                                        </small>
                                        <small>
                                            <a href={`/post/details/${props?.data[0]?.id}`}>Read More </a>
                                        </small>
                                    </div>
                                </div>
                                </div>
                            </div>
                        
                        </div>
                    }

                    {
                        props?.data[1] &&
                        <div className="col-sm-11 col-md-9 col-lg-4">
                            <div className="card border-0">
                                <div className="card-body pb-1">
                                            <img src= {props?.data[1]?.media} alt="Logo" style={{width:"100%"}} />
                                        <div className="card-footer px-1 border-0">
                                            <small className="btn btn-sm btn-secondary">
                                                {props?.data[1]?.category}
                                            </small>
                                            <article>
                                                <h6>
                                                    {getSubString(props?.data[1]?.title,10)}
                                                </h6>

                                            </article>
                                            <div className="d-flex justify-content-between px-1">
                                                <small>
                                                    {formatDateTime( props?.data[1]?.created_on)}
                                                </small>
                                                
                                            </div>
                                        </div>
                                </div>
                            </div>
                            {
                                props?.data[2] &&
                                <div className="card border-0" style={{marginTop:"-2rem"}}>
                                    <div className="card-body">
                                                <img src= {props?.data[2]?.media} alt="Logo" style={{width:"100%"}} />
                                            <div className="card-footer px-1 border-0">
                                                <small className="btn btn-sm btn-secondary">
                                                    {props?.data[2]?.category}
                                                </small>
                                                <article>
                                                    <h6>
                                                        {getSubString(props?.data[2]?.title,10)}
                                                    </h6>

                                                </article>
                                                <div className="d-flex justify-content-between px-1">
                                                    <small>
                                                        {formatDateTime( props?.data[2]?.created_on)}
                                                    </small>
                                                    
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            }
                        </div>
                    }

                </div>


                {/* The three cards */}
                {
                    props?.data[3] && 
                    <div className="row ">
                        <div className="col-sm-11 col-md-9 col-lg-4">
                            <div className="card border-0">
                                <div className="card-body">
                                    <img src= {props?.data[3]?.media} alt="Logo" style={{width:"100%"}} />
                                <div className="card-footer px-1 border-0">
                                    <small className="btn btn-sm btn-secondary">
                                        {props?.data[3]?.category}
                                    </small>
                                    <article>
                                        <h6>
                                            {getSubString( props?.data[3]?.title,15)}
                                        </h6>
                                        <p>
                                            {getSubString(props?.data[3]?.body,20)}
                                        </p>

                                    </article>
                                    <div className="d-flex justify-content-between px-1">
                                        <small>
                                            {formatDateTime( props?.data[3]?.created_on)}
                                        </small>
                                        <small>
                                            <a href={`/post/details/${props?.data[3]?.id}`}>Read More </a>
                                        </small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        {
                            props?.data[4] && 
                            <div className="col-sm-11 col-md-9 col-lg-4">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <img src= {props?.data[4]?.category} alt="Logo" style={{width:"100%"}} />
                                    <div className="card-footer px-1 border-0">
                                        <small className="btn btn-sm btn-secondary">
                                            {props?.data[4]?.category}
                                        </small>
                                        <article>
                                            <h6>
                                                {getSubString( props?.data[4]?.title,15)}
                                            </h6>
                                            <p>
                                                {getSubString(props?.data[4]?.body,20)}
                                            </p>

                                        </article>
                                        <div className="d-flex justify-content-between px-1">
                                            <small>
                                                {formatDateTime( props?.data[4]?.created_on)}
                                            </small>
                                            <small>
                                                <a href={`/post/details/${props?.data[4]?.id}`}>Read More </a>
                                            </small>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            
                            </div>
                        }
                        {
                            props?.data[5] &&
                        <div className="col-sm-11 col-md-9 col-lg-4">
                            <div className="card border-0">
                                <div className="card-body">
                                    <img src= {props?.data[5]?.media} alt="Logo" style={{width:"100%"}} />
                                <div className="card-footer px-1 border-0">
                                    <small className="btn btn-sm btn-secondary">
                                        {props?.data[5]?.category}
                                    </small>
                                    <article>
                                        <h6>
                                            {getSubString( props?.data[5]?.title,15)}
                                        </h6>
                                        <p>
                                            {getSubString(props?.data[5]?.body,20)}
                                        </p>

                                    </article>
                                    <div className="d-flex justify-content-between px-1">
                                        <small>
                                            {formatDateTime( props?.data[5]?.created_on)}
                                        </small>
                                        <small>
                                            <a href={`/post/details/${props?.data[5]?.id}`}>Read More </a>
                                        </small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        }
                    </div>
                }

              

                {/* Load more */}

                {
                    props?.data[0] &&

                    <div className="row justify-content-center mb-5">
                        <div className="col-2">
                        <button className="btn btn-sm btn-secondary">
                            Load More
                        </button>
                        </div>
                    </div>
                }

                {/* Latest */}
                {
                    props?.data[5] &&
                    <div className="row ">
                        <div className="col-sm-11 col-md-9 col-lg-6">
                            <div className="card border-0">
                                <div className="card-body">
                                    <img src= {props?.data[5]?.media} alt="Logo" style={{width:"100%"}} />
                                <div className="card-footer px-1 border-0">
                                    <small className="btn btn-sm btn-secondary">
                                        {props?.data[5]?.category}
                                    </small>
                                    <article>
                                        <h6>
                                            {props?.data[5]?.title}
                                        </h6>
                                        <p>
                                            {getSubString(props?.data[5]?.body,20)}
                                        </p>

                                    </article>
                                    <div className="d-flex justify-content-between px-1">
                                        <small>
                                            {formatDateTime( props?.data[5]?.created_on)}
                                        </small>
                                        <small>
                                            <a href={`/post/details/${props?.data[5]?.id}`}>Read More </a>
                                        </small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* <img src= {props?.data[0]?.media} alt="Logo" /> */}
                        </div>
                        {
                            props?.data[6] &&

                            <div className="col-sm-11 col-md-9 col-lg-6">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <img src= {props?.data[6]?.media} alt="Logo" style={{width:"100%"}} />
                                    <div className="card-footer px-1 border-0">
                                        <small className="btn btn-sm btn-secondary">
                                            {props?.data[6]?.category}
                                        </small>
                                        <article>
                                            <h6>
                                                {props?.data[6]?.title}
                                            </h6>
                                            <p>
                                                {getSubString(props?.data[6]?.body,20)}
                                            </p>

                                        </article>
                                        <div className="d-flex justify-content-between px-1">
                                            <small>
                                                {formatDateTime( props?.data[6]?.created_on)}
                                            </small>
                                            <small>
                                                <a href={`/post/details/${props?.data[6]?.id}`}>Read More </a>
                                            </small>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                            </div> 
                        }
                    </div>
                }

                {/* Load more */}
                {
                    props?.data[6] &&
                    <div className="row justify-content-center mb-5">
                        <div className="col-2">
                        <button className="btn btn-sm btn-secondary">
                            Load More
                        </button>
                        </div>
                    </div>
                }

            </div>
              
              :
             <div className="col-12">
                 <p>No Post. Please create post</p>
             </div>
            }
        </div>

    </div>

  </>

  )
}