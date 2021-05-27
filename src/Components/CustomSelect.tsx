import React from "react";
import {ParamType} from "../Constants";
import '../index.css';


type CustomSelectProps = {
    property: ParamType;
    register: any
}

export const CustomSelect: React.FC<CustomSelectProps> = ({property, register}) => {
    const arrayOfProperties = Object.entries(property.params.values);
    return (
        <div className="input_container">
            <select  {...register(property.params.name)}>
                <option selected={true}>{property.params.name}</option>
                {arrayOfProperties.map((propCorttage) => <option  value={propCorttage[1]}>{propCorttage[0]}</option>)}
            </select>
        </div>
    )
}