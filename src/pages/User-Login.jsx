import React from "react"

export const UserLogin  = () => {
   return (
      <div>
        <div className="row justify-content-center">

          <div className="col-sm-8 col-md-6 col-lg-4">
             <div className="card border-0">
              <div className="card-body">
              <div>
                   
                   <div className="row justify-content-center mt-3">
                      <div className="col-6">
                       <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">
                        Sign In
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Fill in your credentials below to get started 😎
                      </p>
                      </div>
                     
                   </div>
              </div>

              <form action="">
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                <label htmlFor="passowrd" className="form-label">Example textarea</label>
                <input type="password" className="form-control" id="passowrd" placeholder="*********"/>
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
