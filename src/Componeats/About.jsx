import React from 'react'

function About() {
  return (
    <div className=' bg-gray-900 p-10 pt-14  h-max   '>
      <div className='  text-white  max-w-max '>
        <div className=''>
          <div className='  font-bold  text-pink-600 text-4xl'>About US</div>
          <div className="text-center  selection:text-pink-600 bg-transparent p-8">
            <h1 className="text-4xl font-bold mb-4 text-pink-600">Anil Anuragee</h1>
            <p className="text-lg font-light text-white mb-6">
              Highly motivated B.Tech graduate in Computer Science Engineering from <span className=' text-pink-500'>Shri Krishna University Chhatarpur.</span>
            </p>
            <p className="text-xl font-serif text-gray-200 mb-8">
              I'm not your average computer science grad – I'm driven by a deep passion for web development and armed with a versatile skill set that truly sets me apart from the rest.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-pink-600">Front-End Wizardry</h2>
            <p className="text-lg font-light text-white mb-6">
              As a front-end developer, I'm an artistic virtuoso who weaves technical wizardry into captivating interfaces.
            </p>
            <p className="text-lg font-light text-white mb-6">
              My designs don't just look good; they feel exceptional, ensuring your users have a delightful experience.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-pink-600">Back-End Architect</h2>
            <p className="text-lg font-light text-white mb-6">
              On the back-end, I'm the architect of robust and scalable server-side applications that power your digital dreams.
            </p>
            <p className="text-lg font-light text-white mb-6">
              Whether it's crafting the perfect user journey or optimizing performance, I've got your back.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-pink-600">Passion for Learning</h2>
            <p className="text-lg font-light text-white mb-6">
              Fuelled by an insatiable passion for continuous learning, I'm a lifelong explorer of cutting-edge technologies and industry trends.
            </p>
            <p className="text-lg font-light text-white mb-6">
              Staying ahead of the curve is my mantra, guaranteeing you innovative solutions for every project.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-pink-600">Let's Collaborate!</h2>
            <p className="text-lg font-light text-white mb-6">
              I thrive on collaboration, eagerly accepting new challenges, and aspire to leave a lasting positive mark through my work.
            </p>
            <p className="text-lg font-light text-white mb-6">
              Let's connect, spark innovation, and create extraordinary digital experiences together!
            </p>

            <p className="text-lg font-light text-white mb-6">
              My journey in the world of technology has been an exciting one, and I'm excited to share it with you.
            </p>
          </div>


        </div>
      </div>
      <div className='pr-10 text-4xl font-bold  pb-5 text-pink-600 text-start '>Technical skill</div>
            <Skills skill={"React Js"} Percentage={"90%"} />
            <Skills skill={"Redux"} Percentage={"70%"} />
            <Skills skill={"HTML"} Percentage={"60%"} />
            <Skills skill={"CSS"} Percentage={"80%"} />
            <Skills skill={"Java Script"} Percentage={"70%"} />
            <Skills skill={"Node js"} Percentage={"83%"} />
            <Skills skill={"Expres js"} Percentage={"90%"} />
            <Skills skill={"Mongo DB"} Percentage={"70%"} />
            <Skills skill={"Tailwind CSS"} Percentage={"60%"} />
            <Skills skill={"Chakra UI"} Percentage={"90%"} />


    </div>
  )
}

export default About

const Skills = ({ skill, Percentage }) => {
  return (
    <div className='md:px-10'>

    <div className=' min-w-full'>

      <div className="flex justify-between mb-2">
        <span className="text-base font-medium text-pink-700 dark:text-white">{skill}</span>
        <span className="text-sm font-medium text-pink-700 dark:text-white">{Percentage}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-pink-600 h-2.5 rounded-full " style={{ width: Percentage }}></div>
      </div>
      </div>

    </div>
  )

}