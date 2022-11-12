import React from 'react'

function Projects({iframesrc, toolsUsed, projectTitle, about, image}) {
  return (
    <div className=' w-full md:w-1/3 p-4'>
      <div className='border border-secondary text-secondary overflow-hidden'>
          <div>
              <img src={image} className="w-full" />
          </div>
          <p className='border-y border-y-secondary p-2'>{toolsUsed}</p>
          <article className='p-4'>
              <h4 className='text-2xl text-white'>{projectTitle}</h4>
              <p className='my-4'>{about}</p>
              <a href={iframesrc} className="inline-block py-2 px-4 text-white border border-gold">Live {"<~~>"}</a>
          </article>
      </div>
    </div>
  )
}

export default Projects
