import { 
    FaMinusSquare, FaBuilding, FaMale,
    FaUserCircle, FaPowerOff, FaBars,
    FaTimes
} from 'react-icons/fa'
import { BiTachometer } from 'react-icons/bi'

import './Sidebar.css'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-img">
                    <img src="" alt="logo" />
                    <h1>React Dashboard</h1>
                </div>
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-link active-menu-link">
                    <FaMinusSquare />
                    <a href="#">Home</a>
                </div>
                <h2>Admin</h2>
                <div className="sidebar-link">
                    <BiTachometer />
                    <a href="#">Área administrativa</a>
                </div>
                <div className="sidebar-link">
                    <FaBuilding />
                    <a href="#">Lojas</a>
                </div>
                <div className="sidebar-link">
                    <BiTachometer />
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebar-link">
                    <BiTachometer />
                    <a href="#">Pedidos</a>
                </div>

                <h2>Pessoas</h2>
                <div className="sidebar-link">
                    <FaUserCircle />
                    <a href="#">Funcionários</a>
                </div>
                <div className="sidebar-link">
                    <FaMale />
                    <a href="#">Pagamentos e custos</a>
                </div>
                <div className="sidebar-logout">
                    <FaPowerOff />
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar