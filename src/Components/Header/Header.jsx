import React from 'react';
import "./Header.css"

const Header = () => {
    return(
        <header className="fixed-top">
            <div className="texto-header">
                <a href=""><i className="bi bi-slack icn-header"></i><strong>PORTFOLIO.WEB</strong></a>
            </div>
            
            <nav className="nav-header">
                <a href="#home"><strong>Home</strong></a>
                <a href="#experiencia"><strong>Mi experiencia</strong></a>
                <a href="#sobre-mi"><strong>Sobre Mí</strong></a>
                <a href="#portfolio"><strong>Portfolio</strong></a>
                <a href="#testimonios"><strong>Testimonios</strong></a>
            </nav>
            
            <div>
                <div className="frame">
                    <a href="#contacto"><button className="custom-btn-nav btn-7 btn-nav"><span><strong>Contáctame</strong></span></button></a>
                </div>

                {/*Nav Responsive*/}
                <nav className="navbar navbar-expand-lg fixed-top nav-responsive">
                    <div className="container-fluid">
                        <div className="texto-header-responsive">
                            <a href=""><i className="bi bi-slack icn-header-responsive"></i><strong>PORTFOLIO.WEB</strong></a>
                        </div>
                      <button className="navbar-toggler btn-responsive" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#home"><strong>Home</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#experiencia"><strong>Mi experiencia</strong>  </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#sobre-mi"><strong>Sobre Mí</strong>  </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#portfolio"><strong>Portfolio</strong> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#testimonios"><strong>Testimonios</strong> </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
           
            

        </header>
    )
}

export { Header }