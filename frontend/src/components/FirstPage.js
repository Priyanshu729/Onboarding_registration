import React from 'react';
import { icon1, icon1_1, icon2, icon2_1, arrow } from './Icon';
import { useStep } from '../context/FormContext';
const FirstPage = ({onsubmit}) => {
  const { step, onStepChange} = useStep();
  const handleStepChange = (type) => ()=>{
    onsubmit(type);
    onStepChange(step + 1);
    
  };
  return (
    <>
      <p className='para'>Already have an account?<strong>Sign In</strong></p>
      <div className='onboarding_right_subpart'>
        <h3>Join Us!</h3>
        <p>To begin this journey, tell us what type of account you’d be opening.</p>
      </div>
      <div className='onboarding_right_subpart1'>
        <div className='onboarding_right_subpart2' onClick={handleStepChange('individual')}>
          <div className='container'>
            <img src={icon1} alt='Not Found' />{/*all icons imported from Images.js*/}
            <img src={icon1_1} className="icon" alt='Not Found' />
          </div>
          <div className='common_part'>
            <h4>Individual</h4>
            <p>Personal account to manage all you activities.</p>
          </div>

          <img className='arrow1' src={arrow} alt='Not Found' />


        </div>
        <div className='onboarding_right_subpart2' onClick={handleStepChange('business')}>
          <div className='container'>
            <img src={icon2} alt='Not Found' />
            <img src={icon2_1} className="icon" alt='Not Found' />
          </div>
          <div className='common_part'>
            <h4>Business</h4>
            <p>Own or belong to a company, this is for you.</p>
          </div>
          <img className='arrow1' src={arrow} alt='Not Found' />
        </div>
      </div>

    </>
  )
}

export default FirstPage
