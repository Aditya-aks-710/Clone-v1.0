import dp from '../assets/nn.jpg'
export function Card(){
    return (
        <div className='bg-white lg:col-span-2 sm:col-span-3 h-75 sm:-translate-y-10 sm:w-full w-50 rounded-lg shadow-2xl flex flex-col items-center justify-center border-1 border-gray-100'>
            <img className='w-26 rounded-lg shadow-xl' src={dp}/>
            <div className='font-bold mt-4 mb-1.5'>Aditya Aryan</div>
            <div className='text-center text-xs font-medium text-[#828282] leading-5'>
            adityaaryan3012@gmail.com 
            <br />
            8709585870
            </div>
            <div className='text-center text-xs font-medium text-[#828282] mt-3'>Jamshedpur, India</div>
        </div>
    )
}