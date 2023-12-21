import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import './login.css'
import { Link } from "react-router-dom"
//import axios from 'axios'
import { useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
//import Cookie from 'js-cookie'
import LoginIcon from '@mui/icons-material/Login';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PasswordIcon from '@mui/icons-material/Password';
import Swal from 'sweetalert2'
import CopyRight from './copyRight/CopyRight'
import CottageIcon from '@mui/icons-material/Cottage';


export default function Login() {
    let URL = ""
    const cookies = new Cookies()
    //const navigate = useNavigate();
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [userName, setUsername] = useState("")
    const [showPassword, setShowPassword] = useState(true)


    const handleChange = (e) => {
        const { name, value } = e.target
        setUsername({ ...userName, [name]: value })
    }

    const handleClickPassword = (e) => {
        setErrorPassword("")
    }
    const handleClickEmail = (e) => {
        setErrorEmail("")
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    //Este bloque de código realiza una petición al servidor donde está el JSON de los usuarios registrados.
    //Si el email y contraseña ingresados coinciden con los del JSON entonces hay inicio de sesión
    const iniciarSesion = (e) => {
        e.preventDefault()
        if ((userName.password === undefined || userName.password.length === 0) && (userName.email === undefined || userName.email.length === 0)) {
            setErrorPassword("Debe ingresar una contraseña.")
            setErrorEmail("Debe ingresar un correo electrónico.")
            return
        }
        if (userName.password === undefined || userName.password.length === 0) {
            setErrorPassword("Debe ingresar una contraseña.")
            return
        }
        if (userName.email === undefined || userName.email.length === 0) {
            setErrorEmail("Debe ingresar un correo electrónico.")
            return
        }
        //fetch("http://localhost:3001/login", {
        //fetch("https://programador-backend.onrender.com/login", {          
        URL = process.env.REACT_APP_ENVIRONMENT //Cuando se ejecuta npm start, se carga el archivo ".development.env" que a su vez carga el valor "http://localhost:3001"  Cuando se ejecuta "npm run build" se carga el archivo ".production.env"  que a su vez carga el valor "https://programador-backend.onrender.com"
        fetch(`${URL}/login`, { //variable de entorno. Ver archivo ".env-cmdrc"
            method: 'POST',
            headers: { "Content-Type": "Application/json", "Accept": "application/json" },
            body: JSON.stringify(userName)
        })
            .then(response => {
                if (response.status === 200) {
                    //cookies.set('email', userName.email, { path: '/' })
                    cookies.set('email', userName.email, {
                        // expires: 1,
                        //maxAge : 10,
                        secure: true,
                        sameSite: 'Strict',
                        path: '/'
                    })
                    window.location.hash = '/rejilla'
                }
                else {
                    Swal.fire({
                        title: "Las credenciales ingresadas no son correctas.",
                        icon: "error"
                    })
                    window.location.hash = '/login'
                }
            })
            .catch(() => Swal.fire({
                title: "No se puede iniciar sesión por un problema en el servidor",
                icon: "error"
            }),
                window.location.hash = '/login'
            )
    }

    //Si ya se inició sesión y se escribe en la barra de direcciones '/login' entonces lo redirige al componente "rejilla".
    useEffect(() => {
        if (cookies.get('email')) {
            window.location.hash = '/rejilla'
            //window.location.href = "./rejilla"
        }
    })


    return (
        /*  <div classNameName='formLogin'>
             <Link to="/">
                 <div classNameName='divHome'>
                     <CottageIcon sx={{ fontSize: 40 }}></CottageIcon>
                     <p><strong>Inicio</strong></p>
                 </div>
             </Link>
             <form onSubmit={iniciarSesion}>
                 <LoginIcon classNameName='loginIcon' sx={{ fontSize: 45 }}></LoginIcon>
                 <h4 classNameName='inicioSesion'>Inicio de sesión</h4>
                 <div classNameName='containerPrincipalLogin '>
                     <div >
                         <label>Usuario o email:</label>
                         <input type="email" classNameName='form-control' name='email' onChange={handleChange} onClick={handleClickEmail} autoComplete="on" placeholder='Ingrese usuario' /> <br />
                     </div>
                     <p classNameName='errorEmailLogin'>{errorEmail}</p>
                     <div >
                         <label>Contraseña:</label>
                         <input type={showPassword ? "password" : "text"} classNameName='form-control' name='password' onChange={handleChange} onClick={handleClickPassword} autoComplete="on" placeholder='Ingrese contraseña' /> <br />
                     </div>
                     <p classNameName='errorPasswordLogin'>{errorPassword}</p>
                     <div classNameName='buttonLogin'><button type="submit" classNameName='btn btn-primary' >Iniciar Sesión</button></div>
                     <div classNameName='regisOlvido'>
                         <div classNameName='registrarse'><Link to="/registro">Registrarse</Link></div>
                         <div classNameName='olvido'><Link to="/olvidoPassword">¿Olvidó la contraseña?</Link></div>
                     </div>
                     <MailOutlineIcon classNameName='MailOutlineIconLogin'></MailOutlineIcon>
                     <PasswordIcon classNameName='PasswordIconLogin' onClick={handleShowPassword}></PasswordIcon>
                 </div>
             </form>
             <div classNameName='copyRightLogin'><CopyRight></CopyRight></div>
         </div> */

        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  w-2/6">
                <Link to="/">
                    <CottageIcon sx={{ fontSize: 40 }}></CottageIcon>
                    <p><strong>Inicio</strong></p>
                </Link>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Correo electrónico
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>                
            </form>
            <CopyRight></CopyRight>
            

        </div>
    )
}
