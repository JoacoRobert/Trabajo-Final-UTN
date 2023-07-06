import React from 'react';
import "./Main.css"


const Main = () => {

    
    return(
        <main>
            {/*Inicia Hero*/}
            <section className="hero" id="home">

                <div className="contenedor-hero">
                    <div className="contenedor-hero-texto">
                        <h3 className="titulo-hero">Hola, soy Joaquín</h3>
                        <p className="texto-hero1">Creo <span>diseños de productos</span> y experiencia de marca.</p>
                        <p className="texto-hero2">Elaboración convincente para mejorar la identidad de la marca <br/> y elevar la experiencia del usuario</p>
                        <div className="frame-hero">
                            <a href="#contacto"><button className="custom-btn btn-15 btn-hero">Más info!!</button></a>
                        </div>
                    </div>
                    <img src="../Fotos/img-hero.png" className="img-hero" alt=""/>
                    
                </div>

            </section>
            {/*Finaliza Hero*/}

            {/*Inicia Experiencia*/}
            <section className="experiencia" id="experiencia">

                <h2 className="titulo-experiencia">Mi Experiencia</h2>

                <div className="contenedor-experiencia">
                    <div className="caja1">
                        <i className="bi bi-compass icono-experiencia"></i>
                        <h3>Estrategia y Dirección</h3>
                        <p className="texto-experiencia">Ofrezco servicios de estrategia y dirección web, desde la definición de los objetivos, el público y el tipo de sitio web.<br/> Hasta la planificación y ejecución del proyecto.</p>
                    </div>
                    <div className="caja2">
                        <i className="bi bi-tags-fill icono-experiencia"></i>
                        <h3>Marca y Logotipo</h3>
                        <p className="texto-experiencia">Creo marcas y logotipos que reflejan la personalidad, los valores y el propósito de cada cliente y que se adaptan a diferentes medios y formatos.</p>
                    </div>
                    <div className="caja3">
                        <i className="bi bi-brush icono-experiencia"></i>
                        <h3>Diseño UX & UI</h3>
                        <p className="texto-experiencia">Diseño experiencias e interfaces de usuario intuitivas, elegantes y responsivas,<br/> que satisfacen las necesidades y expectativas de los usuarios y que optimizan la conversión y la fidelización.</p>
                    </div>
                    <div className="caja4">
                        <i className="bi bi-code-slash icono-experiencia"></i>
                        <h3>Desarrollo Web</h3>
                        <p className="texto-experiencia">Desarrollo sitios web a medida, utilizando las tecnologías más adecuadas para cada proyecto, garantizando la calidad, la seguridad y el rendimiento del proyecto.</p>
                    </div>
                </div>

            </section>
            {/*Finaliza Experiencia*/}

            {/*Inicia Sobre Mí*/}
            <section className="sobre-mi" id="sobre-mi">

                <div className="contenedor-sobremi">

                    <img src="../Fotos/img-about.png" className="img-sobremi" alt=""/>

                    <div className="texto-sobremi">
                        <h2 className="titulo-sobremi"><strong>Sobre Mí</strong></h2>
                        <p className="texto-sobremi1">Hola, soy Joaquín, tengo 37 años y soy diseñador web desde hace más de una década. Me apasiona crear sitios web que sean útiles, fáciles de usar y que cumplan con los objetivos de mis clientes. Tengo experiencia en diferentes áreas del diseño web, como la estrategia, la marca, el diseño UX-UI y el desarrollo web. Me gusta estar al día con las últimas tendencias y novedades del sector, aprender nuevas herramientas y habilidades que me permitan mejorar mi trabajo. Soy una persona creativa, proactiva y responsable, que disfruta de trabajar en equipo y de comunicarse con los clientes y los usuarios. Puedes ver algunos de mis proyectos en mi portfolio, estaré encantado de escuchar tus ideas y de ayudarte a crear el sitio web que necesitas.</p>
                        <p className="texto-sobremi2">Mi portfolio refleja mi dedicación, creatividad e innovación como diseñador web. Me gusta crear soluciones a medida para cada cliente, que se adapten a sus necesidades y que les ayuden a posicionarse competitivamente en sus mercados. Si buscas un diseñador web profesional, confiable y con experiencia, no dudes en contactarme. Estoy seguro de que juntos podemos crear el sitio web que tu negocio necesita para crecer y destacar.</p>
                    </div>

                </div>

            </section>
            {/*Finaliza Sobre Mí*/}

            {/*Inicia Portfolio*/}
            <section className="portfolio" id="portfolio">

                <div className="portfolio-uno">

                    <h2 className="titulo-portfolio">Mi Portfolio</h2>

                    <div className="frame-portfolio btn-portfolio">
                        <a href="https://dribbble.com/" target="_blank"><button className="custom-btn-portfolio btn-10 btn-portfolio"><i className="bi bi-dribbble icono-portfolio"></i>Visita Mi Dribbble</button></a>
                    </div>

                </div>

                <div className="contenedor-portfolio">

                    <div className="tarjeta-1">
                        
                        <img className="img-portfolio" src="../Fotos/portfolio-1.png" alt=""/>
                        
                    
                        <div className="cards">
                            <h3 className="card-titulo">Ahuse</h3>
                            <p className="texto-portfolio">E-commerce de cosméticos y productos de belleza.</p>
                            <a className="enlace-portfolio" href="https://dribbble.com/" target="_blank">Ver en Dribbble <i className="bi bi-arrow-up-right flecha"></i></a>
                        </div>
                    </div>

                    <div className="tarjeta-1">
                        
                        <img className="img-portfolio2" src="../Fotos/portfolio-2.png" alt=""/>
                        
                    
                        <div className="cards">
                            <h3 className="card-titulo">App Dashboard</h3>
                            <p className="texto-portfolio">App para la gestión de la información y visualización de datos.</p>
                            <a className="enlace-portfolio" href="https://dribbble.com/" target="_blank">Ver en Dribbble <i className="bi bi-arrow-up-right flecha"></i></a>
                        </div>
                    </div>

                    <div className="tarjeta-1">
                        
                        <img className="img-portfolio3" src="../Fotos/portfolio-3.png" alt=""/>
                        
                    
                        <div className="cards">
                            <h3 className="card-titulo">Easy Rent</h3>
                            <p className="texto-portfolio">Web que permite comparar alquileres por zonas.</p>
                            <a className="enlace-portfolio" href="https://dribbble.com/" target="_blank">Ver en Dribbble <i className="bi bi-arrow-up-right flecha"></i></a>
                        </div>
                    </div>

                </div>

            </section>
            {/*Finaliza Portfolio*/}

            {/*Inicia Testimonios*/}
            <section className="testimonios" id="testimonios">

                <h2 className="titulo-testimonios">Testimonios de Clientes</h2>

                    <div className="contenedor-testimonios">

                        <div className="clientes">

                            <i className="bi bi-star-fill icn-clientes"></i> <i className="bi bi-star-fill icn-clientes"> </i><i className="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i>

                            <p className="texto-clientes">Joaquín es un excelente diseñador web, que supo entender y plasmar perfectamente lo que queríamos para nuestro sitio web.</p>

                            <div className="marcas">
                                <i className="bi bi-person-circle icn-clientes2"></i>
                                <p> Dianne Russell <br/>Starbucks </p>
                            </div>
                            
                        </div>

                        <div className="clientes">
                            
                            <i className="bi bi-star-fill icn-clientes"></i> <i className="bi bi-star-fill icn-clientes"> </i><i className="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i>

                            <p className="texto-clientes">Joaquín es un excelente diseñador web, que supo entender y plasmar perfectamente lo que queríamos para nuestro sitio web.</p>

                            <div className="marcas">
                                <i className="bi bi-person-circle icn-clientes3"></i>
                                <p>Kristin Watson <br/>Louis Vuitton</p>
                            </div>
                            
                        </div>

                        <div className="clientes">
                            
                            <i className="bi bi-star-fill icn-clientes"></i> <i className="bi bi-star-fill icn-clientes"> </i><i className="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i>

                            <p className="texto-clientes">Joaquín es un excelente diseñador web, que supo entender y plasmar perfectamente lo que queríamos para nuestro sitio web.</p>

                            <div className="marcas">
                                <i className="bi bi-person-circle icn-clientes4"></i>
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