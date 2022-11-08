import React from 'react'

function Divider({name}) {
  return (
    <div className='flex items-center w-5/6 '>   
        <h4 className='mr-4 text-3xl'><span className='text-gold'>#</span>{name}</h4>
        <div className='bg-gold h-[1px] w-3/5'></div>
    </div>
  )
}

export default Divider
    