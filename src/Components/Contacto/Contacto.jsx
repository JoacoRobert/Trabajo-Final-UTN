import React from 'react';
import "./Contacto.css"
import { useState } from 'react';

const Contacto = () => {

const [nombre,setNombre]=useState("")
const [apellido,setApellido]=useState("")
const [email,setEmail]=useState("")
const [mensaje,setMensaje]=useState("")
const [mostrarErrores,setMostrarErrores]=useState(false)

const [nombreValido,setNombreValido]=useState(false)
const [apellidoValido,setApellidoValido]=useState(false)
const [emailValido,setEmailValido]=useState(false)
const [mensajeValido,setMensajeValido]=useState(false)



const nombreUpdate=(evento)=>{
    let valor=evento.target.value
    setNombre(valor)
    setNombreValido(valor.length>2)
}

const apellidoUpdate=(evento)=>{
    let valor=evento.target.value
    setApellido(valor)
    setApellidoValido(valor.length>2)
}

const emailUpdate=(evento)=>{
    let valor=evento.target.value
    setEmail(valor)
    setEmailValido(valor.length>6)
}

const mensajeUpdate=(evento)=>{
    evento.preventDefault()
    let valor=evento.target.value
    setMensaje(valor)
    setMensajeValido(valor.length>8)
    }

const enviarDatos=(evento)=>{
    evento.preventDefault()
    if(!nombreValido || !apellidoValido || !emailValido || !mensajeValido ){
        setMostrarErrores(true)
    }
}

    return(
        <main>
            
            <section class="contacto" id="contacto">

                <h2 class="titulo-contacto">Contáctame</h2>
                <p class="texto-contacto">Contáctame para hablar sobre tu proyecto y cómo puedo ayudarte a hacer realidad tu visión.</p>

                <form action="https://formspree.io/f/xleyerel" method="POST">

                    <div class="contenedor-contacto">

                        <div class="contacto-datos">
                            <div class="columna1">
                            <label htmlFor='nombre'>Nombre</label>
                            <input class="cuadros" type="text" id='nombre' name='nombre' required placeholder="Ingrese Nombre" onChange={nombreUpdate} value={nombre}/>
                            {(mostrarErrores && !nombreValido) && <small className='text-danger'>Nombre no valido</small>}
                            </div>
                            
                            <div class="columna2">
                            <label htmlFor="apellido">Apellido</label>
                            <input class="cuadros" type="text" id='apellido' name='apellido' required placeholder="Ingrese Apellido" onChange={apellidoUpdate} value={apellido}/>
                            {(mostrarErrores && !apellidoValido) && <small className='text-danger'>Apellido no valido</small>}
                            </div>
                        </div>

                        <div class="contacto-datos">
                            <div class="columna1">
                            <label htmlFor="email">Email</label>
                            <input class="cuadros" type="email" id='email' name='email' required placeholder="Ingrese Email" onChange={emailUpdate} value={email}/>
                            {(mostrarErrores && !emailValido) && <small className='text-danger'>Email no valido</small>}
                            </div>
                            
                            <div class="columna2">
                            <label htmlFor="">Teléfono</label>
                            <input class="cuadros" type="text" id='telefono' name='telefono' required placeholder="Ingrese Teléfono"/>
                            </div>
                        </div>
                        
                        <div class="columna3">
                            <label htmlFor="tema">Eliga un tema</label>
                            <select class="cuadros" name="tema" id="tema">
                                <option class="cuadros" value="">Eliga un tema</option>
                                <option class="cuadros" value="Estrategia y Dirección">Estrategia y Dirección</option>
                                <option class="cuadros" value="Marca y Logotipo">Marca y Logotipo</option>
                                <option class="cuadros" value="Diseño UX & UI">Diseño UX & UI</option>
                                <option class="cuadros" value="Desarrollo Web">Desarrollo Web</option>
                            </select>
                        </div>

                        <div class="columna3">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea class="cuadros" name="mensaje" id="mensaje" cols="100" rows="15" onChange={mensajeUpdate} value={mensaje}></textarea>
                            {(mostrarErrores && !mensajeValido) && <small className='text-danger'>Mensaje no valido</small>}
                        </div>

                        <div class="terminos">
                            <input type="checkbox" name="terminos" id="terminos" onChange="enableSending()"/>
                            <label htmlFor="terminos">Acepto los términos</label>
                        </div>

                        <div class="boton-contacto">
                            <button type='submit' class="btn-contacto" onClick={enviarDatos}>
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

        </main>
    )
}

export { Contacto }