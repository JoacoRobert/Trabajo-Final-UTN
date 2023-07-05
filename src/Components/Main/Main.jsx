import React from 'react';
import "./Main.css"


const Main = () => {

    
    return(
        <main>
            {/*Inicia Hero*/}
            <section class="hero" id="home">

                <div class="contenedor-hero">
                    <div class="contenedor-hero-texto">
                        <h3 class="titulo-hero">Hola, soy Joaquín</h3>
                        <p class="texto-hero1">Creo <span>diseños de productos</span> y experiencia de marca.</p>
                        <p class="texto-hero2">Elaboración convincente para mejorar la identidad de la marca <br/> y elevar la experiencia del usuario</p>
                        <div class="frame-hero">
                            <a href="#contacto"><button class="custom-btn btn-15 btn-hero">Más info!!</button></a>
                        </div>
                    </div>
                    <img src="../Fotos/img-hero.png" class="img-hero" alt=""/>
                    
                </div>

            </section>
            {/*Finaliza Hero*/}

            {/*Inicia Experiencia*/}
            <section class="experiencia" id="experiencia">

                <h2 class="titulo-experiencia">Mi Experiencia</h2>

                <div class="contenedor-experiencia">
                    <div class="caja1">
                        <i class="bi bi-compass icono-experiencia"></i>
                        <h3>Estrategia y Dirección</h3>
                        <p class="texto-experiencia">Ofrezco servicios de estrategia y dirección web, desde la definición de los objetivos, el público y el tipo de sitio web.<br/> Hasta la planificación y ejecución del proyecto.</p>
                    </div>
                    <div class="caja2">
                        <i class="bi bi-tags-fill icono-experiencia"></i>
                        <h3>Marca y Logotipo</h3>
                        <p class="texto-experiencia">Creo marcas y logotipos que reflejan la personalidad, los valores y el propósito de cada cliente y que se adaptan a diferentes medios y formatos.</p>
                    </div>
                    <div class="caja3">
                        <i class="bi bi-brush icono-experiencia"></i>
                        <h3>Diseño UX & UI</h3>
                        <p class="texto-experiencia">Diseño experiencias e interfaces de usuario intuitivas, elegantes y responsivas,<br/> que satisfacen las necesidades y expectativas de los usuarios y que optimizan la conversión y la fidelización.</p>
                    </div>
                    <div class="caja4">
                        <i class="bi bi-code-slash icono-experiencia"></i>
                        <h3>Desarrollo Web</h3>
                        <p class="texto-experiencia">Desarrollo sitios web a medida, utilizando las tecnologías más adecuadas para cada proyecto, garantizando la calidad, la seguridad y el rendimiento del proyecto.</p>
                    </div>
                </div>

            </section>
            {/*Finaliza Experiencia*/}

            {/*Inicia Sobre Mí*/}
            <section class="sobre-mi" id="sobre-mi">

                <div class="contenedor-sobremi">

                    <img src="../Fotos/img-about.png" class="img-sobremi" alt=""/>

                    <div class="texto-sobremi">
                        <h2 class="titulo-sobremi"><strong>Sobre Mí</strong></h2>
                        <p class="texto-sobremi1">Hola, soy Joaquín, tengo 37 años y soy diseñador web desde hace más de una década. Me apasiona crear sitios web que sean útiles, fáciles de usar y que cumplan con los objetivos de mis clientes. Tengo experiencia en diferentes áreas del diseño web, como la estrategia, la marca, el diseño UX-UI y el desarrollo web. Me gusta estar al día con las últimas tendencias y novedades del sector, aprender nuevas herramientas y habilidades que me permitan mejorar mi trabajo. Soy una persona creativa, proactiva y responsable, que disfruta de trabajar en equipo y de comunicarse con los clientes y los usuarios. Puedes ver algunos de mis proyectos en mi portfolio, estaré encantado de escuchar tus ideas y de ayudarte a crear el sitio web que necesitas.</p>
                        <p class="texto-sobremi2">Mi portfolio refleja mi dedicación, creatividad e innovación como diseñador web. Me gusta crear soluciones a medida para cada cliente, que se adapten a sus necesidades y que les ayuden a posicionarse competitivamente en sus mercados. Si buscas un diseñador web profesional, confiable y con experiencia, no dudes en contactarme. Estoy seguro de que juntos podemos crear el sitio web que tu negocio necesita para crecer y destacar.</p>
                    </div>

                </div>

            </section>
            {/*Finaliza Sobre Mí*/}

            {/*Inicia Portfolio*/}
            <section class="portfolio" id="portfolio">

                <div class="portfolio-uno">

                    <h2 class="titulo-portfolio">Mi Portfolio</h2>

                    <div class="frame-portfolio btn-portfolio">
                        <a href="https://dribbble.com/" target="_blank"><button class="custom-btn-portfolio btn-10 btn-portfolio"><i class="bi bi-dribbble icono-portfolio"></i>Visita Mi Dribbble</button></a>
                    </div>

                </div>

                <div class="contenedor-portfolio">

                    <div class="tarjeta-1">
                        
                        <img class="img-portfolio" src="../Fotos/portfolio-1.png" alt=""/>
                        
                    
                        <div class="cards">
                            <h3 class="card-titulo">Ahuse</h3>
                            <p class="texto-portfolio">E-commerce de cosméticos y productos de belleza.</p>
                            <a class="enlace-portfolio" href="https://dribbble.com/" target="_blank">Ver en Dribbble <i class="bi bi-arrow-up-right flecha"></i></a>
                        </div>
                    </div>

                    <div class="tarjeta-1">
                        
                        <img class="img-portfolio2" src="../Fotos/portfolio-2.png" alt=""/>
                        
                    
                        <div class="cards">
                            <h3 class="card-titulo">App Dashboard</h3>
                            <p class="texto-portfolio">App para la gestión de la información.</p>
                            <a class="enlace-portfolio" href="https://dribbble.com/" target="_blank">Ver en Dribbble <i class="bi bi-arrow-up-right flecha"></i></a>
                        </div>
                    </div>

                    <div class="tarjeta-1">
                        
                        <img class="img-portfolio3" src="../Fotos/portfolio-3.png" alt=""/>
                        
                    
                        <div class="cards">
                            <h3 class="card-titulo">Easy Rent</h3>
                            <p class="texto-portfolio">Web que permite comparar alquileres por zonas.</p>
                            <a class="enlace-portfolio" href="https://dribbble.com/" target="_blank">Ver en Dribbble <i class="bi bi-arrow-up-right flecha"></i></a>
                        </div>
                    </div>

                </div>

            </section>
            {/*Finaliza Portfolio*/}

            {/*Inicia Testimonios*/}
            <section class="testimonios" id="testimonios">

                <h2 class="titulo-testimonios">Testimonios de Clientes</h2>

                    <div class="contenedor-testimonios">

                        <div class="clientes">

                            <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"> </i><i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i>

                            <p class="texto-clientes">Joaquín es un excelente diseñador web, que supo entender y plasmar perfectamente lo que queríamos para nuestro sitio web.</p>

                            <div class="marcas">
                                <i class="bi bi-person-circle icn-clientes2"></i>
                                <p> Dianne Russell <br/>Starbucks </p>
                            </div>
                            
                        </div>

                        <div class="clientes">
                            
                            <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"> </i><i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i>

                            <p class="texto-clientes">Joaquín es un excelente diseñador web, que supo entender y plasmar perfectamente lo que queríamos para nuestro sitio web.</p>

                            <div class="marcas">
                                <i class="bi bi-person-circle icn-clientes3"></i>
                                <p>Kristin Watson <br/>Louis Vuitton</p>
                            </div>
                            
                        </div>

                        <div class="clientes">
                            
                            <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"> </i><i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i>

                            <p class="texto-clientes">Joaquín es un excelente diseñador web, que supo entender y plasmar perfectamente lo que queríamos para nuestro sitio web.</p>

                            <div class="marcas">
                                <i class="bi bi-person-circle icn-clientes4"></i>
                                <p>Kathryn Murphy <br/>McDonald's</p>
                            </div>
                            
                        </div>

                    </div>
                

            </section>
            {/*Finaliza Testimonios*/}

        </main>
    )
}

export { Main }