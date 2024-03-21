import React from 'react'
import IgSvg from '../../Img/instagram.svg'
import LinkedinSvg from '../../Img/linkedin.svg'
import GitHubSvg from '../../Img/github.svg'

const Footer = () => {
    return (
        <footer className='max-sm:hidden flex flex-wrap mt-[60px] justify-around bg-[lightgreen] p-12 w-full text-red-500'>
            <div>
                <p className='font-bold'> Copyright © 2024 - Christian Salvati -</p>
                <p className='font-bold'>Developed by Christian Salvati</p>
            </div>

            <div className='flex gap-[10px] max-md:justify-center'>
                <a target='_blank' href="https://github.com/Tappobill"><img src={GitHubSvg} alt="Github"/></a>
                <a target='_blank' href="https://www.instagram.com/christian.salvati/"><img src={IgSvg} alt="Instagram"/></a>
                <a target='_blank' href="https://www.linkedin.com/in/christian-emilio-salvati-4a0100254/"><img src={LinkedinSvg} alt="Linkedin"/></a>
            </div>
            <div>
                <p className='font-bold '>Telefono: 3476106923</p>
                <p className='font-bold'>Mail: christian.salvati@hotmail.it</p>

            </div>
        </footer>
    )
}

export default Footer
