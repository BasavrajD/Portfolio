import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import Hero_img from '../assets/profile.png';
// import { ComputersCanvas } from "./canvas";


const ServiceCard = ({ index, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={Hero_img}
          alt='web-development'
          className='w-55 h-55 object-contain'
        />

      </div>
    </motion.div>
  </Tilt>
);

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Basavraj</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop graphic designs, <br />
            user interfaces and web applications
          </p>
          <div className="mt-5 flex">
            <a
              className="py-2 mr-7 "
              href="https://www.linkedin.com/in/basavraj-dhamanage-493920262/"
            >
              <svg
                class="h-10 w-10 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#915eff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                <rect x="2" y="9" width="4" height="12" />{" "}
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              className="py-2 mr-7"
              href="https://www.instagram.com/_basav.raj_/"
            >
              <svg class="h-10  w-10 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="#915eff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              
            </a>
            <a
              className="py-2 mr-7"
              href="https://github.com/BasavrajD"
            >
              <svg class="h-10  w-10 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="#915eff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              
            </a>
            <a
              className="py-2 mr-7"
              href="https://dribbble.com/BasavrajD"
            >
              <svg class="h-10 w-10 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="#915eff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg>
              
            </a>
          </div>
          <div className="mt-5 w-[265px] hover:text-black cursor-pointer">
            <a href="src\assets\Resume\sep_updated.pdf" className="text-[20px] mt-2 rounded bg-[#915eff] px-4 py-2 flex " style={{fontWeight: 700}}>Download Resume &nbsp; <svg class="h-8 w-8 text-red-500 hover:stroke-black"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="8 17 12 21 16 17" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg></a>
          </div>
        </div>

        <div className="mt-10 ml-20 hidden sm:block">
          <ServiceCard/>
        </div>
      </div>
      {/* <ComputersCanvas/> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;



