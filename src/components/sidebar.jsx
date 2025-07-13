import dp from '../assets/nn.jpg'
import * as Icons from "../icons"
import { useState, useEffect } from 'react'
import right from '../assets/right.png'

export function Sidebar(){
    const [tab, selecttab] = useState(0);
    const [open, setopen] = useState(false);
    const [isxl, setisxl] = useState(window.innerWidth >= 1280);

    useEffect(() => {
      const updateSize = () => setisxl(window.innerWidth >= 1280);
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);

    const showsidebar = isxl || open;


    return (
        <div className={`${showsidebar ? "w-65" : "w-13"} h-screen sm:block hidden shadow-2xl space-y-2 border-1 border-gray-100  transition-all delay-100 duration-100`}>
          <div className='xl:flex hidden justify-between p-4 h-16'>
            <div className='bg-[#01274e] rounded-lg flex items-center text-xs p-2 text-[#6dcede]'>
              Webinar.<span className='text-white'>gg</span>
            </div>
            <div className='h-16'>
              <img 
                src={dp}
                className='w-8 rounded-lg'
              />
            </div>
          </div>
          <div className=' xl:hidden block mx-auto h-16 translate-x-4 translate-y-7'>
              <div className='flex items-center text-xs cursor-pointer'>
                <img 
                  onClick={() => setopen(!open)}
                  className={`w-4 ${open ? "rotate-180" : "rotate-0"}`} 
                  src={right}
                />
              </div>
          </div>
          <Subsidebar title="Home" icon={Icons.Home} isSelected={tab === 0} onClick={() => selecttab(0)} showsidebar={showsidebar}/>
          <Subsidebar title="Webinars" icon={Icons.Webinar} isSelected={tab === 1} onClick={() => selecttab(1)} showsidebar={showsidebar}/>
          <Subsidebar title="Billings" icon={Icons.Billings} isSelected={tab === 2} onClick={() => selecttab(2)} showsidebar={showsidebar}/>
          <Subsidebar title="User Management" icon={Icons.User} isSelected={tab === 3} onClick={() => selecttab(3)} showsidebar={showsidebar}/>
          <Subsidebar title="Settings" icon={Icons.Settings} isSelected={tab === 4} onClick={() => selecttab(4)} showsidebar={showsidebar}/>
        </div>
    )
}



function Subsidebar({
    title,
    icon : Icon,
    isSelected,
    onClick,
    showsidebar
}){
    return (
        <div className='xl:px-4 px-1.5 cursor-pointer' onClick={onClick}>
            <div className={`flex justify-between items-center text-sm ${isSelected ? "bg-[#e0e6ec] text-[#02284f]" : "bg-white text-[#686868]"} py-2 xl:px-0 px-2 rounded-md`}>
              <div className={`${showsidebar ? "block ml-2.5" : "hidden" }`}>
                {title}
              </div>
              <Icon className={`w-5 h-5 ${showsidebar ? "mr-2.5 ml-0" : "mr-0 ml-0"}`}/>
            </div>
        </div>
    )
}