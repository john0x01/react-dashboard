import './Sidebar.css'
import { 
    FaMinusSquare, FaBuilding, FaMale,
    FaUserCircle, FaPowerOff, FaBars,
    FaTimes
} from 'react-icons/fa'
import {
    BiTachometer
} from 'react-icons/bi'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-img">
                    <img src="" alt="logo" />
                    <h1>Painel de vendas</h1>
                </div>

                <a onClick={() => closeSidebar()}
                id='sidebarIcon'
                aria-hidden="true"
                >
                    <FaTimes />
                </a>
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
                    <FaBars />
                    <a href="#">Categorias</a>
                </div>
                <div className="sidebar-link">
                    <BiTachometer />
                    <a href="#">Pedidos</a>
                </div>

                <h2>Pessoas</h2>
                <div className="sidebar-link">
                    <FaMale />
                    <a href="#">Administradores</a>
                </div>
                <div className="sidebar-link">
                    <FaUserCircle />
                    <a href="#">Usuários</a>
                </div>
                <div className="sidebar-link">
                    <FaMale />
                    <a href="#">Pagamentos e custos</a>
                </div>
                <div className="sidebar-link">
                    <FaMale />
                    <a href="#">A plataforma</a>
                </div>
                <div className="sidebar-link">
                    <FaMale />
                    <a href="#">Política de privacidade</a>
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