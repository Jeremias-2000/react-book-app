import React from 'react'
import './NavBarStyles.css'
import { Link } from 'react-router-dom'
const NavBar= () => {
    return (
        <div className="navBar">
            <ul>
                <li>Favoritos</li>
                <li>Categorias</li>
                <li>Carrinho</li>
                <li ><Link to="/signin">Login</Link></li>
                <li>Cadastre-se</li>
            </ul>
        </div>
    )
}

export default NavBar
