import React from 'react'
import Projects from '../Projects'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import Transitions from '../../components/transition/Transition'

import Zomb from '../../assets/zomb.jpg'
import Crappo from "../../assets/crappo.jpg"
import rate from "../../assets/rate.jpg"
import dev from "../../assets/dev.jpg"
import rekt from "../../assets/rekt.jpg"
import exquiste from "../../assets/exquisite.jpg"
import Footer from '../../components/Footer'


function Project() {
  return (
    <Transitions>
        <div className='container mx-auto'>
            <Header />
            <main className='mb-[68px]'>
                <PageTitle title="project" subTitle="List of our projects" />
            </main>
            <section>
                <h2 className='text-2xl'><span className='text-gold'>#</span>complete-apps</h2>
                <div className='flex items-start justify-between flex-wrap'>
                    <Projects 
                        iframesrc = "https://eloquent-banoffee-589077.netlify.app/"
                        toolsUsed = "React, CSS, AOS"
                        projectTitle = "Crappo"
                        about = "A platform to invest in cryptocurrency and as well buying and selling"
                        image={Crappo}
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
                    <Projects 
                        iframesrc = "https://www.devdoingsomething.org/"
                        toolsUsed = "React, CSS, Next, AOS"
                        projectTitle = "Dev Doing Something"
                        about = "A Safety and Optimization Platform FOR INVESTORS"
                        image={dev}
                    />
                    <Projects 
                        iframesrc = "https://rekt-app.netlify.app/"
                        toolsUsed = "Next, TailwindCSS, CSS, AOS"
                        projectTitle = "Rekt"
                        about = "The only crypto tools"
                        image={rekt}
                    />
                    <Projects 
                        iframesrc = "#"
                        toolsUsed = "React, Tailwind CSS, Framer Motion, React Router"
                        projectTitle = "Exquisite Creative"
                        about = "This site you are viewing"
                        image={exquiste}
                    />
                </div>
            </section>
        </div>
        <Footer />
    </Transitions>
  )
}

export default Project
