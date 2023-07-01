import React from 'react';
import "./Header.css"

const Header = () => {
    return(
        <header>
            <div class="texto-header">
                <a href=""><i class="bi bi-slack icn-header"></i><strong>PORTFOLIO.WEB</strong></a>
            </div>
            
            <nav class="nav-header">
                <a href="#home"><strong>Home</strong></a>
                <a href="#experiencia"><strong>Mi experiencia</strong></a>
                <a href="#sobre-mi"><strong>Sobre Mí</strong></a>
                <a href="#portfolio"><strong>Portfolio</strong></a>
                <a href="#testimonios"><strong>Testimonios</strong></a>
            </nav>

            <div>

                <button class="btn-nav"><a href="#contacto"><strong>Contáctame</strong></a></button> 

                {/*Nav Responsive*/}
                <nav class="navbar navbar-expand-lg fixed-top nav-responsive">
                    <div class="container-fluid">
                        <div class="texto-header-responsive">
                            <a href=""><i class="bi bi-slack icn-header-responsive"></i><strong>PORTFOLIO.WEB</strong></a>
                        </div>
                      <button class="navbar-toggler btn-responsive" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" href="#home"><strong>Home</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#experiencia"><strong>Mi experiencia</strong>  </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#sobre-mi"><strong>Sobre Mí</strong>  </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#portfolio"><strong>Portfolio</strong> </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#testimonios"><strong>Testimonios</strong> </a>
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