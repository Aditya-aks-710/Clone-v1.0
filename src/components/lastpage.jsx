import { Events } from "./event";
import { Features } from "./feature";
import { Card } from "./profilecard";
import { Sidebar } from "./sidebar";
import wallpaper from '../assets/bg1.jpg';

export function LastPage(){
    return (
        <div className='flex flex-row'>
        <Sidebar/>
        <div className=' h-screen flex-1'>
          <div className='bg-red-500 sm:h-25 h-40 sm:block hidden overflow-hidden'>
            <img 
              src={wallpaper} 
              className='object-cover'
            />
          </div>
          <div className='bg-amber-300 h-12 sm:hidden block mb-10 '>
              Helllo
          </div>
          <div className='sm:grid lg:grid-cols-9 sm:grid-cols-6 flex flex-col sm:items-stretch items-center gap-8 ml-8 mr-8'>
            <Card/>
            <Events/>
            <Features/>
          </div>
        </div>
      </div>
    )
}