import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className='border-t border-t-secondary py-8 flex justify-between'>
        <div className='flex items-center'>
            <img src={logo} className="h-5 mr-2 "/>
            <span className='font-bold'>Equisite Creative</span>
        </div>
        <p className='text-secondary '>© Copyright 2022. Made by Exquisite Creative</p>
    </footer>
  )
}

export default Footer
