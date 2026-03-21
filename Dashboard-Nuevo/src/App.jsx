import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import NavbarLeft from './components/Sidebar/Sidebar'
import Orders from './pages/Orders/Orders'
import Finances from './pages/Finances/Finances'
import Analytics from './pages/Analytics/Analytics'
import Inventory from './pages/Inventory/Inventory'
import Schedule from './pages/Schedule/Schedule'
import Home from './pages/Home/Home'



function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className='container'>
      <Navbar isOpen={isNavbarOpen} onToggleMenu={toggleNavbar} />

      <main>
        <NavbarLeft />
        <section className="container-main">
          <Routes>
            <Route path='/' element={<Navigate to='/home' replace />} />
            <Route path='/home' element={<Home />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/finances' element={<Finances />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/schedule' element={<Schedule />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default App
