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
                        <p class="texto-experiencia">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit, repellendus laboriosam aut impedit magni?.</p>
                    </div>
                    <div class="caja2">
                        <i class="bi bi-tags-fill icono-experiencia"></i>
                        <h3>Marca y Logotipo</h3>
                        <p class="texto-experiencia">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit, repellendus laboriosam aut impedit magni?.</p>
                    </div>
                    <div class="caja3">
                        <i class="bi bi-brush icono-experiencia"></i>
                        <h3>Diseño UX & UI</h3>
                        <p class="texto-experiencia">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit, repellendus laboriosam aut impedit magni?.</p>
                    </div>
                    <div class="caja4">
                        <i class="bi bi-code-slash icono-experiencia"></i>
                        <h3>Desarrollo Web</h3>
                        <p class="texto-experiencia">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit, repellendus laboriosam aut impedit magni?.</p>
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
                        <p class="texto-sobremi1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eaque ipsam nemo non dolorem omnis laboriosam odit iusto, nobis perspiciatis similique laborum fugiat. Voluptatem voluptates ullam, veritatis quae alias sed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, quae dicta nihil commodi fugit maxime expedita laboriosam eius magnam sit ipsa illum saepe voluptates, aliquid debitis sequi ad similique fuga.</p>
                        <p class="texto-sobremi2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex assumenda hic magni quasi debitis accusantium blanditiis ea architecto quibusdam perspiciatis, fugit perferendis saepe voluptatibus beatae? Distinctio iusto iste numquam sed.</p>
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
                            <p class="texto-portfolio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a class="enlace-portfolio" href="https://dribbble.com/" target="_blank">Ver en Dribbble <i class="bi bi-arrow-up-right flecha"></i></a>
                        </div>
                    </div>

                    <div class="tarjeta-1">
                        
                        <img class="img-portfolio2" src="../Fotos/portfolio-2.png" alt=""/>
                        
                    
                        <div class="cards">
                            <h3 class="card-titulo">App Dashboard</h3>
                            <p class="texto-portfolio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a class="enlace-portfolio" href="https://dribbble.com/" target="_blank">Ver en Dribbble <i class="bi bi-arrow-up-right flecha"></i></a>
                        </div>
                    </div>

                    <div class="tarjeta-1">
                        
                        <img class="img-portfolio3" src="../Fotos/portfolio-3.png" alt=""/>
                        
                    
                        <div class="cards">
                            <h3 class="card-titulo">Easy Rent</h3>
                            <p class="texto-portfolio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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

                            <p class="texto-clientes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ratione quas voluptates officia fugiat.</p>

                            <div class="marcas">
                                <i class="bi bi-person-circle icn-clientes2"></i>
                                <p> Dianne Russell <br/>Starbucks </p>
                            </div>
                            
                        </div>

                        <div class="clientes">
                            
                            <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"> </i><i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i>

                            <p class="texto-clientes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ratione quas voluptates officia fugiat.</p>

                            <div class="marcas">
                                <i class="bi bi-person-circle icn-clientes3"></i>
                                <p>Kristin Watson <br/>Louis Vuitton</p>
                            </div>
                            
                        </div>

                        <div class="clientes">
                            
                            <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"> </i><i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i> <i class="bi bi-star-fill icn-clientes"></i>

                            <p class="texto-clientes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ratione quas voluptates officia fugiat.</p>

                            <div class="marcas">
                                <i class="bi bi-person-circle icn-clientes4"></i>
                                <p>Kathryn Murphy <br/>McDonald's</p>
                            </div>
                            
                        </div>

                    </div>
                

            </section>
            {/*Finaliza Testimonios*/}

            {/*Inicia Contacto*/}
            <section class="contacto" id="contacto">

                <h2 class="titulo-contacto">Contáctame</h2>
                <p class="texto-contacto">Contáctame para hablar sobre tu proyecto y cómo puedo ayudarte a hacer realidad tu visión.</p>

                <form>

                    <div class="contenedor-contacto">

                        <div class="contacto-datos">
                            <div class="columna1">
                            <label for="">Nombre</label>
                            <input class="cuadros" type="text" required placeholder="Ingrese Nombre"/>
                            </div>
                            <div class="columna2">
                            <label for="">Apellido</label>
                            <input class="cuadros" type="text" required placeholder="Ingrese Apellido"/>
                            </div>
                        </div>

                        <div class="contacto-datos">
                            <div class="columna1">
                            <label for="">Email</label>
                            <input class="cuadros" type="email" required placeholder="Ingrese Email"/>
                            </div>
                            <div class="columna2">
                            <label for="">Teléfono</label>
                            <input class="cuadros" type="text" required placeholder="Ingrese Teléfono"/>
                            </div>
                        </div>
                        
                        <div class="columna3">
                            <label for="">Eliga un tema</label>
                            <select class="cuadros" name="" id="">
                                <option class="cuadros" value="Seleccione un tema">Seleccione un tema</option>
                                <option class="cuadros" value="Estrategia y Dirección">Estrategia y Dirección</option>
                                <option class="cuadros" value="Marca y Logotipo">Marca y Logotipo</option>
                                <option class="cuadros" value="Diseño UX & UI">Diseño UX & UI</option>
                                <option class="cuadros" value="Desarrollo Web">Desarrollo Web</option>
                            </select>
                        </div>

                        <div class="columna3">
                            <label for="">Mensaje</label>
                            <textarea class="cuadros" name="" id="" cols="100" rows="15"></textarea>
                        </div>

                        <div class="terminos">
                            <input type="checkbox" name="terms" id="terms" onChange="enableSending()"/>
                            <label for="terms">Acepto los términos</label>
                        </div>

                        <div class="boton-contacto">
                            <button class="btn-contacto">
								  <div class="svg-wrapper-1">
								    <div class="svg-wrapper">
								      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
								        <path fill="none" d="M0 0h24v24H0z"></path>
								        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
								      </svg>
								    </div>
								  </div>
								  <span>Enviar</span>
							</button>
                        </div>
                        
                        
                    </div>

                </form>
            </section>
            {/*Finaliza Contacto*/}

        </main>
    )
}

export { Main }