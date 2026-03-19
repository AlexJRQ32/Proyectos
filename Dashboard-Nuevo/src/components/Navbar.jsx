import './Navbar.css';


// Componente principal Navbar
function Navbar({ isOpen, onToggleMenu }) {
    return (
        <>
            <nav className="nav-top">
                <button className="menu-btn" onClick={onToggleMenu}>
                    {/* Cambia el icono según si está abierto o no */}
                    {isOpen ? '✕' : '☰'}
                </button>
                
                <h2>StreamTech Solutions</h2>

                <ul className="nav-links-desktop">
                    <li><a href="#"><i className="fa-solid fa-house"></i> <span>Home</span></a></li>
                    <li><a href="#"><i className="fa-solid fa-users"></i> <span>About Us</span></a></li>
                    <li><a href="#"><i className="fa-solid fa-shield-halved"></i> <span>Privacy</span></a></li>
                    <li className="login"><a href="#"><i className='fa-solid fa-user'></i> <span>Login</span></a></li>
                </ul>
            </nav>

            {/* Llamamos a la sidebar aquí mismo */}
            <MobileSidebar isOpen={isOpen} />
        </>
    );
}

export function MobileSidebar({ isOpen }) {
    return (
        <aside className={`mobile-sidebar ${isOpen ? 'active' : ''}`}>
            <ul>
                <li><a href="#"><i className="fa-solid fa-house"></i> Home</a></li>
                <li><a href="#"><i className="fa-solid fa-users"></i> About Us</a></li>
                <li><a href="#"><i className="fa-solid fa-shield-halved"></i> Privacy</a></li>
                <li className="login-item"><a href="#"><i className='fa-solid fa-user'></i> Login</a></li>
            </ul>
        </aside>
    );
}

    
export default Navbar;