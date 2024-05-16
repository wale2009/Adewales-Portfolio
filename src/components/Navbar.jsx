// import logo from "../assets/waleAdeLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img src={ logo } alt="logo" /> */}
                <h1 className=" mx-9 w-10 text-2xl">
                    WA
                </h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/adewale-adebayo-350778222/">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/wale2009">
                    <FaGithub />
                </a>
                <a href="https://x.com/wale9002?t=nbTgZ7qPNZybu0ZGVRnHGA&s=09">
                    <FaSquareXTwitter />
                </a>
                <a href="https://www.instagram.com/i_am_adewale9?igsh=emlzeTlybThzczB3">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;