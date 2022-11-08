import React from 'react'
import Header from '../components/Header'
import exquisite from '../assets/exquisite.png'
import Projects from './Projects'
import Zomb from '../assets/zomb.png'
import proof from "../assets/proof.png"
import rate from "../assets/rate.png"
import Divider from './Divider'

function Home() {
  return (
    <div className='container mx-auto'>
        <Header />
        <div className='mt-10 flex items-center'>
            <article className='w-1/2'>
                <h1 className='text-3xl font-semibold mb-8'>Exquisite Creative is an IT firm that focuses on  <span className='text-gold'>Graphics Design</span>, <span>Website Development</span>, <span className='text-gold'>BlockChain Development</span> and <span className='text-gold'>Solidity Development</span></h1>
                <p className='text-secondary'>We crafts appealing designs, responsive websites and reliable smart contracts where technologies meet creativity</p>
                <a href="https://t.me/Lucas_kingsley" className='border border-gold py-2 px-4 mt-6 font-medium inline-block'>Contact Us!!</a>
            </article>
            <div className='w-1/2'>
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

            <div className='flex items-start justify-between gap-8'>
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
        <section>
            <Divider
                name="skills"
            />
            <div className='flex'>
                <div  className=''>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
