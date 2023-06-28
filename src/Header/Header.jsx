import React from 'react';

const Header = () => {
    return(
        <header>
            
            <div className="texto-header">
                <a href=""><i class="bi bi-slack icn-header"></i><strong>PORTFOLIO.WEB</strong></a>
            </div>
            
            <nav className="nav-header">
                <a href="#home"><strong>Home</strong></a>
                <a href="#experiencia"><strong>Mi experiencia</strong></a>
                <a href="#sobre-mi"><strong>Sobre Mí</strong></a>
                <a href="#portfolio"><strong>Portfolio</strong></a>
                <a href="#testimonios"><strong>Testimonios</strong></a>
            </nav>

            <div>
                <button className="btn-nav"><a href="#contacto"><strong>Contáctame</strong></a></button>
            </div>
            

        </header>
    )
}

export { Header }