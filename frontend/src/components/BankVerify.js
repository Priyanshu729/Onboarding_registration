import {React} from 'react'
import { useStep } from '../context/FormContext';
import { green, red,lock} from './Icon';

import 'react-toastify/dist/ReactToastify.css';

const BankVerify = () => {
  const { register, formState: { errors },onStep} = useStep();
  const hello = () => {
    onStep(true); // Set formSubmitted to true when form is submitted
  }
  return (
    <div>
      <div className='onboarding_right_subpart'>
        <h3>Complete Your Profile!</h3>
        <p>For the purpose of industry regulation, your details are required.</p>
      </div>
      <div className='input-group1'>
        <label>Bank verification number (BVN)</label>
        <div className='password'>
          <input className="bank" type='number' placeholder='Please enter your account number'
            onWheel={(e) => e.currentTarget.blur()}
            {...register('accountNumber', {
              required: "Account number is required",
              pattern: {
                value: /^[0-9]{6,11}$/,
                /*account number range upto 11 numbers */
              }
            })}

          />
          {(errors.accountNumber && !errors.accountNumber.message) ? <img className='show green' src={red} alt="Not Found" /> : <img className='show green' src={green} alt="Not Found" />}
          {errors.accountNumber && <div className="errors">{errors.accountNumber.message}</div>}
        </div>

      </div>
      <button type="submit" onClick={hello} className='btn btn-primary btn-primary1'>Save & Continue</button>
      
      <div className='lock'>
        <img src={lock} alt='not found' />
        <label style={{ color: '#8692A6', padding: '5px' }}>Your Info is safely secured</label>
      </div>
    </div>
  )
}

export default BankVerify
