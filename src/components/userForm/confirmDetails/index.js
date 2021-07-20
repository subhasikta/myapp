import React, { Fragment } from "react";

const FormConfirmDetails = ({ previousStep, values, handelSubmit }) => {

    const { email,
        firstName,
        lastName,
        gender,
        fatherName,
        motherName,
        address,
        city,
        stateAddress,
        pinCode,
        mobileNumber,
        course,
        specialization,
        cgpa, } = values;

    return (
        <Fragment>
            <h4>Confirm your Details.</h4>
            <ul>
                <li>Email Id : {email}</li>
                <li>firstName : {firstName}</li>
                <li>LastName : {lastName}</li>
                <li>Gender : {gender}</li>
                <li>Father Name : {fatherName}</li>
                <li>Mother Name : {motherName}</li>
                <li>Address : {address}</li>
                <li>City : {city}</li>
                <li>State : {stateAddress}</li>
                <li>Pin Code : {pinCode}</li>
                <li>Mobile number : {mobileNumber}</li>
                <li>Course : {course}</li>
                <li>Specialization : {specialization}</li>
                <li>C.G.P.A : {cgpa}</li>
            </ul>
            <button onClick={previousStep}>
                Back
            </button>
            <button onClick={handelSubmit}>
                Submit
            </button>
        </Fragment>
    );
};

export default FormConfirmDetails;