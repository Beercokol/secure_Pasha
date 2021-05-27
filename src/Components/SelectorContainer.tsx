import React from "react";
import "../App.css"
import {params, ParamType} from "../Constants"
import {CustomSelect} from "./CustomSelect";
import { useForm } from "react-hook-form";
import {calvInfoLever} from "../utils";

type SelectorContainerProps = {
    setSumValues: (i: number) => void;
    sumValues: number;
    setLevel: (str: string) => void;
}
type SelectorValuesProps = {
confidentiality: string | undefined;
integrity: string | undefined;
availability: string | undefined;
}

 export const SelectorContainer:React.FC<SelectorContainerProps> = ({setSumValues, sumValues, setLevel}) => {
     const { register, handleSubmit } = useForm();

    const onSubmit = (data: SelectorValuesProps) => {
        const dataValuesArray = Object.entries(data);
       if(dataValuesArray.some((el) => el[1] === el[0])){
           alert("Выберите все параметры")
       } else {
           sumValues = Object.values(data).reduce((acc, value) => acc + Number(value) , 0)
           setLevel(calvInfoLever(sumValues))
       }
    }

     return  (
       <form className="main_form" onSubmit={handleSubmit(onSubmit)}>
       {params.map((property:ParamType ) =>
       <CustomSelect property={property} register={register} />
    )}
           <div className="button_container">
               <button className="submit_button" type="submit">Submit</button>
           </div>
           </form>)
}