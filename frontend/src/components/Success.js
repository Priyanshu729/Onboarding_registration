import React,{useEffect} from 'react';
import axios from 'axios';
import { useStep } from '../context/FormContext';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Success = () => {
  const {data}=useStep();
  useEffect(() => {
    const sendData = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      try {
        const res = await axios.post("/api/users/register",data,config);
        toast.success('Account Created Successfully');
        localStorage.setItem("userinfo", JSON.stringify(res.data));
        
      }
      catch (error) {
        toast.error('User Already Exist!!');
        console.log(error);
      }
    };

    sendData(); // Call the async function here
  }, [data]);

  return (
    <div className='success'>
      <ToastContainer/>
      <label className='success_1'>Congratulations🎉🎉You have successfully created your account</label>
    </div>
  );
};

export default Success;
