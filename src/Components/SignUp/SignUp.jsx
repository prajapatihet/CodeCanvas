import React from "react";
import google from "../../assets/loginandsignup/googlelogo.png";
import fbLogo from "../../assets/loginandsignup/fblogo.png";
import loginImage from "../../assets/loginandsignup/Rectangle 4.jpg";
import styles from "./SignUp.module.css";

function SignUp() {

  return (
    <div id="main-container">
      <div id="register-container" className={styles["login-container"]}>
        <div id="register-wrapper" className={styles["login-wrapper"]}>
          <div id="register-image" className={styles["login-image"]}>
            <img
              id="register-image-img"
              src={loginImage}
              alt="Login illustration"
            />
          </div>
          <div id="register-form" className={styles["login-form"]}>
            <div id="register-content" className={styles["login-content"]}>
              <h1
                id="register-title"
                className={styles["login-title"]}
                style={{ textAlign: "left", marginTop: "8px" }}
              >
                Get Started Now{" "}
              </h1>
              <p
                id="register-description"
                className={styles['login-description']}
                style={{ color: "white", textAlign: "left", margin: "6px" }}
              >
                How to i get started lorem ipsum dolor at?
              </p>
              {/* external login */}
              <div id="register-external-login" className={styles['external-login']}>
                <div id="register-google-login" className={styles['google-login']}>
                  <a
                    id="register-google-login-link"
                    href="#"
                    style={{ color: "white" }}
                  >
                    <div
                      id="register-google-login-content"
                      className={styles['google-login-content']}
                    >
                      <img
                        id="register-google-icon"
                        src={google}
                        alt="Google logo"
                        className={styles['google-icon']}
                      />
                      <p id="register-google-text" className={styles['google-text']}>
                        Login with <span>Google</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div id="register-facebook-login" className={styles['facebook-login']}>
                  <a
                    id="register-facebook-login-link"
                    href="#"
                    style={{ color: "white" }}
                  >
                    <div
                      id="register-facebook-login-content"
                      className={styles['facebook-login-content']}
                    >
                      <img
                        id="register-facebook-icon"
                        src={fbLogo}
                        alt="Facebook logo"
                        className={styles['facebook-icon']}
                      />
                      <p id="register-facebook-text" className={styles['facebook-text']}>
                        Login with <span>Facebook</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                id="register-divider"
                className={styles['login-divider']}
                style={{ color: "white" }}
              >
                <div id="register-line1" className={styles["line"]}></div>
                <span
                  id="register-or-text"
                  className={styles["or-text"]}
                  style={{ color: "white" }}
                >
                  Or
                </span>
                <div id="register-line2" className={styles['line']}></div>
              </div>

              <form id="register-form">
                <div
                  id="register-username-wrapper"
                  className={[styles['email-wrapper'], styles['input-wrapper']].join(' ')}
                >
                  <label htmlFor="username" className={styles['input-label']}>
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    className={styles['visually-hidden']}
                  />
                </div>
                <div
                  id="register-email-wrapper"
                  className={[styles['email-wrapper'], styles['input-wrapper']].join(' ')}
                >
                  <label htmlFor="email" className={styles['input-label']}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className={styles['visually-hidden']}
                  />
                </div>
                <div
                  id="register-password-wrapper"
                  className={[styles['password-wrapper'], styles['input-wrapper']].join(' ')}
                >
                  <label htmlFor="password" className={styles['input-label']}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className={styles['visually-hidden']}
                  />
                </div>
                <button
                  type="submit"
                  id="register-button"
                  className={styles['login-button']}
                  style={{ fontSize: "18px" }}
                >
                  Sign-up Now
                </button>
                {/* login */}
                <p
                  id="register-option"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  Already a member?{" "}
                  <a
                    id="register-link"
                    href="#"
                    style={{ color: "white" }}
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
