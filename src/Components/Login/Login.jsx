import React, { useState } from "react";
import google from "../../assets/loginandsignup/googlelogo.png";
import fbLogo from "../../assets/loginandsignup/fblogo.png";
import loginImage from "../../assets/loginandsignup/Rectangle 4.jpg";
import styles from "./Login.module.css";
import SignUp from "../SignUp/SignUp";

function Login() {
  const [showSignup, setShowSignup] = useState(false);

  if (showSignup) {
    return <SignUp />;
  }

  return (
    <>
      <div id="main-container">
        <div id="login-container" className={styles["login-container"]}>
          <div id="login-wrapper" className={styles["login-wrapper"]}>
            <div id="login-image" className={styles["login-image"]}>
              <img
                id="login-image-img"
                src={loginImage}
                alt="Login illustration"
              />
            </div>
            <div id="login-form" className={styles["login-form"]}>
              <div id="login-content" className={styles["login-content"]}>
                <h1
                  id="login-title"
                  className={styles["login-title"]}
                  style={{ textAlign: "left", marginTop: "8px" }}
                >
                  Welcome Back!
                </h1>
                <p
                  id="login-description"
                  className={styles["login-description"]}
                  style={{ color: "white", textAlign: "left", margin: "6px" }}
                >
                  How to I get started lorem ipsum dolor at?
                </p>
                {/* form */}
                <div id="external-login" className={styles["external-login"]}>
                  <div id="google-login" className={styles["google-login"]}>
                    <a
                      id="google-login-link"
                      href="#"
                      style={{ color: "white" }}
                    >
                      <div
                        id="google-login-content"
                        className={styles["google-login-content"]}
                      >
                        <img
                          id="google-login-img"
                          src={google}
                          alt="Google logo"
                          className={styles["google-icon"]}
                        />
                        <p id="google-text" className={styles["google-text"]}>
                          Login with <span>Google</span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div id="facebook-login" className={styles["facebook-login"]}>
                    <a
                      id="facebook-login-link"
                      href="#"
                      style={{ color: "white" }}
                    >
                      <div
                        id="facebook-login-content"
                        className={styles["facebook-login-content"]}
                      >
                        <img
                          id="facebook-login-img"
                          src={fbLogo}
                          alt="Facebook logo"
                          className={styles["facebook-icon"]}
                        />
                        <p
                          id="facebook-text"
                          className={styles["facebook-text"]}
                        >
                          Login with <span>Facebook</span>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  id="login-divider"
                  className={styles["login-divider"]}
                  style={{ color: "white" }}
                >
                  <div id="line1" className={styles["line"]}></div>
                  <span
                    id="or-text"
                    className={styles["or-text"]}
                    style={{ color: "white" }}
                  >
                    Or
                  </span>
                  <div id="line2" className={styles["line"]}></div>
                </div>

                <form id="login-form-element">
                  <div
                    id="username-wrapper"
                    className={[
                      styles["username-wrapper"],
                      styles["input-wrapper"],
                    ].join(" ")}
                  >
                    <label htmlFor="username" className={styles["input-label"]}>
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter your username"
                      className={styles["visually-hidden"]}
                    />
                  </div>
                  <div
                    id="password-wrapper"
                    className={[
                      styles["password-wrapper"],
                      styles["input-wrapper"],
                    ].join(" ")}
                  >
                    <label htmlFor="password" className={styles["input-label"]}>
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className={styles["visually-hidden"]}
                    />
                  </div>
                  <button
                    type="submit"
                    id="login-button"
                    className={styles["login-button"]}
                    style={{ fontSize: "18px" }}
                  >
                    Login
                  </button>
                  {/* login option */}
                  <p
                    id="signup-option"
                    style={{ color: "white", fontSize: "20px" }}
                    onClick={() => setShowSignup(true)}
                  >
                    Not a member?{" "}
                    <a id="signup-link" href="#" style={{ color: "white" }}>
                      Sign-up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
