import * as Icons from "../icons"

export function Features(){
    return (
        <div className= 'lg:col-span-3 col-span-6 h-fit lg:translate-y-28 sm:translate-y-28 w-full rounded-lg shadow-2xl border-1 border-gray-100'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-3 grid-cols-1 lg:mb-0 mb-5'>
                <SubFeatures Icons={Icons.Schedule} title="Schedule a Webinar"/>
                <SubFeatures Icons={Icons.Add} title="Join a Webinar"/>
                <SubFeatures Icons={Icons.Recording} title="Open Recordings"/>
            </div>
        </div>
    )
}

function SubFeatures({
    Icons,
    title
}){
    return (
        <div className='flex flex-col justify-center items-center col-span-1 lg:last:mb-5'>
            <div className='bg-[#3cdbc9] rounded-md flex justify-center items-center h-14 w-15 mt-7'>
                <Icons className='w-9 fill-[#3cdbc9] py-1'/>
            </div>
            <span className='text-sm font-medium mt-2'>
                {title}
            </span>
        </div>
    )
}