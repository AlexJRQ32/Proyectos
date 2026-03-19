import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import NavbarLeft from './components/Navbar-left'
import Orders from './pages/Orders'
import Finances from './pages/Finances'
import Analytics from './pages/Analytics'
import Inventory from './pages/Inventory'
import Schedule from './pages/Schedule'
import Home from './pages/Home'
import { MobileSidebar } from './components/Navbar'



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
            <Route path='/' element={<Home />} />
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
