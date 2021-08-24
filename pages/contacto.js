import Navbar from "../components/navBar"

import { useState } from "react"
import sendMail from "../mailService/mailFunction"

export default function Contacto(){

    const [nombre, setNombre] = useState("")
    const [celular, setCelular] = useState("")
    const [mail, setMail] = useState("")
    const [consulta, setConsulta] = useState("")


    const send = (e) =>{
        e.preventDefault()
        console.log(nombre, celular, mail, consulta)
        var body = {
            nombre: nombre,
            celular: celular,
            mail: mail,
            consulta: consulta
        }

    }

    return (
        <div>
            <Navbar />
            <h1> Contacto </h1>

            <label>
                Nombre:
                <input  placeholder="Ingrese su nombre" onChange={(e) => setNombre(e.target.value)} />
            </label>

            <label>
                Celular:
                <input  placeholder="Ingrese su celular" onChange={(e) => setCelular(e.target.value)}/>
            </label>

            <label>
                Mail:
                <input  placeholder="Ingrese su mail" onChange={(e) => setMail(e.target.value)}/>
            </label>

            <label>
                Consulta:
                <input  placeholder="Ingrese su consulta" onChange={(e) => setConsulta(e.target.value)}/>
            </label>

            <button onClick={send}> SEND </button>
        </div>
    )
}