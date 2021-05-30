import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {calcInfoLevelWithScale, getInfoString} from "../utils";
import {finalInfoMap} from "../Constants";
import "../App.css"

export const ScaleForm: React.FC<{secureLevel: string}> = ({secureLevel}) => {
    const {handleSubmit, register} = useForm();
    const [finalInfo, setFinalInfo] = useState<number>()
    const onSubmit = (data: {scale: number}) => {
        setFinalInfo(calcInfoLevelWithScale(data.scale, secureLevel));
    }
    return (
        <>
        <form  className="input_container" onSubmit={handleSubmit(onSubmit)}>
            <select {...register("scale")}>
              <option value={1}>Федеральный</option>
                <option value={2}>Региональный</option>
                <option value={3}>Объектовый</option>
            </select>
            <div style={{marginLeft: "1rem"}}>
                <button  className="submit_button" type="submit">Submit</button>

            </div>
        </form>
            {finalInfo && <><h3>{getInfoString(finalInfo)}</h3> <div>{finalInfo && finalInfoMap.get(finalInfo)}</div></>}

        </>
    )
}