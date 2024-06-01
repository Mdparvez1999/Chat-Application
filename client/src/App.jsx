import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { useAuthContext } from './context/AuthContext'

function App() {

  const { currentUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center  justify-center'>
      <Routes>
        <Route path='/' element={currentUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
