import { React } from 'react'
import PersonalInfo from './PersonalInfo'
import ResidencyInfo from './ResidencyInfo'
import FormHead from './FormHead'
import { useStep } from '../context/FormContext';
import BankVerify from './BankVerify'

import 'react-toastify/dist/ReactToastify.css';

const FormPage = ({ type }) => {
  console.log(type);
  const { step, onStepChange, setData, handleSubmit,} = useStep();
  

  const onSubmit = async (data) => {
    setData({ ...data, category: type});
    
    onStepChange(step + 1);
    
  };
  
  
  





  return (
    <div className='main-form'>
      {step % 4 < 4 && <FormHead />}{/*component for common header*/}
      <form onSubmit={handleSubmit(onSubmit)} className='input-group'>
        {/*break it into three  different components*/}
        

        {
          step % 4 === 1 && <PersonalInfo />
        }
        {
          step % 4 === 2 && <ResidencyInfo />
        }
        {
          step % 4 === 3 && <BankVerify />
        }
       
      </form>
    </div>
  )
}

export default FormPage
