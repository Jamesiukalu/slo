import { Home } from './pages/Home'
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import { AdminLogin } from './pages/AdminLogin'
import { Navbar } from './pages/Navbar'
import { Footer } from './pages/Footer'
import { Register } from './pages/Register'
import { CreatePost } from './pages/Posts/CreatePost'
import { VerifyEmail } from './pages/VerifyEmail'
import Logout from './pages/commons/Logout'
import { Posts } from './pages/Posts/Posts'
import { ToastContainer } from 'react-toastify'
import { EditPost } from './pages/Posts/EditPost'
import { SinglePost } from './pages/Posts/SinglePost'
import { CreateUsers } from './pages/UserManagement/CreateUsers'
import { Users } from './pages/UserManagement/Users'
import { EditUser } from './pages/UserManagement/EditUsers'
import { SendForgotPasswordEmail } from './pages/SendForgotPasswordEmail'
import { ResetPassword } from './pages/ResetPassword'

function App() {
  
  return (
      <>
      <Navbar/>
        <Router>
        <ToastContainer />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<AdminLogin/>} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='/create/post' element={<CreatePost/>} />
            <Route path='/create/users' element={<CreateUsers/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/user/edit/:id' element={<EditUser/>} />
            <Route path='/post/edit/:id' element={<EditPost/>} />
            <Route path='/post/details/:id' element={<SinglePost/>} />
            <Route path='/blogs' element={<Posts/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/verify/email-otp' element={<VerifyEmail/>} />
            <Route path='/forgot-password' element={<SendForgotPasswordEmail/>} />
            <Route path='/reset-password' element={<ResetPassword/>} />
          </Routes>
        </Router>
        <Footer/>
      </>
  )
}

export default App
