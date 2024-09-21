import { HERO_CONTENT } from "../constants/data"
import profPict from "../assets/profPict.jpg"
import {motion} from "framer-motion"
const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 initial={{ x: -100, opacity: 0 }}
                        animate={{ x:0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }} className="pb-16 text-6xl font-roboto font-bold tracking-tight lg:mt-16
                        lg:text-8xl">FRILIYANDRE</motion.h1>
                        <span className="bg-gradient-to-r from-amber-50 via-yellow-100
                        to-red-500 bg-clip-text text-4xl tracking-tight text-transparent font-bold">Full-Stack Developer</span>
                        <motion.p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img className="h-[500px]" src={profPict} alt="profile pictuer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero