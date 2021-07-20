import React, { Fragment } from "react";
import InputTextField from '../../inputFields/inputText';

const FormUserDetails = ({ nextStep, handleChange, values }) => {

    const userFields = [
        {
            type: "email",
            name: "email",
            placeholder: "Username",
            defaultValue: values.email
        },
        {
            type: "password",
            name: "password",
            placeholder: "Password",
            defaultValue: values.password
        },
        {
            type: "password",
            name: "confirmPassword",
            placeholder: "Confirm Password",
            defaultValue: values.confirmPassword
        }
    ];

    return (
        <Fragment>
            <h4>Enter User Details</h4>
            <form>
                {userFields && userFields.map((eachField, index) => {
                    return (
                        <InputTextField key={index}
                            eachField={eachField}
                            handleChange={handleChange} />
                    )
                })}
                <button onClick={nextStep}>
                    Next
                </button>
            </form>
        </Fragment>
    );
};

export default FormUserDetails;