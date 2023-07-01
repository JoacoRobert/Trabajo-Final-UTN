import React from 'react';
import "./Footer.css"

const Footer = () => {
    return(
        <footer>
        <div class="contenedor-footer">
            <div class="texto-footer">
                <a href=""><i class="bi bi-slack icn-footer"></i><strong>PORTFOLIO.WEB</strong></a>
            </div> 
        
            
            <nav class="nav-footer">
                <a href="#home"><strong>Home</strong></a>
                <a href="#experiencia"><strong>Mi experiencia</strong></a>
                <a href="#sobre-mi"><strong>Sobre Mí</strong></a>
                <a href="#portfolio"><strong>Portfolio</strong></a>
                <a href="#testimonios"><strong>Testimonios</strong></a>
            </nav>

            <div class="icono-footer">
                <a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter"></i></a>
                <a href="https://www.linkedin.com/" target="_blank"><i class="bi bi-linkedin"></i></a>
            </div>
        </div>

        <p class="linea-footer"></p>

        <div class="legales-footer">
            <a href="">Políticas de Privacidad</a>
            <a href="">Terminos de Servicios</a>
            <a href="">Configuración de Cookies</a>
        </div>

    </footer>
    )
}

export { Footer }