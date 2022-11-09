import logo from '../assets/logo.png'

function Header() {

    const hideMobileMenu = () => {
        document.querySelector('.mobile-menu').classList.toggle('-left-full')
    }
  return (
    <div>
        <header className='flex items-center justify-between pt-8 pb-4' >
            <div className='mobile-menu fixed bg-bg-primary h-screen w-4/5 border-r z-20 top-0 -left-full text-xl p-6 transition-all md:hidden'>
                <i className="fa-solid fa-xmark absolute right-6 top-8" onClick={hideMobileMenu}></i>
                <ul className='text-secondary mt-20'>
                    <li className='my-8  hover:text-gold hover:underline cursor-pointer text-white'><span className='text-gold'>#</span>home</li>
                    <li className='my-8  hover:text-gold hover:underline cursor-pointer'><span className='text-gold'>#</span>works</li>
                    <li className='my-8  hover:text-gold hover:underline cursor-pointer'><span className='text-gold'>#</span>about-us</li>
                    <li className='my-8  hover:text-gold hover:underline cursor-pointer'><span className='text-gold'>#</span>contacts</li>
                </ul>
            </div>
            <div className='flex items-center'>
                <img src={logo} className="h-5 mr-2 "/>
                <span className='font-bold'>Equisite Creative</span>
            </div>
            <nav className='hidden md:block'>
                <ul className='text-secondary'>
                    <li className='mr-4 inline-block hover:text-gold hover:underline cursor-pointer text-white'><span className='text-gold'>#</span>home</li>
                    <li className='mx-4 inline-block hover:text-gold hover:underline cursor-pointer'><span className='text-gold'>#</span>works</li>
                    <li className='mx-4 inline-block hover:text-gold hover:underline cursor-pointer'><span className='text-gold'>#</span>about-us</li>
                    <li className='ml-4 inline-block hover:text-gold hover:underline cursor-pointer'><span className='text-gold'>#</span>contacts</li>
                </ul>
            </nav>
            <i className="fa-solid fa-bars text-xl md:hidden" onClick={hideMobileMenu}></i>    
        </header>
    </div>
  )
}

export default Header   