import React from 'react'
import aboutImg from '../Assets/Zaid-2.jpg'



const About = () => {
  return (
    <>
    
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='my-auto mx-6'>
          <h2 className='mb-4 text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>About Me</h2>
          <p className='text-left text-base lg:text-lg'>I am a passionate and detail-oriented web developer with a strong foundation in both front-end and back-end technologies. I specialize in creating modern, responsive websites and web applications that deliver seamless user experiences. With expertise in HTML, CSS, JavaScript, React.js, and Node.js, I bring designs to life through clean, efficient code while focusing on building scalable and maintainable solutions. On the front-end, I craft visually appealing, user-friendly interfaces using the latest technologies like React.js and Tailwind CSS, ensuring responsive designs across all devices. On the back-end, I develop robust server-side applications using Node.js, Express, and manage databases with MongoDB and SQL. I'm also proficient in version control tools like Git and GitHub for smooth collaboration and code management. Always striving to stay updated with the latest trends and best practices in web development, I am dedicated to solving complex problems, optimizing performance, and delivering impactful digital experiences that align with both user needs and business goals.</p>
        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} alt="" />
      </div>
    </div>
    
    
    
    </>
  )
}

export default About
