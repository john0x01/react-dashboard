import { FaBars, FaClock, FaSearch } from 'react-icons/fa'

import './Navbar.css'

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav-icon" onClick={() => openSidebar()}>
                <FaBars aria-hidden="true" />
            </div>

            <div className="navbar-left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active-link">Admin</a>
            </div>

            <div className="navbar-right">
                <a href="#">
                    <FaSearch />
                </a>

                <a href="#">
                    <FaClock />
                </a>

                <a href="#">
                    <img width="30" src="" alt="avatar" />
                </a>
            </div>
        </nav>
        
    )
}

export default Navbar