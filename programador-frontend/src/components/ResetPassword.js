import React from 'react'
import { useState } from 'react';
import './resetPassword.css'
//import LockResetIcon from '@mui/icons-material/LockReset';
import LoginIcon from '@mui/icons-material/Login';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom"
//import { useNavigate } from 'react-router-dom'
//import SyncLockIcon from '@mui/icons-material/SyncLock';
import CopyRight from './copyRight/CopyRight';
import CottageIcon from '@mui/icons-material/Cottage';
import { useParams } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



export default function ResetPassword() {
    let URL = ""
    //const navigate = useNavigate();
    const { id } = useParams() //useParams returns an object with value/key pairs of the dinamic params from the current URL
    const [userName, setUsername] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(true)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUsername({ ...userName, [name]: value })
    }
    const handleClick = (e) => {
        e.preventDefault()
        setErrorPassword("")
        setErrorConfirmPassword("")
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleShowPasswordConfirm = () => {
        setShowPasswordConfirm(!showPasswordConfirm)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if ((userName.password === undefined || userName.password.length === 0) && (userName.confirmpassword === undefined || userName.confirmpassword.length === 0)) {
            setErrorPassword("Debe ingresar una contraseña.")
            setErrorConfirmPassword("Debe ingresar una contraseña.")
            return
        }
        if (userName.password === undefined || userName.password.length === 0) {
            setErrorPassword("Debe ingresar una contraseña.")
            return
        }
        if (userName.confirmpassword === undefined || userName.confirmpassword.length === 0) {
            setErrorConfirmPassword("Debe confirmar la contraseña.")
            return
        }
        if (userName.password.length < 5) {
            setErrorPassword("La contraseña debe tener almenos 5 caracteres")
            return
        }
        if (userName.password !== userName.confirmpassword) {
            Swal.fire({
                title: "Las contraseñas ingresadas no coinciden",
                icon: "warning"
            })
            return
        }
        // fetch(`http://localhost:3001/reset-password/${id}`, {
        //fetch(`https://programador-backend.onrender.com/reset-password/${id}`, {        
        URL = process.env.REACT_APP_ENVIRONMENT //Cuando se ejecuta npm start, se carga el archivo ".development.env" que a su vez carga el valor "http://localhost:3001"  Cuando se ejecuta "npm run build" se carga el archivo ".production.env"  que a su vez carga el valor "https://programador-backend.onrender.com"
        fetch(`${URL}/reset-password/${id}`, {
            method: 'POST',
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(userName)
        })
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        title: "La contraseña se cambió con éxito",
                        icon: "success"
                    })
                    window.location.hash = '/login'
                    // navigate('/login') //lleva al formulario de login después de cambiar la contraseña.  
                }
                else {
                    Swal.fire({
                        title: "El enlace ya no es válido",
                        icon: "error"
                    })
                }

            })
    }

    return (
       /*  <div className='formRegistro'>
            <div className='divHomeResetPass'>
                <Link to="/">
                    <CottageIcon sx={{ fontSize: 40 }}></CottageIcon>
                    <p><strong>Inicio</strong></p>
                </Link>
                <LockResetIcon className='LockResetIcon' sx={{ fontSize: 45 }}></LockResetIcon>
                <Link to="/login"><div className='logInResetPassword'><LoginIcon sx={{ fontSize: 35 }}></LoginIcon><p>Log in</p></div></Link>
            </div>

            <form >
                <h4 className='textoReseteoContraseña'>Recuperación de Contraseña</h4>
                <div className='containerResetPass'>
                    <div>
                        <label>Contraseña</label>
                        <input type={showPassword ? "password" : "text"} className='form-control' name='password' onChange={handleChange} onClick={handleClick} placeholder="Digite una contraseña" /> <br />
                    </div>
                    <p className='errorEmailOlvidoPassword1'>{errorPassword}</p>
                    <div>
                        <label>Confirme Contraseña</label>
                        <input type={showPasswordConfirm ? "password" : "text"} className='form-control' name='confirmpassword' onChange={handleChange} onClick={handleClick} placeholder="Confirme la contraseña" /> <br />
                    </div>
                    <p className='errorEmailOlvidoPassword2'>{errorConfirmPassword}</p>
                    <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Enviar</button>
                    <SyncLockIcon className='SyncLockIconResetPassword' onClick={handleShowPassword}></SyncLockIcon>
                    <SyncLockIcon className='SyncLockIconResetPassword2' onClick={handleShowPasswordConfirm}></SyncLockIcon>

                </div>
            </form>
            <div className='copyRightResetPass'><CopyRight></CopyRight></div>
        </div> */
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">            
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  w-2/6" onSubmit={handleSubmit}>            
                <div className='flex justify-between'>
                    <Link to="/">
                        <CottageIcon sx={{ fontSize: 40 }}></CottageIcon>
                        <p><strong>Inicio</strong></p>
                    </Link>
                    <Link to="/login">
                        <LoginIcon sx={{ fontSize: 40 }}></LoginIcon>
                        <p><strong>Iniciar Sesión</strong></p>
                    </Link>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Contraseña nueva
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type={showPassword ? "password" : "text"} name='password'  onChange={handleChange} onClick={handleClick} autoComplete="on" placeholder="******************" />
                    <VisibilityOffIcon className='absolute top-5' onClick={handleShowPassword}></VisibilityOffIcon>                    
                </div>                
                <p className='text-red-600'>{errorPassword}</p>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Confirme Contraseña nueva
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type={showPasswordConfirm ? "password" : "text"} name='confirmpassword' onChange={handleChange} onClick={handleClick} placeholder="******************" />
                    <VisibilityOffIcon className='absolute top-5' onClick={handleShowPasswordConfirm}></VisibilityOffIcon>
                </div>
                <p className='text-red-600'>{errorConfirmPassword}</p>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
                        Enviar
                    </button>                    
                </div>
            </form>
            <CopyRight></CopyRight>
        </div>
    )
}
