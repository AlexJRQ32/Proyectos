import './Navbar.css';

function Navbar(){
    return(
        <nav className="nav-top">
            <h2>StreamTech Solutions - Dashboard</h2>
            <ul>
                <li>
                    <a href="#">
                        <i className="fa-solid fa-house"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-solid fa-users"></i>
                        <span>About Us</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-solid fa-shield-halved"></i>
                        <span>Privacy</span>
                    </a>
                </li>
                <li className="login">
                    <a href="#">
                        <i className='fa-solid fa-user'></i>
                        <span>Login</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;