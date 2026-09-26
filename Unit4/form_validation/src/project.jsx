import React, { useState } from "react";
import "./project.css";
export default function Project() {
  const [form, setForm] = useState({
    username: "",
    aadhaarName: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    nationality: "",
    permanentAddress: "",
    permanentCity: "",
    permanentPincode: "",
    temporaryAddress: "",
    temporaryCity: "",
    temporaryPincode: "",
    occupation: "",
    alternateMobile: "",
  });
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setSuccess("");
  };
  const validate = () => {
    const err = {};
    if (!form.username.trim())
      err.username = "Enter username";
    if (!form.aadhaarName.trim())
      err.aadhaarName = "Enter Aadhaar name";
    else if (
      form.username.trim().toLowerCase() !==
      form.aadhaarName.trim().toLowerCase()
    ) {
      err.username = "Names do not match";
      err.aadhaarName = "Names do not match";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter valid email";
    if (!/^\d{10}$/.test(form.mobile))
      err.mobile = "Enter exactly 10 digits";
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        form.password
      )
    ) {
      err.password =
        "8+ chars, uppercase, lowercase, number and symbol required";
    }
    if (form.password !== form.confirmPassword)
      err.confirmPassword = "Passwords do not match";
    if (!form.permanentAddress.trim())
      err.permanentAddress = "Enter permanent address";
    if (!form.permanentCity.trim())
      err.permanentCity = "Enter city";
    if (!/^\d{6}$/.test(form.permanentPincode))
      err.permanentPincode = "Enter 6-digit pincode";
    if (!photo)
      err.photo = "Upload a photo";
    return err;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) {
      if (err.username || err.aadhaarName) {
        document.getElementById("username")?.focus();
      }
      return;
    }
    setSuccess("Registration successful!");
  };
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        photo: "Only JPG or PNG allowed",
      }));
      e.target.value = "";
      setPhoto(null);
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        photo: "Maximum photo size is 2 MB",
      }));
      e.target.value = "";
      setPhoto(null);
      return;
    }
    setPhoto(file);
    setErrors((prev) => ({ ...prev, photo: "" }));
  };
  const resetForm = () => {
    setForm({
      username: "",
      aadhaarName: "",
      email: "",
      countryCode: "+91",
      mobile: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      nationality: "",
      permanentAddress: "",
      permanentCity: "",
      permanentPincode: "",
      temporaryAddress: "",
      temporaryCity: "",
      temporaryPincode: "",
      occupation: "",
      alternateMobile: "",
    });
    setPhoto(null);
    setErrors({});
    setSuccess("");
    const input = document.getElementById("photo");
    if (input) input.value = "";
  };
  const inputField = (name, label, type = "text", required = false) => (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={form[name]}
        onChange={handleChange}
        required={required}
      />
      {errors[name] && (
        <small className="error">{errors[name]}</small>
      )}
    </div>
  );
  return (
    <div className="page">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Unique Registration Form</h1>
        <p className="subtitle">Enter your details</p>
        <h2>Personal Details</h2>
        <div className="form-grid">
          {inputField("username", "Username", "text", true)}
          {inputField("aadhaarName", "Aadhaar Name", "text", true)}
          {inputField("email", "Email", "email", true)}
          <div className="form-group">
            <label>Mobile Number <span>*</span></label>
            <div className="phone-field">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                name="mobile"
                type="text"
                placeholder="10 digit number"
                maxLength="10"
                value={form.mobile}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    mobile: e.target.value.replace(/\D/g, ""),
                  }))
                }
              />
            </div>
            {errors.mobile && (
              <small className="error">{errors.mobile}</small>
            )}
          </div>
          {inputField("password", "New Password", "password", true)}
          {inputField("confirmPassword", "Confirm Password", "password", true)}
          {inputField("dob", "Date of Birth", "date")}
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
          {inputField("nationality", "Nationality")}
        </div>
        <h2>Permanent Address</h2>
        <div className="form-grid">
          {inputField("permanentAddress", "Full Address", "text", true)}
          {inputField("permanentCity", "City", "text", true)}
          {inputField("permanentPincode", "Pincode", "text", true)}
        </div>
        <h2>Temporary Address</h2>
        <div className="form-grid">
          {inputField("temporaryAddress", "Full Address")}
          {inputField("temporaryCity", "City")}
          {inputField("temporaryPincode", "Pincode")}
        </div>
        <h2>Other Details</h2>
        <div className="form-grid">
          {inputField("occupation", "Occupation")}
          {inputField("alternateMobile", "Alternate Mobile")}
        </div>
        <div className="form-group">
          <label>Upload Photo <span>*</span></label>
          <input
            id="photo"
            type="file"
            accept="image/jpeg,image/png"
            onChange={handlePhoto}
          />
          <small>JPG/PNG only, maximum 2 MB</small>
          {errors.photo && (
            <small className="error">{errors.photo}</small>
          )}
          {photo && <small>{photo.name}</small>}
        </div>
        <p className="required-note">* Required fields</p>
        {success && <p className="success">{success}</p>}
        <div className="button-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button
            type="button"
            className="reset-btn"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}