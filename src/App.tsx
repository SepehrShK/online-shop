import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './navbar/Navbar'
import Dashboard from './dashboard/Dashboard'
import Login from './login/Login'

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
