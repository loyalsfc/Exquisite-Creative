import React from 'react'
import Footer from '../../components/Footer'
import Frame from '../../components/Frame'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import Transitions from '../../components/transition/Transition'
import exquisite from '../../assets/exquisite.png'
import Tools from '../Tools'


function About() {
  return (
    <Transitions>
        <div className='container mx-auto'>
            <Header />
            <main>
                <PageTitle
                    title="about-us"
                    subTitle="who are we?"
                />
                <section className=''>
                    <div className='flex items-center'>
                        <article className='text-secondary w-full md:w-1/2 shrink-0'>
                            <p>Hello, We are Exquisite Creative!</p>

                            <p className='my-4'>We are group of developers based in Leipzig, Germany. We can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>

                            <p>Transforming creativity and knowledge into a graphics design, websites etc are what we have been doingover a year. We have been helping various clients to establish their presence online.</p>
                        </article>
                        <div className='w-1/2 hidden md:block shrink-0 relative'>
                            <div className='absolute top-1/4 left-24 z-10'><Frame /></div>
                            <img src={exquisite}  className="skew-y-12 [clip-path:circle(35%)] -mt-12"/>
                            <div className='absolute bottom-1/4 right-20 z-10'><Frame /></div>
                        </div>
                    </div>
                </section>
                <section className='mb-8 mt-8 md:mt-0'>
                    <h2 className='text-3xl mb-8'><span className='text-gold'>#</span>skills</h2>
                    <div className='w-full flex flex-wrap md:items-start gap-y-4 md:gap-4 md:pl-4'>
                        <Tools 
                            cat="Languages"
                            tools="Typescript, Python, Javascript, Lua"
                        />
                        <Tools 
                            cat="Databases"
                            tools="SQLite PostgreSQL MongoDB"
                        />
                        <Tools 
                            cat="Others"
                            tools="HTML CSS EJS SCSS REST NIINJA"
                        />
                        <Tools 
                            cat="Tools"
                            tools="VSCode Remix Linux Figma Pycharm AdobeXD Photoshop Git FontAwesome"
                        />
                        <Tools 
                            cat="Frameworks"
                            tools="React Vue Express.js Node.js Solidity"
                        />
                    </div>
                </section>
            </main>
            <Footer />   
        </div>
    </Transitions>
  )
}

export default About
