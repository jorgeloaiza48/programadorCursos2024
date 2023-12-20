import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import './copyRight.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

export default function CopyRight() {

    return (
       /*  <div className='divFooter'> */
            <footer>
                <div className='iconsFooter'>
                    <a href='https://www.linkedin.com/in/jelm48/'><LinkedInIcon></LinkedInIcon></a>
                    <a href='https://github.com/jorgeloaiza48'><GitHubIcon></GitHubIcon></a>
                    <a href='https://www.facebook.com/jeloaiza2/'><FacebookIcon></FacebookIcon></a>
                    <a href='#'><GoogleIcon></GoogleIcon></a>
                </div>
                <h5><CopyrightIcon></CopyrightIcon> jelm48@misena.edu.co</h5>
            </footer>
       /*  </div> */
    )
}
