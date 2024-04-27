export const formValid = (formData, setErrors) => {
    let isValid = true;
    const newErrors = {};
  
    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full Name is required.";
      isValid = false;
    } else if (!/^[A-Za-z\s]*$/.test(formData.fullName)) {
      newErrors.fullName = "Full Name must contain only letters and spaces.";
      isValid = false;
    }
  
    if (formData.address.trim() === "") {
      newErrors.address = "Address is required.";
      isValid = false;
    } else if (!/^[A-Za-z0-9\s,-]*$/.test(formData.address)) {
      newErrors.address =
        "Address can only contain letters, numbers, spaces, hyphens, and commas.";
      isValid = false;
    }
  
    if (formData.postalCode.trim() === "") {
      newErrors.postalCode = "Postal Code is required.";
      isValid = false;
    } else if (!/^[A-Za-z0-9]*$/.test(formData.postalCode)) {
      newErrors.postalCode = "Postal Code must be alphanumeric.";
      isValid = false;
    }
  
    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone Number is required.";
      isValid = false;
    } else if (
      !/^[0-9]*$/.test(formData.phoneNumber) ||
      formData.phoneNumber.length !== 10
    ) {
      newErrors.phoneNumber = "Phone Number must contain exactly 10 digits.";
      isValid = false;
    }
  
    if (formData.highestEducation.trim() === "") {
      newErrors.highestEducation = "Highest Education is required.";
      isValid = false;
    } else if (!/^[A-Za-z\s]*$/.test(formData.highestEducation)) {
      newErrors.highestEducation =
        "Highest Education must contain only letters and spaces.";
      isValid = false;
    }
  
    if (!formData.passingYear) {
      newErrors.passingYear = "Please select a Passing Year.";
      isValid = false;
    }
  
    setErrors(newErrors);
    return isValid;
  };
  