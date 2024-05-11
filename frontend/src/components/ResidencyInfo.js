import React from 'react'
import { lock } from './Icon'
import ReactFlagsSelect from "react-flags-select"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css';
import { useStep } from '../context/FormContext';
import { Controller } from 'react-hook-form';
const ResidencyInfo = () => {
  const { register, formState: { errors }, control,showMessage } = useStep();
  console.log(showMessage);
  return (
    <div>
      <div className='onboarding_right_subpart'>
        <h3>Complete Your Profile!</h3>
        <p>For the purpose of industry regulation, your details are required.</p>
      </div>
      <div className='input-group1'>
        <label>Phone number</label>
        <Controller
          control={control}
          name="phone"
          rules={{
            required: "Phone Number is required",
            pattern: {
              value: /(((\+)\b[1-9]{1,2}[-.]?)|(([^1-9]{2})[1-9]{1,2}[-.]?))?\d{3}[-.]?\d{3}[-.]?\d{4}(\s(#|x|ext|extension|e)?[-.:](\d{0,5}))?/g,
              message: "Phone Number is Invalid"
            }

          }}
          render={({ field: { ref, ...field } }) => (
            <PhoneInput
              {...field}
              inputExtraProps={{
                ref,
                required: true,
                autoFocus: true,
              }
              }
              country={"in"}
              countryCodeEditable={false}
            />
          )}
        />
        {/*Handling Errors*/}
        {errors.phone && (
          <div className="errors">{errors.phone.message}</div>
        )}
      </div>
      <div className='input-group1'>
        <label>Your address</label>
        <input {...register('address', { required: "Please enter your address", })} type='text' placeholder='Please enter address' />
        {/*...register means we spread all the past details and then push address in that*/}
        {errors.address && <div className='errors'>{errors.address.message}</div>}
      </div>

      <div className='input-group1'>
        <label>Country of residence</label>
        <div className='select'>
          <Controller
            control={control}
            name="country"
            rules={{
              required: true,
            }
            }
            render={({ field }) => (
              <ReactFlagsSelect
                selected={field.value}
                onSelect={(code) => field.onChange(code)}
              />
            )}
            />
            {errors.country && <div className='errors'>This field is required</div>}
            </div>
      </div>
      <button type="submit" className='btn btn-primary'>Save & Continue</button>
      <div className='lock'>
        <img src={lock} alt='not found' />
        <label style={{ color: '#8692A6', padding: '5px' }}>Your Info is safely secured</label>
      </div>
    </div>
  )
}

export default ResidencyInfo
