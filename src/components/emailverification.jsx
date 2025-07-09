import { useEffect, useState } from "react";
import { Button } from "./button";
import { OtpInputBox } from "./otp";
import timeimg from "../assets/time.png"

export function OtpInput({handleContinue, email, disabled, setdisabled}){
  

  return (
        <div className='w-screen h-screen flex flex-col items-center'>
        <div className='text-[#6dcede] text-2xl m-15'>
          Webinar.<span className='text-white'>gg</span>
        </div>
        <div className='text-[1.6rem] font-semibold text-white mb-10 mt-4'>
          Check Your Email For A Code
        </div>
        <div className='text-[#6382a5] text-sm m-3'>
          Please enter the verification code sent to your email id <span className="font-bold">{email}</span>
        </div>
        <div className='space-y-8'>
          <OtpInputBox
            disabled={disabled}
            setdisabled={setdisabled}
          />
          
          <Button 
            onClick={handleContinue} 
            disabled={disabled}
          />
        </div>
        <div className='text-[#6382a5] text-sm m-3'>
          Can't find the email? Click <a className="underline">here</a> to resend.
        </div>
      </div>
    )
}