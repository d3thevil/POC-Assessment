import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setFullName, setAddress, setPostalCode, setPhoneNumber,setHighestEducation, setPassingYear, submitForm, resetForm} from "../Redux/formSlice";
import { formValid } from "./formValid";
import "./Form.css";

function Form() {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form);
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formValid(formData, setErrors)) {
            dispatch(submitForm());
            dispatch(resetForm());
            setFormSubmitted(true);
            setTimeout(() => setFormSubmitted(false), 3000);
        }
    };

    return (
        <div className="form-container">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" value={formData.fullName} onChange={(e) => dispatch(setFullName(e.target.value))} placeholder="Full Name"/>
                {errors.fullName ? <div className="error">{errors.fullName}</div> : null}

                <input type="text" value={formData.address} onChange={(e) => dispatch(setAddress(e.target.value))} placeholder="Address"/>
                {errors.address ? <div className="error">{errors.address}</div> : null}
                
                <input type="text"value={formData.postalCode} onChange={(e) => dispatch(setPostalCode(e.target.value))} placeholder="Postal Code"/>
                {errors.postalCode ? <div className="error">{errors.postalCode}</div> : null}
                
                <input type="text" value={formData.phoneNumber} onChange={(e) => dispatch(setPhoneNumber(e.target.value))} placeholder="Phone Number"/>
                {errors.phoneNumber ? <div className="error">{errors.phoneNumber}</div> : null}

                <input type="text" value={formData.highestEducation} onChange={(e) => dispatch(setHighestEducation(e.target.value))} placeholder="Highest Education"/>
                {errors.highestEducation ? <div className="error">{errors.highestEducation}</div> : null}

                <select value={formData.passingYear} onChange={(e) => dispatch(setPassingYear(e.target.value))}>
                    <option value="">Select Year</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
                {errors.passingYear ? <div className="error">{errors.passingYear}</div> : null}

                <button type="submit" className="submit-btn">Submit</button>
                {formSubmitted ? <div className="success-message">Form Submitted Successfully!</div> : null}
            </form>
        </div>
    );
}

export default Form;
