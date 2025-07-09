import { Button } from "./button";
import { InputBox } from "./input";
import { useEffect } from "react";

export function EmailInput({handleContinue, email, setemail, disabled, setdisabled}){
   
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  useEffect(() => {
    setdisabled(!isValidEmail(email));
  }, [email]);

  return (
        <div className='w-screen h-screen flex flex-col items-center'>
        <div className='text-[#6dcede] text-2xl m-15'>
          Webinar.<span className='text-white'>gg</span>
        </div>
        <div className='text-[1.6rem] font-semibold text-white mb-10 mt-4'>
          Lets get Started
        </div>
        {/* <div className='text-[#6382a5] text-sm m-3'>
          Please confirm your birth year. This data will not be stored.
        </div> */}
        <div className='space-y-8'>
          <InputBox
            type="email"
            placeholder={"Email Id"}
            parameter={email}
            setParameter={setemail}
          />
          <Button 
            onClick={handleContinue} 
            disabled={disabled}
          />
        </div>
      </div>
    )
}