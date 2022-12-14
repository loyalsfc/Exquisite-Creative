import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
    const hideMobileMenu = () => {
        document.querySelector('.mobile-menu').classList.toggle('-left-full')
    }

    const activeHeader = (e) => {
        document.querySelectorAll('ul li').forEach(item=>{
            // console.log(item)
            item.classList.remove('text-white');
        })
        e.target.classList.add('text-white')
    }   

  return (
    <div>
        <header className='flex items-center justify-between pt-8 pb-4' >
            <div className='mobile-menu fixed bg-bg-primary h-screen w-4/5 border-r z-20 top-0 -left-full text-xl p-6 transition-all md:hidden'>
                <i className="fa-solid fa-xmark absolute right-6 top-8" onClick={hideMobileMenu}></i>
                <ul className='text-secondary mt-20'>
                    <Link to="/"><li className='home my-8  hover:text-gold hover:underline cursor-pointer text-white' onClick={activeHeader}><span className='text-gold'>#</span>home</li></Link>
                    <Link to="/project"><li className='project my-8  hover:text-gold hover:underline cursor-pointer' onClick={activeHeader}><span className='text-gold'>#</span>works</li></Link>
                    <Link to="/about"><li className='about my-8  hover:text-gold hover:underline cursor-pointer' onClick={activeHeader}><span className='text-gold'>#</span>about-us</li></Link>
                    <Link to="/contact"><li className='contact my-8  hover:text-gold hover:underline cursor-pointer' onClick={activeHeader}><span className='text-gold'>#</span>contacts</li></Link>
                </ul>
            </div>
            <Link to="/">
                <div className='flex items-center'>
                    <img src={logo} className="h-5 mr-2 "/>
                    <span className='font-bold'>Equisite Creative</span>
                </div>
            </Link>
            <nav className='hidden md:block'>
                <ul className='text-secondary'>
                    <Link to="/"><li className='home mr-4 inline-block hover:text-gold hover:underline cursor-pointer text-white' onClick={activeHeader}><span className='text-gold'>#</span>home</li></Link>
                    <Link to="/project"><li className='project mx-4 inline-block hover:text-gold hover:underline cursor-pointer' onClick={activeHeader}><span className='text-gold'>#</span>works</li></Link>
                    <Link to="/about"><li className='about mx-4 inline-block hover:text-gold hover:underline cursor-pointer' onClick={activeHeader}><span className='text-gold'>#</span>about-us</li></Link>
                    <Link to="/contact"><li className='contact ml-4 inline-block hover:text-gold hover:underline cursor-pointer' onClick={activeHeader}><span className='text-gold'>#</span>contacts</li></Link>
                </ul>
            </nav>
            <i className="fa-solid fa-bars text-xl md:hidden" onClick={hideMobileMenu}></i>    
        </header>
    </div>
  )
}

export default Header   