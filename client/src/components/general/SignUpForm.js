import React, { useState, useRef, useEffect } from "react";
import "./SignUpForm.scss";
import axios from "axios";
import validation from "./validation";

const SignUpForm = ({
  trigger,
  setSignUpFormPopUp,
  setOpacity,
  setPosition,
}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validation(values));

    console.log(values);

    axios
      .post("http://localhost:3000/users/add/", values)
      .then((res) => console.log(res.data));

    setValues({
      email: "",
      password: "",
    });
  };

  return trigger ? (
    <>
      {setOpacity("20%")}
      <div className="signUpForm">
        <form onSubmit={(e) => submitHandler(e)} className="signUpForm">
          <div className="closeBtn">
            <button
              onClick={() => {
                setSignUpFormPopUp(false);
                setOpacity("100%");
                setPosition("");
              }}
            >
              X
            </button>
          </div>
          <div className="text-box">
            <h1>Coach online</h1>
            <p>Earn money on your schedule</p>
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={(e) => changeHandler(e)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={(e) => changeHandler(e)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="signUpBtn">
            Sign up with email
          </button>

          <p className="breakline">
            <div></div>
            <span>or continue with</span>
            <div></div>
          </p>
          <div className="btns">
            <button className="Facebook__btn">Facebook</button>
            <button className="Google__btn">Google</button>
          </div>
          <p className="gray__text">
            By signing up, you agree to Terms of Service and Privacy Policy
          </p>
        </form>
      </div>
    </>
  ) : (
    ""
  );
};

export default SignUpForm;