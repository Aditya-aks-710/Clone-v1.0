
import React, { useRef, useState, useEffect } from "react";
import timeimg from "../assets/time.png"

export function OtpInputBox({otpLength, disabled, setdisabled}){
    const inputRefs = useRef([]);

    const [timeLeft, settimeLeft] = useState(600);
    const [timeover, settimeover] = useState(false);
    const [otpvalue, setotpvalue] = useState([]);
    
    useEffect(() => {
        const isComplete = otpvalue.every(val => val !== "");
        setdisabled(!isComplete);
    }, [otpvalue]);

    useEffect(() => {
        inputRefs.current = Array.from({length: otpLength}, () => React.createRef());
        setotpvalue(Array(otpLength).fill(""));
    }, [otpLength]);

    useEffect(() => {
        setdisabled(true);
        const timer = setInterval(() => {
        settimeLeft((prev) => {
            if(prev === 1){
            clearInterval(timer);
            settimeover(true);
            return 0;
            }
            return prev-1;
        })
        }, 1000);
        return () => clearInterval(timer);
    }, [timeover]);

    function time(seconds) {
        const min = Math.floor(seconds / 60).toString().padStart(2,'0');
        const sec = (seconds % 60).toString().padStart(2,'0');
        return `${min}:${sec}`;
    }

    function handleotpChange(ind, val){
        const updated = [...otpvalue];
        updated[ind] = val;
        setotpvalue(updated);
    }

    return (
        <>
        <div className="flex justify-center flex-row space-x-2 mb-3">
            {Array.from({length: otpLength}, (_, i) => (
                <SubOtpBox
                    key={i}
                    reference={inputRefs.current[i]}
                    value={otpvalue[i] || ""}
                    setValue={(val) => handleotpChange(i, val)}
                    onDone={() => {
                        if(i < otpLength - 1) {
                            inputRefs.current[i+1].current.focus();
                        }
                    }}
                    onBack={() => {
                        if(i > 0) {
                            inputRefs.current[i-1].current.focus();
                        }
                    }}
                    disabled={disabled}
                    setdisabled={setdisabled}
                />
            ))}
        </div>
        {!timeover && (
            <div className='text-[#6382a5] text-sm flex gap-1 items-center justify-center'>
                <img src={timeimg} className="w-3.5"/> <span>{time(timeLeft)}</span>
            </div>
        )}
        {timeover && (
            <div className='text-[#6382a5] text-sm flex gap-1 items-center justify-center'>
                <button 
                onClick={() => {
                    settimeover(false);
                    settimeLeft(600);
                    setotpvalue(Array(otpLength).fill(""));
                    inputRefs.current[0]?.current?.focus();
                }}
                className="bg-[#3cdbc9] text-white p-1 rounded cursor-pointer">
                    Resend
                </button>
            </div>
        )}
        </>
    )
}

function SubOtpBox({
    reference,
    value,
    setValue,
    onDone,
    onBack,
    disabled,
    setdisabled
}){
    // const [value, setValue] = useState("");

    function validator(e){
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            setValue(newValue);
            if(newValue.length !== 0){
                onDone();
            } else {
                setdisabled(true);
            }
        }
    }

    function handleKeyDown(e){
        if(e.key === "Backspace" && value === ""){
            e.preventDefault();
            onBack();
        }
    }

    return (
        <div>
            <input 
                value={value}
                type="text"
                ref={reference}
                onChange={validator}
                onKeyDown={handleKeyDown}
                maxLength={1}
                className="w-[30px] bg-[#18395f] h-[40px] rounded-xl px-2.5 outline-none text-white"
            />
        </div>
    )
}