import React from "react";
import LandingMain_1 from "../../assets/landing/landing-main.png";
import AppLogo from "../../assets/landing/codecanvaslogo.png";
import DropDown from "../../assets/landing/dropdown.svg";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div id="mainContainer" className={styles["circle-1"]}>
            <div id="navBarContainer" className={styles["circle-1-content"]}>
                <div id="navBar" className={styles["circle-1-nav"]}>
                    <img id="appLogo" src={AppLogo} alt="Loading..." />
                    <div id="menuContainer" className={styles["circle-1-nav-menu"]}>
                        <nav
                            id="menuOptions"
                            className={styles["circle-1-nav-menu-options"]}
                        >
                            <a
                                href=""
                                className={styles["landing-section1-nav-options-link"]}
                                id="about"
                            >
                                About
                            </a>
                            <a
                                href=""
                                className={styles["landing-section1-nav-options-link"]}
                                id="Dashboard"
                            >
                                Dashboard
                            </a>
                            <a
                                href=""
                                className={styles["landing-section1-nav-options-link"]}
                                id="components"
                            >
                                Components
                            </a>
                            <a
                                href=""
                                className={styles["landing-section1-nav-options-link"]}
                                id="pricing"
                            >
                                pricing
                            </a>
                        </nav>
                        <div
                            className={styles["circle-1-nav-menu-button"]}
                            id="circle-1-nav-menu-button-div"
                        >
                            <div
                                id="menuButtonContainer"
                                className={styles["circle-1-nav-menu-button-logo"]}
                            >
                                <img
                                    src={DropDown}
                                    alt="B"
                                    style={{ width: "14" }}
                                    id="drop-link-img"
                                />
                                <div
                                    className={styles["circle-1-nav-dropdown-menu"]}
                                    id="circle-1-nav-dropdown-menu-div"
                                >
                                    <a
                                        id="aboutOption"
                                        href=""
                                        className={styles["dropdown-link"]}
                                    >
                                        About
                                    </a>
                                    <a
                                        id="DashboardOption"
                                        href=""
                                        className={styles["dropdown-link"]}
                                    >
                                        Dashboard
                                    </a>
                                    <a
                                        id="componentsOption"
                                        href=""
                                        className={styles["dropdown-link"]}
                                    >
                                        Components
                                    </a>
                                    <a
                                        id="pricingOption"
                                        href=""
                                        className={styles["dropdown-link"]}
                                    >
                                        pricing
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mainContent" className={styles["circle-1-main-content"]}>
                <div id="contentText" className={styles["circle-1-main-content-text"]}>
                    <h1
                        id="primaryText"
                        className={styles["circle-1-main-content-text-up"]}
                    >
                        Boost your code
                    </h1>
                    <h3
                        id="secondaryText"
                        className={styles["circle-1-main-content-text-down"]}
                    >
                        Build your website or<span>web-applications </span>with help of our
                        snippets.
                    </h3>
                    <a id="signUpButton" href="">
                        Sign up
                    </a>
                    <a id="logInButton" href="">
                        log in
                    </a>
                </div>
                <img
                    id="mainImage"
                    src={LandingMain_1}
                    loading="lazy"
                    width="437"
                    alt=""
                />
            </div>
        </div>
    );
}
