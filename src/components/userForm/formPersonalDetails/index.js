import React, { Fragment } from "react";
import InputTextField from '../../inputFields/inputText';
import InputNumberField from '../../inputFields/inputNumber';

const FormPersonalDetails = ({ values, handleChange, nextStep, previousStep }) => {

    const personalFields = [
        {
            type: "text",
            name: "firstName",
            placeholder: "Firstname",
            defaultValue: values.firstName
        },
        {
            type: "text",
            name: "lastName",
            placeholder: "Lastname",
            defaultValue: values.lastName
        },
        {
            type: "text",
            name: "fatherName",
            placeholder: "Father Name",
            defaultValue: values.fatherName
        },
        {
            type: "text",
            name: "address",
            placeholder: "Address",
            defaultValue: values.address
        },
        {
            type: "text",
            name: "city",
            placeholder: "City",
            defaultValue: values.city
        },
        {
            type: "text",
            name: "stateAddress",
            placeholder: "State",
            defaultValue: values.stateAddress
        },
        {
            type: "number",
            name: "pinCode",
            placeholder: "Pin Code",
            defaultValue: values.pinCode
        },
        {
            type: "number",
            name: "mobileNumber",
            placeholder: "Mobile Number",
            defaultValue: values.mobileNumber
        },
    ];

    return (
        <Fragment>
            <h4>Enter Personal Details</h4>
            <form>
                {personalFields && personalFields.map((eachField, index) => {
                    return (
                        eachField.type === "number"
                            ? <InputNumberField key={index}
                                eachField={eachField}
                                handleChange={handleChange} />
                            : <InputTextField key={index}
                                eachField={eachField}
                                handleChange={handleChange} />
                    )
                })}
                <button onClick={previousStep}>
                    Previous
                </button>
                <button onClick={nextStep}>
                    Next
                </button>
            </form>
        </Fragment>
    );
};

export default FormPersonalDetails;