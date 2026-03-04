import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";

const contacts = [
     {
        id: 1,
        title: "Gmail",
        icon: <SiGmail size={40} />, 
        link: "https://mail.google.com/mail/?view=cm&to=Varun.exe17@gmail.com",
    }, 
    {
        id: 2,
        title: "LinkedIn",
        icon: <FaLinkedinIn size={40}  />,
        link: "https://www.linkedin.com/in/varun-suresh-dev",
    },
    {
        id: 3,
        title: "Github",
        icon: <IoLogoGithub size={40}  />,
        link: "https://github.com/varun-suvarna-17",
    },
    {
        id: 4,
        title: "Instagram",
        icon: <FaInstagram size={40} />,
        link: "https://www.instagram.com/varunn_suvarna",
    },
]
export  default contacts;