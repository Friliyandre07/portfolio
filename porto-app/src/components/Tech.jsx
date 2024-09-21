import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import {DiRedis} from "react-icons/di"
import {FaNodeJs} from "react-icons/fa"
import {motion} from "framer-motion"


const iconVar = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const Tech = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                variants={iconVar(2.5)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                 variants={iconVar(3)}
                 initial="initial"
                 animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <TbBrandNextjs className="text-7xl "/>
                </motion.div>
                <motion.div
                 variants={iconVar(5)}
                 initial="initial"
                 animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div
                 variants={iconVar(6)}
                 initial="initial"
                 animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <DiRedis className="text-7xl text-red-700"/>
                </motion.div>
                <motion.div
                 variants={iconVar(4)}
                 initial="initial"
                 animate="animate" className="rounded-2xl border-4 border-neutral-800 p4">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </motion.div>
            </div>
        </div>
    )
}

export default Tech