import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/waleAdebProfile.png";
import { motion } from "framer-motion";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Adebayo Adewale
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            {/* <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="m-8 flex flex-col items-center gap-4 text-2xl lg:flex-row"
            >
              <a
                href="../constants/resume.pdf"
                className="flex items-center rounded bg-purple-600 px-4 py-2 text-xl text-white hover:bg-purple-700"
                download
              >
                Download CV 
              </a>
            </motion.div> */}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Adebayo Adewale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
