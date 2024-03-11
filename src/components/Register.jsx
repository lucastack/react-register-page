import Form from "./Form";
import SocialButton from "./SocialButton";
import Alert from "./Alert";
import { useState } from "react";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Register = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("unset");

  const handleFormSubmit = (
    userName,
    userPassword,
    userPasswordValidate,
    userEmail,
  ) => {
    if (
      userName === "" ||
      userPassword === "" ||
      userPasswordValidate === "" ||
      userEmail === ""
    ) {
      setAlertMessage("Complete all fields!");
      setAlertStatus("error");
      return false;
    }
    if (!validateEmail(userEmail)) {
      setAlertMessage("Invalid Email!");
      setAlertStatus("error");
      return false;
    }
    if (userPassword !== userPasswordValidate) {
      setAlertMessage("Passwords are not equal!");
      setAlertStatus("error");
      return false;
    }
    setAlertMessage("Registered Succesfully!");
    setAlertStatus("success");
    return true;
  };

  return (
    <div
      className="border rounded-4 text-center p-4 bg-white m-auto"
      style={{ width: "30%" }}
    >
      <div className="d-flex flex-column gap-3">
        <h1> Create an account </h1>
        <div className="d-flex w-75 m-auto gap-5">
          <SocialButton iconName="instagram" />
          <SocialButton iconName="github" />
          <SocialButton iconName="linkedin" />
        </div>
        <p> or use your email to register</p>
      </div>
      <Form handleFormSubmit={handleFormSubmit} />
      <Alert message={alertMessage} status={alertStatus} />
    </div>
  );
};

export default Register;
