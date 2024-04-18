import { Home } from './pages/Home'
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import { AdminLogin } from './pages/AdminLogin'
import { Navbar } from './pages/Navbar'
import { Footer } from './pages/Footer'
import { Register } from './pages/Register'
import { CreatePost } from './pages/Posts/CreatePost'

function App() {
  
  return (
      <>
      <Navbar/>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<AdminLogin/>} />
            <Route path='/create/post' element={<CreatePost/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        </Router>
        <Footer/>
      </>
  )
}

export default App
