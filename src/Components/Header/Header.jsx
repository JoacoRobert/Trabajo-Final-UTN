import React from 'react';
import "./Header.css"

const Header = () => {
    return(
        <header>
            
            <div className="texto-header">
                <a href=""><i class="bi bi-slack icn-header"></i><strong>PORTFOLIO.WEB</strong></a>
            </div>
            
            {/*<nav className="nav-header">
                <a href="#home"><strong>Home</strong></a>
                <a href="#experiencia"><strong>Mi experiencia</strong></a>
                <a href="#sobre-mi"><strong>Sobre Mí</strong></a>
                <a href="#portfolio"><strong>Portfolio</strong></a>
                <a href="#testimonios"><strong>Testimonios</strong></a>
            </nav>*/}

            <nav className="navbar navbar-expand-lg bg-body-tertiary nav-header">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="#home"><strong>Home</strong></a>
                        <a className="nav-link active" href="#experiencia"><strong>Mi experiencia</strong></a>
                        <a className="nav-link active" href="#sobre-mi"><strong>Sobre Mí</strong></a>
                        <a className="nav-link active" href="#portfolio"><strong>Portfolio</strong></a>
                        <a className="nav-link active" href="#testimonios"><strong>Testimonios</strong></a>
                    </div>
                    </div>
                </div>
            </nav>

            <div>
                <button className="btn-nav"><a href="#contacto"><strong>Contáctame</strong></a></button>
            </div>
            

        </header>
    )
}

export { Header }