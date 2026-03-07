import {React, useState} from 'react'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import CloseIcon from '@mui/icons-material/Close';
const NavBar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
      setNav(!nav)
  }

  const navItems = ["home", "projects", "skills","about", "contact"];

  const [active, setActive] = useState("home")
  const handlechange = (value) =>{
    setActive(value);
  }

  return (
    <div className='fixed z-50 top-0 w-full'>
      <nav className='w-full h-16 bg-black/40 text-white flex items-center justify-between px-4'>
        <div className='font-bold text-xl ml-2'>
          <a href="#home">VARUN</a>
        </div>
          <div className="hidden lg:flex gap-10 mr-5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => handlechange(item)}
                className={`capitalize transition-colors text-xl ${
                  active === item ? "text-white" : "text-gray-400"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <div onClick={handleNav} className='lg:hidden mr-2'>
             {nav ? <CloseIcon/> : <MoreVertTwoToneIcon/>}
          </div>
          <div  className={nav ? 'fixed left-0 top-0 w-67 h-screen bg-(--bg-card) text-white flex flex-col items-center gap-8' : 'hidden'}>
            <ul className="mt-15 text-xl">
              {navItems.map((item) => (
                <li
                  key={item}
                  onClick={() => handlechange(item)}
                  className={`my-10 capitalize ${
                    active === item ? "text-white" : "text-gray-400"
                  }`}
                >
                  <a onClick={handleNav} href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
      </nav>
    </div>
  )
}

export default NavBar