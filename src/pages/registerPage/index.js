import React, { useState } from "react";
import FormUserDetails from "../../components/userForm/formUserDetails";
import FormPersonalDetails from "../../components/userForm/formPersonalDetails";
import FormEducationDetails from "../../components/userForm/formEducationDetails";
import FormConfirmDetails from "../../components/userForm/confirmDetails";

const RegisterForm = () => {
    
    const [state, setstate] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        gender: "",
        fatherName: "",
        motherName: "",
        address: "",
        city: "",
        stateAddress: "",
        pinCode: "",
        mobileNumber: "",
        course: "",
        specialization: "",
        cgpa: "",
        step: 1,
    });

    const handelSubmit = () => {
        console.log(values);
        setstate({
            ...state,
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            gender: "",
            fatherName: "",
            motherName: "",
            address: "",
            city: "",
            stateAddress: "",
            pinCode: "",
            mobileNumber: "",
            course: "",
            specialization: "",
            cgpa: "",
            step: 1,
        });
    };

    // nextstep
    const nextStep = (e) => {
        e.preventDefault();
        const { step } = state;
        setstate({ ...state, step: step + 1 });
    };

    // previousStep
    const previousStep = (e) => {
        e.preventDefault();
        const { step } = state;
        setstate({ ...state, step: step - 1 });
    };

    const handleChange = (input) => (event) => {
        setstate({ ...state, [input]: event.target.value });
    };

    const { step } = state;
    const { email,
        password,
        confirmPassword,
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
        cgpa, } = state;

    const values = {
        email,
        password,
        confirmPassword,
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
        cgpa,
    };

    const handleSwitch = () => {
        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        values={values}
                        handleChange={handleChange}
                        nextStep={nextStep}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        values={values}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        previousStep={previousStep}
                    />
                );
            case 3:
                return (
                    <FormEducationDetails
                        values={values}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        previousStep={previousStep}
                    />
                );
            case 4:
                return <FormConfirmDetails
                    values={values}
                    previousStep={previousStep}
                    handelSubmit={handelSubmit} />;
            default:
                console.log(
                    "This is a multi-step form built with React. developed by Guddu !!"
                );
        }
    };
    return handleSwitch();
};

export default RegisterForm;