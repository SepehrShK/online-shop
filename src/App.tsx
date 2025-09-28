import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './navbar/Navbar'
import Login from './pages/login/Login'
import { useState } from 'react'
import Home from './pages/home/Home'

function App() {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <>
      <AuthProvider>
        <Navbar searchProduct={searchProduct} setSearchProduct={setSearchProduct} />
        <Routes>
          <Route path="/" element={<Home searchProduct={searchProduct}/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
