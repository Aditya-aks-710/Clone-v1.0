
import * as Icons from "../icons"

export function Events() {
    return (
        <div className='lg:col-span-4 sm:col-span-3 h-fit w-full sm:translate-y-28 rounded-lg shadow-2xl border-1 border-gray-100'>
            <div className='flex items-center justify-between bg-[#eeeeee] m-4 py-1.5 px-2 rounded-md text-sm'>
                <div className='flex items-center gap-3 font-semibold'>
                    <Icons.Calender className='w-4.5'/>
                    Monday, 13 July 2025
                </div>
                <div className='flex items-center gap-3'>
                    <Icons.LeftArrow/>
                    <Icons.RightArrow/>
                </div>
            </div>
            <div className='divide-y-1 divide-gray-200'>
                <SubEvents/>
                <SubEvents/>
                <SubEvents/>
                <SubEvents/>
            </div>
        </div>
    )
}

function SubEvents(){
    return (
        <div className='flex gap-2 mx-5 py-1.5 last:mb-1'>
            <div>
                <div className='font-medium'>
                    11:30 AM
                </div>
                <div className='text-xs text-[#828282] font-medium'>
                    11:30 AM
                </div>
            </div>
            <div className="w-0.5 h-9 bg-[#3cddc8] m-1"></div>
            <div>
                <div className='flex items-center text-xs font-medium text-[#828282] gap-1'> 
                Live 
                <Icons.Video className='w-4 fill-red-500'/>
                </div>
                <div className='font-medium'>
                UX Webinar
                </div>
            </div>
        </div>
    )
}