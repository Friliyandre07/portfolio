import { HERO_CONTENT } from "../constants/data";
import profPict from "../assets/profPict.jpg";
import { motion } from "framer-motion";
import cvFile from "../assets/CV Frili.pdf";
import Marquee from "./Marquee"; // Import the Marquee component

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            {/* Add Marquee */}
            <Marquee />

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="pb-4 pt-16 pl-24 text-6xl font-roboto font-bold tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            FRILIYANDRE
                        </motion.h1>
                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="pl-24 bg-gradient-to-r from-amber-50 via-yellow-100 to-red-500 bg-clip-text text-4xl tracking-tight text-transparent font-bold"
                        >
                            Full-Stack Developer
                        </motion.span>

                        <a
                            href={cvFile}
                            download="Friliyandre_CV.pdf" // Nama file saat diunduh
                            className="relative inline-block mt-8 px-8 py-4 ml-24 bg-gray-950 text-white font-bold rounded-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-red-600 transition duration-300"
                        >
                            <span className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 animate-spin-border"></span>
                            <span className="relative">Download CV</span>
                        </a>
                        <style jsx>{`
                            @keyframes border-spin {
                                0% {
                                    background-position: 0% 50%;
                                }
                                100% {
                                    background-position: 200% 50%;
                                }
                            }
                            .animate-spin-border {
                                background-size: 200% 200%;
                                animation: border-spin 3s linear infinite;
                                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                                mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                                -webkit-mask-composite: destination-out;
                                mask-composite: exclude;
                            }
                        `}</style>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex justify-center relative z-10">
                        <img className="h-[500px] rounded-xl" src={profPict} alt="profile picture" />
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="absolute bottom-[78%] mt-20 ml-32">
                        <img className=" h-[500px] rounded-xl opacity-30" src={profPict} alt="profile picture" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
