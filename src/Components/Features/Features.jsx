import React from "react";
import LandingMain_2 from "../../assets/landing/landing-main-2.png";
import styles from "./Features.module.css";

export default function Features() {
    return (
        <div id="container" className={styles["circle-2"]}>
            <div id="containerBox" className={styles["circle-2-main"]}>
                <div id="textContainer" className={styles["circle-2-main-content"]}>
                    <div
                        id="secondaryText"
                        className={styles["circle-2-main-content-up"]}
                    >
                        Build Your Own website
                    </div>
                    <h2 id="primaryText" className={styles["circle-2-main-content-down"]}>
                        Use our Snippets / Elements to <br /> boost your pages
                    </h2>
                </div>
                <div
                    id="imageContainer"
                    className={styles["circle-2-main-content-image"]}
                >
                    <img
                        id="featureImage"
                        src={LandingMain_2}
                        alt="loading..."
                        width="1050"
                    />
                </div>
            </div>
        </div>
    );
}
