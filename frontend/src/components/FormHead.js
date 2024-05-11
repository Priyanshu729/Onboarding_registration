import React from 'react'
import { arrow2 } from './Icon'
import { useStep } from '../context/FormContext'
const FormHead = () => {
  const {step,onStepChange}=useStep();
  return (
    <div className='step'>
        <div className='step-header'>
            <div className='step-header-container'>
             <div className='back-arrow'>
              <img src={arrow2} alt='not found'/>
             <button className='btn2' onClick={()=>{onStepChange(step>0?step-1:step)}}>Back</button>
              </div> 
            <div className='common_header'>
             <p>Step {step%4===0?step:step%4}/3</p>
             {step===1&&<h4>Personal Info</h4>}
             {step===2&&<h4>Residence Information</h4>}
             {step===3&&<h4>Bank Verification</h4>}
             </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default FormHead
