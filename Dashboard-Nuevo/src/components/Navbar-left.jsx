import './Navbar-left.css';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { to: '/', icon: 'fa-solid fa-house', label: 'Home' },
    { to: '/orders', icon: 'fa-solid fa-cart-shopping', label: 'Orders' },
    { to: '/finances', icon: 'fa-solid fa-money-bill-trend-up', label: 'Finances' },
    { to: '/analytics', icon: 'fa-solid fa-chart-line', label: 'Analitycs' },
    { to: '/inventory', icon: 'fa-solid fa-boxes-stacked', label: 'Inventory' },
    { to: '/schedule', icon: 'fa-solid fa-calendar-days', label: 'Schedule' },
    { to: '/settings', icon: 'fa-solid fa-gear', label: 'Settings' }
];

function NavbarLeft(){
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return(
        <nav className="nav-left">
            <ul>
                {navLinks.map((link) => (
                    <li key={link.to} className={isActive(link.to) ? 'active' : ''}>
                        <Link to={link.to}>
                            <i className={link.icon}></i>
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <section className='usuario'>
                <div className="usuario-info">
                    <strong>Username</strong>
                    <p>Admin</p>
                </div>
                <a href="">
                    <i className='fa-solid fa-right-from-bracket'></i>
                    <span>Logout</span>
                </a>
            </section>
        </nav>
    )
}

export default NavbarLeft;