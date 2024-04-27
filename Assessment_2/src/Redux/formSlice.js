import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    fullName: "",
    address: "",
    postalCode: "",
    phoneNumber: "",
    highestEducation: "",
    passingYear: "",
    submissions: [],
  },
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPostalCode: (state, action) => {
      state.postalCode = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setHighestEducation: (state, action) => {
      state.highestEducation = action.payload;
    },
    setPassingYear: (state, action) => {
      state.passingYear = action.payload;
    },
    submitForm: (state) => {
      const submission = {
        fullName: state.fullName,
        address: state.address,
        postalCode: state.postalCode,
        phoneNumber: state.phoneNumber,
        highestEducation: state.highestEducation,
        passingYear: state.passingYear,
      };
      state.submissions.push(submission);
    },
    resetForm: (state) => {
      state.fullName = "";
      state.address = "";
      state.postalCode = "";
      state.phoneNumber = "";
      state.highestEducation = "";
      state.passingYear = "";
    }
  },
});

export const {setFullName,setAddress,setPostalCode,setPhoneNumber,setHighestEducation,setPassingYear,submitForm,resetForm} = formSlice.actions;

export default formSlice.reducer;
