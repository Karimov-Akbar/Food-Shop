import './Sidebar.css'
import avatar from '../../../shared/images/avatar.jpg'
import menu from '../../../shared/icons/menu.svg'
import cart from '../../../shared/icons/cart.svg'
import profile from '../../../shared/icons/profile.svg'
import logout from '../../../shared/icons/logout.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    
    return (
        <>
            <button 
                className='hamburger'
                onClick={() => setIsOpen(!isOpen)}
                >
                ☰
            </button>
            {isOpen && (
                <div
                    className='overlay'
                    onClick={()=>setIsOpen(false)}
                /> 
            )}
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar__content">
                    <div className="sidebar__top">
                        <img src={avatar} className='user__avatar' alt="Avatar" />
                        <h1 className='user__info'>Акбар Каримов</h1>
                        <a className='user__email' href="">akbar@gmail.com</a>
                    </div>
                    <div className="sidebar__links">
                        <button className='sidebar__link' onClick={() => navigate("/")}><img src={menu} alt="Menu" />Каталог</button>
                        <button className='sidebar__link'><img src={cart} alt="Cart" />Корзина</button>
                        <button className='sidebar__link'><img src={profile} alt="Profile" />Профиль</button>
                    </div>
                    <button className='logout'><img src={logout} alt="Logout" />Выйти</button>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;