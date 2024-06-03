import React, { useState } from "react";
import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";
import { Link } from "react-router-dom";

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [dateofjoining, setDateOfJoining] = useState(null);
  const [gender, setGender] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [empType, setEmpType] = useState(null);
  const [empStatus, setEmpStatus] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const MaritalStatus = [{ name: "Single" }, { name: "Married" }];

  const EmpStatus = [
    { name: "current" },
    { name: "Terminated" },
    { name: "On Leave" },
    { name: "Suspended" },
    { name: "Terminated" },
  ];
  const EmpType = [
    { name: "Full Time" },
    { name: "Part Time" },
    { name: "Freelancer" },
    { name: "Internship" },
    { name: "Probation" },
    { name: "Contract " },
  ];
  const items = [
    {
      label: "Personal Info",
    },
    {
      label: "Employee Details",
    },
    {
      label: "Bank Details",
    },
  ];

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailPattern.test(value));
  };

  const phoneNumberPattern = /^\d{10}$/; // Regular expression to validate phone number

  const isNextButtonDisabled = () => {
    return (
      !name ||
      !dateOfBirth ||
      !gender ||
      !maritalStatus ||
      !phoneNumber ||
      !emailValid ||
      !address
    );
  };

  return (
    <div className="card p-6">
      <Steps model={items} activeIndex={activeIndex} />

      {activeIndex === 0 && (
        <div className="mt-6">
          <div className="grid align-items-center">
            <div className="col-3 mt-3">
              <InputText
                placeholder="Name"
                keyfilter="alpha"
                id="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // className={!name ? "p-invalid" : ""}
              />
            </div>
            <div className="col-3 mt-3">
              <Calendar
                style={{ width: "100%" }}
                inputId="birth_date"
                value={dateOfBirth}
                placeholder="Date Of Birth"
                onChange={(e) => setDateOfBirth(e.value)}
              />
            </div>
            <div className="col-3 mt-3">
              <h6>Gender</h6>
              <div className="flex flex-wrap gap-3">
                <div className="flex ">
                  <RadioButton
                    inputId="genderMale"
                    name="gender"
                    value="Male"
                    onChange={(e) => setGender(e.value)}
                    checked={gender === "Male"}
                  />
                  <label htmlFor="genderMale" className="ml-2">
                    Male
                  </label>
                </div>
                <div className="flex align-items-center">
                  <RadioButton
                    inputId="genderFemale"
                    name="gender"
                    value="Female"
                    onChange={(e) => setGender(e.value)}
                    checked={gender === "Female"}
                  />
                  <label htmlFor="genderFemale" className="ml-2">
                    Female
                  </label>
                </div>
                <div className="flex align-items-center">
                  <RadioButton
                    inputId="genderTransgender"
                    name="gender"
                    value="Transgender"
                    onChange={(e) => setGender(e.value)}
                    checked={gender === "Transgender"}
                  />
                  <label htmlFor="genderTransgender" className="ml-2">
                    Transgender
                  </label>
                </div>
              </div>
            </div>
            <div className="col-3 mt-3">
              <Dropdown
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.value)}
                options={MaritalStatus}
                optionLabel="name"
                placeholder="Marital Status"
                className="w-full "
              />
            </div>
          </div>
          <div className="grid">
            <div className="col-3 mt-3">
              <InputNumber
                style={{ width: "100%" }}
                inputId="withoutgrouping"
                value={phoneNumber}
                onValueChange={(e) => setPhoneNumber(e.value)}
                useGrouping={false}
                keyfilter={/^[0-9]$/} // Only allows numeric input
                // className={
                //   !phoneNumber || !phoneNumberPattern.test(phoneNumber)
                //     ? "p-invalid w-full"
                //     : "w-full"
                // }
                placeholder="Phone Number"
              />
              {/* {!phoneNumber ||
                (!phoneNumberPattern.test(phoneNumber) && (
                  <small className="p-error">
                    Please enter a valid 10-digit phone number.
                  </small>
                ))} */}
            </div>
            <div className="col-3 mt-3">
              <InputText
                keyfilter="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                // className={!emailValid ? "p-invalid" : ""}
              />
              {/* {!emailValid && (
                <small className="p-error">
                  Please enter a valid email address.
                </small>
              )} */}
            </div>
            <div className="col-6 mt-3">
              <InputTextarea
                placeholder="Address"
                autoResize
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={1}
                cols={30}
              />
            </div>
          </div>
        </div>
      )}
      {activeIndex === 1 && (
        <div className="mt-6">
          <div className="grid">
            <div className="col-3 mt-3">
              <InputText keyfilter="pnum" placeholder="Emp ID" />
            </div>
            <div className="col-3 mt-3">
              <InputText keyfilter="alpha" placeholder="Department" />
            </div>
            <div className="col-3 mt-3">
              <InputText keyfilter="alpha" placeholder="Designation" />
            </div>
            <div className="col-3 mt-3">
              <Calendar
                style={{ width: "100%" }}
                inputId="birth_date"
                value={dateofjoining}
                placeholder="Date Of joining"
                onChange={(e) => setDateOfJoining(e.value)}
              />
            </div>
            <div className="col-3 mt-3">
              <Dropdown
                value={empStatus}
                onChange={(e) => setEmpStatus(e.value)}
                options={EmpStatus}
                optionLabel="name"
                placeholder="Employee Status"
                className="w-full "
              />
            </div>
            <div className="col-3 mt-3">
              <InputNumber
                inputId="currency-india"
                value={salary}
                onValueChange={(e) => setSalary(e.value)}
                mode="currency"
                currency="INR"
                currencyDisplay="code"
                locale="en-IN"
                placeholder="Salary"
                className="w-full"
              />
            </div>
            <div className="col-3 mt-3">
              <Dropdown
                value={empType}
                onChange={(e) => setEmpType(e.value)}
                options={EmpType}
                optionLabel="name"
                placeholder="Employement Type"
                className="w-full "
              />
            </div>
            <div className="col-3 mt-3"></div>
          </div>
        </div>
      )}
      {activeIndex === 2 && (
        <div className="mt-6">
          <div className="grid">
            <div className="col-3 mt-3">
              <InputText keyfilter="alphanum" placeholder="Bank Name" />
            </div>
            <div className="col-3 mt-3">
              <InputText keyfilter="alphanum" placeholder="Account Number" />
            </div>
            <div className="col-3 mt-3">
              <InputText keyfilter="alphanum" placeholder="IFSC Code" />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-content-between my-3">
        <Button
          disabled={activeIndex === 0}
          border-circle
          onClick={handlePrevious}
        >
          <i className="fi fi-rr-arrow-small-left"></i>
        </Button>
        <Button onClick={handleNext}>
          {activeIndex < items.length - 1 ? (
            <i className="fi fi-rr-arrow-small-right"></i>
          ) : (
            <Link to="/AllEmployee">
          
            <span style={{color:"white"}}>Save</span>
            </Link>
            // <i className="fi fi-rr-check"></i>
          )}
        </Button>
      </div>
    </div>
  );
}
