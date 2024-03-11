import { useState } from "react";

const Form = ({ handleFormSubmit }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordValidate, setUserPasswordValidate] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleFormSubmitWrapper = (event) => {
    event.preventDefault();
    const isSubmitSuccessful = handleFormSubmit(
      userName,
      userPassword,
      userPasswordValidate,
      userEmail,
    );
    if (isSubmitSuccessful) {
      setUserName("");
      setUserPassword("");
      setUserPasswordValidate("");
      setUserEmail("");
    }
  };

  return (
    <form onSubmit={handleFormSubmitWrapper}>
      <div className="form-group">
        <input
          className="form-control mb-3"
          name="userName"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="form-control mb-3"
          name="userEmail"
          placeholder="youremail@example.com"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          name="userPassword"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          autoComplete="on"
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm your password"
          name="userPasswordValidate"
          value={userPasswordValidate}
          onChange={(e) => setUserPasswordValidate(e.target.value)}
          autoComplete="on"
        />
        <button className="btn btn-dark mt-3 w-100" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default Form;
