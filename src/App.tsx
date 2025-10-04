import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './navbar/Navbar'
import Login from './pages/login/Login'
import { useState } from 'react'
import Home from './pages/home/Home'
import ShopCart from './pages/shopCart/ShopCart'
import { DataProvider } from './context/dataContext/DataContext'
import { ShopCartProvider } from './context/shopCartContext/ShopCartContext'

function App() {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <>
      <DataProvider>
        <ShopCartProvider>
          <AuthProvider>
            <Navbar searchProduct={searchProduct} setSearchProduct={setSearchProduct} />
            <Routes>
              <Route path="/" element={<Home searchProduct={searchProduct}/>} />
              <Route path="/ShopCart" element={<ShopCart/>} />
              <Route path="/Login" element={<Login/>} />
            </Routes>
          </AuthProvider>
        </ShopCartProvider>
      </DataProvider>
    </>
  )
}

export default App
