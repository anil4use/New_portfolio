import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import {  FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import About from './About';
import Project from './Project';
import Certificate from './Certificate';
import ContactUs from './ContactUs';
function Hero() {
  const typedContainerRef = useRef(null)
  useEffect(() => {
    const options = {
      strings: ["React Developer", "Web Developer", "Web Designer", "Frontend Developer", "Backend Developer",],
      typeSpeed: 150,
      backSpeed: 110,
      loop: true,
    };
    const typed = new Typed(typedContainerRef.current, options);

    return () => {
      typed.destroy();
    }
  }, [])

  return (


    <>
      <div className='changeTextColor container2'>
        <section className=' max-H-screen flex-col md:flex-row mt-20 anil flex-none md:mt-20 px-10   '>
          <div className='mx-auto flex flex-col  w-full md:w-5/6 max-w-7xl'>
            <div className='text-2xl  md:text-3xl text-white font-semibold '>Hello <span
              className=' text-4xl  text-pink-500'></span> <span className='text-pink-600'> its'me</span> </div>
            <h1 className=' text-white text-4xl md:text-8xl   md:my-10 font-bold'> Anil <span
              className='text-pink-600'>Anuragee </span> </h1>
            <h2 className=' text-white text-3xl md:text-3xl  my-4 md:my-10 font-bold'> And <span
              className='text-pink-600'>I'am</span> a 😎 </h2>
            <h1 className=' auto-type  ttt text-white text-6xl md:text-6xl font-bold'> <span
              ref={typedContainerRef}></span> </h1>
            <div className='md:flex  text-center  md:flex-row md:my-8  my-32'>
              <button type="button"
                className=" w-full md:mt-7 px  px-5  md:w-40 md:mx-2 text-white bg-gradient-to-r from-pink-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg   text-2xl  py-2.5 text-center mr-2 mb-2">Hire
                me </button>
              <button type="button"
                className=" w-full mt-10 md:mt-7 md:w-60 md:mx-2 text-white bg-gradient-to-r from-pink-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg   text-2xl px-5 py-2.5 text-center mr-2 mb-2">Download
                CV</button>
              {/* <button type="button"
              className=" w-full mt-10 md:mx-2 md:ml-16 text-white bg-gradient-to-r from-pink-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg   text-2xl px-5 py-2.5 text-center mr-2 mb-2">Download
              CV </button> */}
            </div>

          </div>
            <div className=' flex md:mr-40 md:flex-col content-center text-center items-center m-auto gap-5  md:gap-14 font-bold text-4xl  cursor-pointer   text-pink-600 '>
             <ul><li><a className=' hover:text-pink-400 '  href="#"> <FaFacebookF /> </a></li> </ul>
              <a className=' hover:text-pink-400 ' href="#"> <FaInstagram /> </a>
              <a className=' hover:text-pink-400 ' href="#"> <FaLinkedin /> </a>
              <a className=' hover:text-pink-400 ' href="#"> <FaGithub /> </a>
              <a className=' hover:text-pink-400 ' href="#"> <FaTwitter /> </a>
              <a className=' hover:text-pink-400 ' href="#"> <FaPinterest /> </a>
           
            </div>


        </section>
      </div>
<About/>
<Project/>
<Certificate/>
<ContactUs/>
    </>

  )
}

export default Hero