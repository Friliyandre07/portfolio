import logo from "../assets/Logo.webp"
import {FaLinkedin} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="w-16 h-16"src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaInstagram />
        </div>
    </nav>
}

export default Navbar;