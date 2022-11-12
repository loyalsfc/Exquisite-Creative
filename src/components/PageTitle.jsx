
import React from 'react'

function PageTitle({title, subTitle}) {
  return (
    <div className='mt-[53px] mb-[68px]'>
        <h2 className='font-semibold text-3xl mb-3'><span className='text-gold'>/</span>{title}</h2>
        <p>{subTitle}</p>
    </div>
  )
}

export default PageTitle
