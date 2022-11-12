import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import Transitions from '../../components/transition/Transition'

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <Transitions>
        <div className='container mx-auto'>
            <Header />
                <main>
                    <PageTitle
                        title="contacts"
                        subTitle="Contact us"
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

                    <section className='mb-8 mt-12 md:mt-0'>
                        <div className="text-3xl mb-4"><span className="text-gold">#</span>Contact Form</div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-8 w-full lg:w-1/2'>
                                <input 
                                    type="text"
                                    className='w-full bg-transparent border border-secondary h-9 p-1'
                                    placeholder='Name'
                                />
                                <input 
                                    type="email"
                                    className='w-full bg-transparent border border-secondary h-9 p-1'
                                    placeholder='Email'
                                />
                                <input 
                                    type="text"
                                    className='w-full bg-transparent border border-secondary h-9 p-1 col-span-2'
                                    placeholder='Title'
                                />
                                <textarea
                                    className='w-full bg-transparent border border-secondary h-[150px] p-1 col-span-2'
                                    placeholder='Message'
                                />
                            </div>
                            <button className='border border-gold px-4 py-2 font-medium mt-8 hover:bg-gold'>Send</button>
                        </form>
                    </section>
                </main>
            <Footer />
        </div>
    </Transitions>
  )
}

export default Contact
