import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button'
import { InputBox } from './components/input'
import { EmailInput } from './components/email'
import { DobInput } from './components/birthyear'
import { OtpInput } from './components/emailverification'
import { LastPage } from './components/lastpage'


function App() {
  const [step, setstep] = useState(1);
  const [email, setemail] = useState('');
  const [dob, setdob] = useState('');
  const [disabled, setdisabled] = useState(true);
  
  function handleContinue(){
    if(step === 1){
      setstep(2);
    }
    else if(step === 2){
      setstep(3);
    }
    else if(step === 3){
      setstep(4);
    }
  }

  return (
    <>
    <div className='bg-[#00274e]'>
      {step === 1 && (
        <EmailInput
          handleContinue={handleContinue} 
          email={email} 
          setemail={setemail} 
          disabled={disabled} 
          setdisabled={setdisabled} 
        />
      )}

      {step === 2 &&  (
        <DobInput
          handleContinue={handleContinue}
          dob={dob} 
          setdob={setdob} 
          disabled={disabled} 
          setdisabled={setdisabled}
        />
      )}
      
      {step === 3 && (
        <OtpInput
          handleContinue={handleContinue} 
          email={email}
          disabled={disabled}
          setdisabled={setdisabled}
        />
      )}
      </div>
      {step === 4 && (
        <LastPage/>
      )}
    </>
  )
}



export default App
