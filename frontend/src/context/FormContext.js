import {useContext,createContext, useState} from "react"
import {useForm} from 'react-hook-form';

export const FormContext=createContext();

const FormProvider=({children})=>{
    const methods=useForm({mode:"all"});
    const [step,setStep]=useState(0);
    const [data,setData]=useState({});
    const [toastDisplayed, setToastDisplayed] = useState(false); 
    
    

    const onStepChange=(newStep)=>{
        setStep(newStep);
    }
    const onStep=(x)=>{
        setToastDisplayed(x);
    }
    
    return(
        <FormContext.Provider value={{ step, onStepChange,data,setData,...methods,onStep,toastDisplayed}}>{/*spreading all the methods*/}
        {children}
       </FormContext.Provider>
    )
}
export const useStep = () => {
    return useContext(FormContext);
};
export default FormProvider;