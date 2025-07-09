import { useEffect } from "react";
import { Button } from "./button";
import { InputBox } from "./input";

export function DobInput({handleContinue, dob, setdob, disabled, setdisabled}){
    
    const currYear = new Date().getFullYear();

    function isValidDOB(year){
        if(year < 1900 || year > currYear){
            setdisabled(false);
            return false;
        }
        return true;
    }

    useEffect(() => {
        if(dob.trim() === ''){
            setdisabled(true);
        } else {
            if(isValidDOB(parseInt(dob))){
                setdisabled(false);
            } else {
                setdisabled(true);
            }
        }
    }, [dob]);

    return (
        <div className='w-screen h-screen flex flex-col items-center'>
        <div className='text-[#6dcede] text-2xl m-15'>
          Webinar.<span className='text-white'>gg</span>
        </div>
        <div className='text-[1.6rem] font-semibold text-white mb-10 mt-4'>
          Verify Your Age
        </div>
        <div className='text-[#6382a5] text-sm m-3'>
          Please confirm your birth year. This data will not be stored.
        </div>
        <div className='space-y-8'>
          <InputBox
            type="text"
            placeholder={"Your Birth Year"}
            parameter={dob}
            setParameter={setdob}
          />
          <Button
            onClick={handleContinue}
            disabled={disabled}
          />
        </div>
      </div>
    )
}