import React from 'react';
import "./Contacto.css"
import { useState } from 'react';

const Contacto = () => {


    return(
        <main>
            
            <section className="contacto" id="contacto">

                <h2 className="titulo-contacto">Contáctame</h2>
                <p className="texto-contacto">Contáctame para hablar sobre tu proyecto y cómo puedo ayudarte a hacer realidad tu visión.</p>

                <form action="https://formspree.io/f/xleyerel" method="POST">

                    <div className="contenedor-contacto">

                        <div className="contacto-datos">
                            <div className="columna1">
                            <label htmlFor='nombre'>Nombre</label>
                            <input className="cuadros" type="text" id='nombre' name='nombre' required placeholder="Ingrese Nombre" minLength={3}/>
                            </div>
                            
                            <div className="columna2">
                            <label htmlFor="apellido">Apellido</label>
                            <input className="cuadros" type="text" id='apellido' name='apellido' required placeholder="Ingrese Apellido" minLength={3}/>
                            </div>
                        </div>

                        <div className="contacto-datos">
                            <div className="columna1">
                            <label htmlFor="email">Email</label>
                            <input className="cuadros" type="email" id='email' name='email' required placeholder="Ingrese Email" minLength={6}/>
                            </div>
                            
                            <div className="columna2">
                            <label htmlFor="">Teléfono</label>
                            <input className="cuadros" type="text" id='telefono' name='telefono' required placeholder="Ingrese Teléfono"/>
                            </div>
                        </div>
                        
                        <div className="columna3">
                            <label htmlFor="tema">Eliga un tema</label>
                            <select className="cuadros" name="tema" id="tema">
                                <option className="cuadros" value="">Eliga un tema</option>
                                <option className="cuadros" value="Estrategia y Dirección">Estrategia y Dirección</option>
                                <option className="cuadros" value="Marca y Logotipo">Marca y Logotipo</option>
                                <option className="cuadros" value="Diseño UX & UI">Diseño UX & UI</option>
                                <option className="cuadros" value="Desarrollo Web">Desarrollo Web</option>
                            </select>
                        </div>

                        <div className="columna3">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea className="cuadros" name="mensaje" id="mensaje" cols="100" rows="15" required minLength={6}></textarea>
                        </div>

                        <div className="terminos">
                            <input type="checkbox" name="terminos" id="terminos" onChange="enableSending()"/>
                            <label htmlFor="terminos">Acepto los términos</label>
                        </div>

                        <div className="boton-contacto">
                            <button className="btn-contacto">
								  <div className="svg-wrapper-1">
								    <div className="svg-wrapper">
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

        </main>
    )
}

export { Contacto }