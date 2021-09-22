import React from 'react';
import './navbar.styles.scss';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <span>Grupo LBR Serviços</span>
            </div>
            <div className="navbar__links">
                <a href="/">Home</a>
                <a href="/">Sobre nós</a>
                <a href="/">Serviços</a>
                <a href="/">Cases de Sucesso</a>
                <a href="/">Blog</a>
                <a href="/">Consultoria</a>
                <a href="/">Trabalhe Conosco</a>
                <a href="/">Contato</a>
            </div>
        </div>
    )
}

export default NavBar;