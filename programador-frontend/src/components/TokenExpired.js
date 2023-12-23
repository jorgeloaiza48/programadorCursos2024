import React from 'react'
import ResetPassword from './ResetPassword'
import { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SyncIcon from '@mui/icons-material/Sync';
import { Link } from "react-router-dom"
import './tokenExpired.css'
import CopyRight from './copyRight/CopyRight';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function TokenExpired() {
  let URL = ""
  const [resetPassword, setResetpassword] = useState(false)
  const { id, token } = useParams() //useParams returns an object with value/key pairs of the dinamic params from the current URL

  URL = process.env.REACT_APP_ENVIRONMENT //Cuando se ejecuta npm start, se carga el archivo ".development.env" que a su vez carga el valor "http://localhost:3001"  Cuando se ejecuta "npm run build" se carga el archivo ".production.env"  que a su vez carga el valor "https://programador-backend.onrender.com"
  let options = {
    method: 'GET',
    headers: { "Content-Type": "Application/json" },
    // url:`http://localhost:3001/reset-password/${id}/${token}`
    //url:`https://programador-backend.onrender.com/reset-password/${id}/${token}`
    url: `${URL}/reset-password/${id}/${token}`
  }
  //fetch(`http://localhost:3001/reset-password/${id}/${token}`,options)
  axios(options)
    .then(response => {
      console.log("Response --->>> ", response)
      if (response.status === 200) {
        setResetpassword(true)
      }
    })
  if (resetPassword) {
    return <ResetPassword />
  }
  else {
    return (
      /*  <div className='DivbotonesEnlaceNoValido'>
         <div className='LinkOffIcon'><LinkOffIcon sx={{ fontSize: 120 }}></LinkOffIcon></div>
         <div><h1>¡El enlace ya no es válido!</h1></div>
         <div className='botonesEnlaceNoValido'>
           <Link to="/login"><button class="btn btn-primary">{<LoginIcon />} Iniciar sesión</button></Link>
           <Link to="/registro"><button class="btn btn-success" >{<PersonAddIcon />}Registrarse</button></Link>
           <div><Link to="/olvidoPassword"><button class="btn btn-warning" >{<SyncIcon />}Recuperar contraseña</button></Link></div>
         </div>
         <CopyRight></CopyRight>
       </div> */
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="/enlaceRoto.jpg" alt="Modern building architecture" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
            <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
        <CopyRight></CopyRight>
      </div>
    )
  }


}
