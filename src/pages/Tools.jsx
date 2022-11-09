import React from 'react'

function Tools({cat, tools}) {
  return (
    <div className='border border-secondary w-1/2 md:w-fit'>
        <h5 className='font-semibold text-white p-2 border-b border-b-secondary'>{cat}</h5>
        <p className='text-secondary p-2 text-secondary w-[178px]'>{tools}</p>
    </div>
  )
}

export default Tools
