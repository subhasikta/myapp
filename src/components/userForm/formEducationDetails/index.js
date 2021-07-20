import React, { Fragment } from "react";
import InputTextField from '../../inputFields/inputText';
import InputNumberField from '../../inputFields/inputNumber';

const FormEducationDetails = ({ values, handleChange, nextStep, previousStep }) => {

    const educationFields = [
        {
            type: "text",
            name: "course",
            placeholder: "Course",
            defaultValue: values.course
        },
        {
            type: "text",
            name: "specialization",
            placeholder: "Specialization",
            defaultValue: values.specialization
        },
        {
            type: "text",
            name: "cgpa",
            placeholder: "C.G.P.A",
            defaultValue: values.cgpa
        }
    ];

    return (
        <Fragment>
            <h4>Enter Education Details</h4>
            <form>
                {educationFields && educationFields.map((eachField, index) => {
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

export default FormEducationDetails;