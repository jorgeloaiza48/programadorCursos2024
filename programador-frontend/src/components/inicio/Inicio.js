import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from "react-router-dom"
import CopyRight from '../copyRight/CopyRight';
import './inicio.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Inicio() {

    // const styles = {
    //     copyright: {
    //         color: "#2874A6",
    //         position: "fixed"
    //     },
    //     DivBotonesInicio:{
    //         display: "flex",
    //         flexdirection: "column",    
    //         padding: "50px",
    //         textalign: "center",
    //     }
    // }
    return (
        /*  <div className='DivBotonesInicio'>
             <div><CalendarMonthIcon sx={{ fontSize: 150 }}></CalendarMonthIcon></div>
             <div><h1>Programador de cursos</h1></div>
             <div className='botonesInicio'>
                 <div><Link to="/login"><button class="btn btn-primary btn-sm">{<LoginIcon />} Iniciar sesión</button></Link></div>
                 <div><Link to="/registro"><button class="btn btn-success btn-sm" >{<PersonAddIcon />}Registrarse</button></Link></div>
             </div>
 
            <div className='CopyRightInicio'><CopyRight></CopyRight></div>
 
         </div> */
        <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded-xl shadow-md max-w-2xl mx-auto grid h-screen place-items-center ">
            <div className=' rounded-xl p-8 '>
                <div className='flex flex-col justify-evenly pb-12 '>
                    <h2 className='text-center pb-24'>Programador de cursos 2024</h2>
                    <img class="h-48 w-full object-cover md:h-full md:w-48 mx-auto mb-6" src="/calendario.png" alt="Modern building architecture" />
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
                    <p class="block mt-1 text-lg leading-tight font-medium text-black">Con esta aplicación podrá llevar un control de la programación de los diferentes cursos en el mes.</p>
                    <div className='flex justify-between mt-20'>
                        <Link to="/login"><button class="btn btn-primary">{<LoginIcon />} Iniciar sesión</button></Link>
                        <Link to="/registro"><button class="btn btn-success" >{<PersonAddIcon />}Registrarse</button></Link>

                    </div>
                </div>
            </div>
            <CopyRight></CopyRight>
        </div>
    )
}

export default Inicio