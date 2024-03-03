import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../services/axios";
import styles from "./Login.module.css"; // Assuming this path is correct

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailValidation.test(email));
    setIsPasswordValid(password.length > 8);
    setFormIsValid(isEmailValid && isPasswordValid);
  }, [email, password, isEmailValid, isPasswordValid]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      console.log("Form is invalid");
      return;
    }

    const userData = { email, password };

    axios
      .post("/auth/login", userData)
      .then((response) => {
        console.log("Login successful:", response);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Login error:", error.response.data);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.main_login_login}>
      <div className={styles.form_login}>
        <h2 className={styles.h2_des_login}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup_login}>
            <label htmlFor="email" className={styles.label_login}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input_login}
            />
            {!isEmailValid && (
              <p className={styles.error_login}>Email is not valid.</p>
            )}
          </div>
          <div className={styles.inputGroup_login}>
            <label htmlFor="password" className={styles.label_login}>
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input_login}
            />
            {!isPasswordValid && (
              <p className={styles.error_login}>
                Password must be longer than 8 characters.
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={!formIsValid}
            className={styles.button_login}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
