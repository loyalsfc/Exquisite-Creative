import React from 'react'
import Header from '../components/Header'
import exquisite from '../assets/exquisite.png'
import Projects from './Projects'
import Zomb from '../assets/zomb.PNG'
import proof from "../assets/proof.PNG"
import rate from "../assets/rate.PNG"
import Divider from './Divider'
import Frame from '../components/Frame'
import logo from "../assets/logo.png"
import Tools from './Tools'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='container mx-auto'>
        <Header />
        <div className='flex items-center flex-col-reverse md:flex-row'>
            <article className='md:w-1/2'>
                <h1 className='text-xl lg:text-3xl font-semibold mb-8'>Exquisite Creative is an IT firm that focuses on  <span className='text-gold'>Graphics Design</span>, <span className='text-gold'>Website Development</span>, <span className='text-gold'>BlockChain Development</span> and <span className='text-gold'>Solidity Development</span></h1>
                <p className='text-secondary'>We crafts appealing designs, responsive websites and reliable smart contracts where technologies meet creativity</p>
                <a href="https://t.me/Lucas_kingsley" className='border border-gold py-2 px-4 mt-6 font-medium inline-block'>Contact Us!!</a>
            </article>
            <div className='md:w-1/2'>
                <img src={exquisite}  className="[clip-path:circle(40%)]"/>
            </div>
        </div>
        <section className='mb-[106px]'>
            <div className='font-medium flex items-center mt-[112px] mb-12'>
                <Divider 
                    name="projects"
                />
                <span className='ml-auto'> view all <i className="fa-solid fa-arrow-right"></i></span>
            </div>

            <div className='flex items-start justify-between flex-wrap md:flex-nowrap gap-8'>
                <Projects 
                    iframesrc = "https://proofofinu.com/"
                    toolsUsed = "wordpress, elementor"
                    projectTitle = "Proof of Inu"
                    about = "A landing page for the Proof of Inu meme coin"
                    image={proof}
                />
                <Projects 
                    iframesrc = "https://zombeth.com/"
                    toolsUsed = "HTML, CSS, JavaScript & AOS"
                    projectTitle = "ZOMB"
                    about = "Zombeth Token landing page"
                    image={Zomb}
                />
                <Projects 
                    iframesrc = "https://piratemevbot.com/"
                    toolsUsed = "React, TailwindCSS, CSS, React Router, AOS"
                    projectTitle = "πrates"
                    about = "A trading BOT"
                    image={rate}
                />
            </div>
        </section>
        <section className='mb-20 md:mb-[112px]'>
            <Divider
                name="skills"
            />
            <div className='flex'>
                <div  className='w-2/5 h-[281px] relative hidden md:block'>
                    <div className='absolute left-4 top-8'><Frame /></div>
                    <img src={logo} className="w-[144px] h-[124px] absolute bottom-0 left-0"/>
                    <div className='h-[86px] w-[86px] border border-secondary absolute right-10'></div>
                    <div className='absolute right-0 bottom-8 border border-secondary h-[3.25rem] w-[3.25rem]'></div>
                    <div className='absolute left-1/2 top-1/2'><Frame /></div>
                 </div>
                 <div className='w-full md:w-3/5 flex flex-wrap md:items-start md:justify-end gap-y-4 md:gap-4 md:pl-4'>
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
                    {/* <Tools 
                        cat="Databases"
                        tools="SQLite PostgreSQL MongoDB"
                    /> */}
                    <Tools 
                        cat="Tools"
                        tools="VSCode Remix Linux Figma Pycharm AdobeXD Photoshop Git FontAwesome"
                    />
                    <Tools 
                        cat="Frameworks"
                        tools="React Vue Express.js Node.js Solidity"
                    />
                 </div>
            </div>
        </section>
        <section className='mb-20 md:mb-0'>
            <Divider
                name="about-us"
            />
            <div className='flex items-center'>
                <article className='text-secondary w-full md:w-1/2 shrink-0'>
                    <p>Hello, We are Exquisite Creative!</p>

                    <p className='my-4'>We are group of developers based in Leipzig, Germany. We can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>

                    <p>Transforming creativity and knowledge into a graphics design, websites etc are what we have been doingover a year. We have been helping various clients to establish their presence online.</p>

                    <button className='px-4 py-2 border mt-6 border-gold text-white hover:bg-gold'>Read more <i className="fa-solid fa-arrow-right"></i></button>
                </article>
                <div className='w-1/2 hidden md:block shrink-0 relative'>
                    <div className='absolute top-1/4 left-24 z-10'><Frame /></div>
                    <img src={exquisite}  className="skew-y-12 [clip-path:circle(35%)] -mt-12"/>
                    <div className='absolute bottom-1/4 right-20 z-10'><Frame /></div>
                </div>
            </div>
        </section>
        <section className='mb-10 md:mb-[113px]'>
            <Divider
                name="contacts"
            />
            <div className='flex flex-col md:flex-row justify-between text-secondary pt-11'>
                <article className='mb-4 md:mb-0'>
                    <p className='md:w-[500px]'>We are interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact us</p>
                </article>
                <article className='p-4 border border-secondary'>
                    <h4 className='text-white font-semibold mb-4'>Message us here</h4>
                    <p className='mb-4'><i className="fa-solid fa-envelope"></i> info@exquisitecreative.org</p>
                    <p><i className="fa-brands fa-telegram"></i> @lucas_kingsley</p>
                </article>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Home
