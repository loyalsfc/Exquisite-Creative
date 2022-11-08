import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div>
        <header className='flex items-center justify-between pt-8 pb-4' >
            <div className='flex items-center'>
                <img src={logo} className="h-5 mr-2 "/>
                <span className='font-bold'>Equisite Creative</span>
            </div>
            <nav>
                <ul className='text-secondary'>
                    <li className='mr-4 inline-block hover:text-gold hover:underline cursor-pointer text-white'><span className='text-gold'>#</span>home</li>
                    <li className='mx-4 inline-block hover:text-gold hover:underline cursor-pointer'><span className='text-gold'>#</span>works</li>
                    <li className='mx-4 inline-block hover:text-gold hover:underline cursor-pointer'><span className='text-gold'>#</span>about-us</li>
                    <li className='ml-4 inline-block hover:text-gold hover:underline cursor-pointer'><span className='text-gold'>#</span>contacts</li>
                </ul>
            </nav>    
        </header>
    </div>
  )
}

export default Header   