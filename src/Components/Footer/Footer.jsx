import React from "react";
import Accordion from "../FAQs/Accordian";
import faqArray from "../FAQs/faqdata";
import styles from "../Footer/Footer.module.css";

export default function Footer() {
    return (
        <>
            <div id="signup-login" className={styles["circle-3-signup-login"]}>
                <div
                    id="signup-login-container"
                    className={styles["circle-3-signup-login-container"]}
                >
                    <h2 id="textHeading">You Ready to Join us?</h2>
                    <div
                        id="signup-login-button"
                        className={styles["circle-3-signup-login-button"]}
                    >
                        <a
                            id="signup-button"
                            href="#"
                            className={styles["circle-3-signup-button"]}
                        >
                            Sign-up
                        </a>
                        <a
                            id="login-button"
                            href="#"
                            className={styles["circle-3-login-button"]}
                        >
                            Log-in
                        </a>
                    </div>
                </div>
            </div>
            <div id="community" className={styles["circle-4-community"]}>
                <div
                    id="community-holder"
                    className={styles["circle-4-community-holder"]}
                >
                    <h2 id="textHeading1">Get updates from our community</h2>
                    <p id="textHeading2">
                        Get Emails Regarding this weeks popular components
                    </p>
                    <div id="formBlock" className={styles["form-block w-form"]}>
                        <form
                            id="community-form"
                            className={styles["circle-4-community-form"]}
                        >
                            <input
                                id="community-form-input"
                                className={styles["circle-4-community-form-input"]}
                                placeholder="Enter your email"
                                type="text"
                                required
                            />
                            <input
                                id="community-form-button"
                                className={styles["circle-4-community-form-button"]}
                                type="submit"
                            />
                        </form>
                        <div
                            id="successTextBox"
                            className={styles["circle-4-community-form-success-text"]}
                        >
                            <div id="successText">
                                Thank you! Your submission has been received!
                            </div>
                        </div>
                        <div
                            id="failureTextBox"
                            className={styles["circle-4-community-form-fail-text"]}
                        >
                            <div id="failureText">
                                Oops! Something went wrong while submitting the form.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="accordianContainer" className={styles.container}>
                <h2 id="accordianHeading">Frequently Asked Questions</h2>
                <div id="accordianContent" className={styles.accordion}>
                    {faqArray.map((items, index) => {
                        return (
                            <Accordion
                                key={index}
                                title={items.question}
                                content={items.answer}
                            />
                        );
                    })}
                </div>
            </div>
            <div id="copyrightContainer" className={styles.copyright}>
                <p id="copyrightText">&copy; 2024 CodeCanvas</p>
            </div>

            {/* <div className="circle-4-footer" id="circle-4-footer">
                <div className="circle-4-footer-holder">
                    <div className="circle-4-footer-links">
                        <a href='https://www.google.com' className="circle-4-footer-link">Email</a>
                        <a href='https://www.google.com' className="circle-4-footer-link">Instagram</a>
                        <a href='https://www.google.com' className="circle-4-footer-link">Facebook</a>
                        <a href='https://www.google.com' className="circle-4-footer-link">Twitter</a>
                        <a href='https://www.google.com' className="circle-4-footer-link">Some Kind of License Info</a>
                        <a href='https://www.google.com' className="circle-4-footer-link">Dipen</a>
                    </div>
                </div>
            </div> */}
        </>
    );
}
