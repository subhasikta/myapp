import React from "react";

const InputNumberField = ({ eachField, handleChange }) => {

    return (
        <div>
            <input
                type={eachField.type}
                name={eachField.name}
                placeholder={eachField.placeholder}
                defaultValue={eachField.defaultValue}
                onChange={handleChange(eachField.name)}
            />
        </div>
    );
};

export default InputNumberField;