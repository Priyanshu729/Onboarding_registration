import "./App.css";
import { img1 } from "./components/Icon";
import FormPage from "./components/FormPage";
import FirstPage from "./components/FirstPage";
import { useStep } from "./context/FormContext";
import { React, useState,useEffect } from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { step,data,reset,toastDisplayed,watch,onStep} = useStep();
  const [type,settype]=useState("");
  console.log(toastDisplayed);
  const handletype=(val)=>{
    settype(val);
  }
  useEffect(() => {
    if (toastDisplayed) {
      const accountNumberValue = watch("accountNumber");
      const sendData = async () => {

        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        try {
          
          const res = await axios.post("/api/v1/users/register", {...data,accountNumber:accountNumberValue.toString()}, config);
          toast.success('Account Created Successfully');
          localStorage.setItem("userinfo", JSON.stringify(res.data));
           // Set toastDisplayed to true once displayed
        } catch (error) {
          toast.error('User Already Exist!!');
          console.log(error);
          localStorage.removeItem("userinfo");
        }
        reset({});
        
      };

      sendData();
      onStep(false); // Call the async function here
    }
  }, [toastDisplayed]);
  
  return (
    <div className="app">
      <div className="wrapper">
        <div className="onboarding_left_image">
          <img src={img1} alt="img" />
        </div>
        <div className="onboarding_right">
          {step%4 === 0 && <FirstPage onsubmit={handletype}/>}
          
          {step%4 > 0 && <FormPage type={type}/>}
          
          <ToastContainer/>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
