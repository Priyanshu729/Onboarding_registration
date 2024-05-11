import React, { useState} from 'react'
import {google} from './Icon'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { useStep } from '../context/FormContext';
const PersonalInfo = () => {
  
  const {register,formState:{errors},data}=useStep();
  console.log(data);
  const [type,setType]=useState("password");
  const [icon, setIcon] = useState(eyeOff);
  function handletoggle(){
    if(type==='password'){
      setType("text");
      setIcon(eye)
    }  else{
        setType("password");
        setIcon(eyeOff);
      }  
} 


  
 
   // Call the async function here

  // Call the async function here

  return (
    <div>

      <div className='onboarding_right_subpart'>
            <h3>Register Individual Account!</h3>
            <p>For the purpose of industry regulation, your details are required.</p>
      </div>
        <div className='input-group1'>
        <label>Your fullname*</label>
        {/*Using react hook form methods like register,errors,handleSubmit*/}
        <input 
        {...register("fullname",{
          required:"Please Enter Your Name",
          minLength:{
            value:3,
            message:"Name should be min of 3 length"
          }
          
        })}
        type='text' placeholder='Enter your Name' 
        />
        {/*Handling Errors*/}
          {errors.fullname && (
             <div className="errors">{errors.fullname.message}</div>
          )}
        
        </div>
        <div className='input-group1'>
        <label>Email address*</label>
        <input
        {...register("email",{
          required:"Email Address must be a valid Address",
          validate:{matchPattern:(value)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)||"Email must include @gmail.com",}
          
        })} 
        type='email' placeholder='Enter email address'/>
        {errors.email && (
             <div className="errors">{errors.email.message}</div>
          )}
        </div>
        <div className='input-group1'>
        <label>Create password*</label>
        <div className='password'>
        <input {...register('password',{
          required:"You must specify a password",
          minLength:{
            value:8,
            message:"Password must have at least 8 characters"
          },
          pattern:{
            value: '^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[/d]){1,})(?=(.*[/w]){1})(?!.*/s).{8,}$',
            message: "Password should contain at least one number and one special character"

          }
        })}type={type} name='password' placeholder='Enter the password'/>
        {errors.password && (
             <div className='errors'>{errors.password.message}</div>
        )}
        <label className='show' onClick={handletoggle}>
          <Icon icon={icon}/>
        </label>
        </div>
        </div>
        <div className='input-group1 check-group'>
        <input {...register('conditions', { required: true })} type='checkbox' />
        <label>I agree to terms & conditions*</label>
        </div>
        {errors.conditions && <div className='errors'>This field is required</div>}
        <div className='register_button'>
        <button type="submit" className='btn btn-primary' >Register Account</button>
        <label style={{ color: '#8692A6', padding: '5px' ,textAlign:'center'}}>Or</label>
        <div className='google'>
        <img src={google} alt='Not found'/>
        <button type="button" className='btn' >Register Account</button>
        </div>
        </div>
        
        
        
    </div>
  )
}

export default PersonalInfo;
