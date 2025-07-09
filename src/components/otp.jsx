
import { useRef, useState, useEffect } from "react";
import timeimg from "../assets/time.png"

export function OtpInputBox({disabled, setdisabled}){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [timeLeft, settimeLeft] = useState(600);
    const [timeover, settimeover] = useState(false); 

    useEffect(() => {
        setdisabled(true);
        const timer = setInterval(() => {
        settimeLeft((prev) => {
            if(prev <= 1){
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

    return (
        <>
        <div className="flex justify-center flex-row space-x-2 mb-3">
            <SubOtpBox
                reference={ref1} 
                onDone={() => {
                    ref2.current.focus();
                }}
                onBack={() => {}}
                disabled={disabled}
                setdisabled={setdisabled}
            />
            <SubOtpBox
                reference={ref2} 
                onDone={() => {
                    ref3.current.focus();
                }}
                onBack={() => {
                    ref1.current.focus();
                }}
                disabled={disabled}
                setdisabled={setdisabled}
            />
            <SubOtpBox 
                reference={ref3} 
                onDone={() => {
                    ref4.current.focus();
                }}
                onBack={() => {
                    ref2.current.focus();
                }}
                disabled={disabled}
                setdisabled={setdisabled}
            />
            <SubOtpBox 
                reference={ref4} 
                onDone={() => {
                    ref5.current.focus();
                }}
                onBack={() => {
                    ref3.current.focus();
                }}
                disabled={disabled}
                setdisabled={setdisabled}
            />
            <SubOtpBox
                reference={ref5} 
                onDone={() => {
                    ref6.current.focus();
                }}
                onBack={() => {
                    ref4.current.focus();
                }}
                disabled={disabled}
                setdisabled={setdisabled}
            />
            <SubOtpBox
                reference={ref6} 
                onDone={() => {
                    setdisabled(false);
                }}
                onBack={() => {
                    ref5.current.focus();
                }}
                disabled={disabled}
                setdisabled={setdisabled}
            />
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
                }}
                className="bg-[#3cdbc9] text-white p-1  rounded">
                    Resend
                </button>
            </div>
        )}
        </>
    )
}

function SubOtpBox({
    reference,
    onDone,
    onBack,
    disabled,
    setdisabled
}){
    const [value, setValue] = useState("");

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