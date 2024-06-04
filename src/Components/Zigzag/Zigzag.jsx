import React from "react";
import BookMarks from "../../assets/landing/bookmark.svg";
import Creator from "../../assets/landing/creator.svg";
import Support from "../../assets/landing/support.svg";
import MainNext_1 from "../../assets/landing/main-next-1.png";
import MainNext_2 from "../../assets/landing/main-next-2.png";
import landing1 from "../../assets/landing/landing2.png";
import landing2 from "../../assets/landing/landing1.png";
import landing3 from "../../assets/landing/landing3.png";
import styles from "./Zigzag.module.css";

export default function Zigzag() {
    return (
        <div className={styles["circle-3"]}>
            <div className={styles["circle-3-main"]}>
                <div className={styles["circle-3-main-content"]}>
                    <div className={styles["circle-3-main-content-text-top"]}>
                        add amazing ui/ux elements
                    </div>
                    <h2 className={styles["circle-3-main-content-text-middle"]}>
                        use pre-build UI elements
                    </h2>
                    <p className={styles["circle-3-main-content-text-bottom"]}>
                        to improve the UI-UX feel of your site and make the pages more
                        attractive and a sight to look at.
                    </p>
                </div>
                <div className={styles["circle-3-main-content-image-holder"]}>
                    <img src={landing1} width="286" alt="img-1" />
                </div>
            </div>
            <div className={styles["circle-3-main-right"]}>
                <div className={styles["circle-3-main-content-image-holder"]}>
                    <img src={landing2} width="526" alt="img-2" />
                </div>
                <div className={styles["circle-3-main-content"]}>
                    <div className={styles["circle-3-main-content-text-top"]}>
                        efficient elements
                    </div>
                    <h2 className={styles["circle-3-main-content-text-middle"]}>
                        Make your site response quicker
                    </h2>
                    <p className={styles["circle-3-main-content-text-bottom"]}>
                        with carefully written code snippets the memory consumption and site
                        response time will be even less.
                    </p>
                </div>
            </div>
            <div className={styles["circle-3-main"]}>
                <div className={styles["circle-3-main-content"]}>
                    <div className={styles["circle-3-main-content-text-top"]}>
                        Resoposive elements to save your time
                    </div>
                    <h2 className={styles["circle-3-main-content-text-middle"]}>
                        Use Responsive elements with pre written code
                    </h2>
                    <p className={styles["circle-3-main-content-text-bottom"]}>
                        elements with pre-written codes to make them work responsive with
                        different screen sizes.
                    </p>
                </div>
                <div className={styles["circle-3-main-content-image-holder"]}>
                    <img src={landing3} width="341" alt="img-3" />
                </div>
            </div>

            <div className={styles["circle-3-main-support-images"]}>
                <div className={styles["circle-3-main-support-images-holder"]}>
                    <img src={BookMarks} alt="i-1" />
                    <h4>become a consumer</h4>
                    <p>
                        Log-in right now and use many free elements on our site to deploy
                        you own project.
                    </p>
                </div>
                <div className={styles["circle-3-main-support-images-holder"]}>
                    <img src={Creator} alt="i-2" />
                    <h4>become a contributor</h4>
                    <p>
                        Enable your creativity and create components and share on our site
                        with our users.
                    </p>
                </div>
                <div className={styles["circle-3-main-support-images-holder"]}>
                    <img src={Support} alt="i-3" />
                    <h4>support the site</h4>
                    <p>
                        purchase premium account and support our site to increase our range
                        and tools to give you more facilites.
                    </p>
                </div>
            </div>

            <div className={styles["circle-3-main-stats-images"]}>
                <div className={styles["circle-3-main-stats-images-holder"]}>
                    <div className={styles["circle-3-main-stats-images-number"]}>
                        +12k
                    </div>
                    <h4>Current Users</h4>
                </div>
                <div className={styles["circle-3-main-stats-images-holder"]}>
                    <div className={styles["circle-3-main-stats-images-number"]}>842</div>
                    <h4>number of components</h4>
                </div>
                <div className={styles["circle-3-main-stats-images-holder"]}>
                    <div className={styles["circle-3-main-stats-images-number"]}>12</div>
                    <h4>languages supported</h4>
                </div>
                <div className={styles["circle-3-main-stats-images-holder"]}>
                    <div className={styles["circle-3-main-stats-images-number"]}>515</div>
                    <h4>contributors</h4>
                </div>
            </div>
            <div className={styles["circle-3-main-features"]}>
                <div className={styles["circle-3-main-features-text"]}>
                    <div className={styles["circle-3-main-features-text-up"]}>
                        Device compatibility
                    </div>
                    <h2>Can work on multiple range of devices</h2>
                    <p></p>
                </div>
                <div className={styles["circle-3-main-features-image"]}>
                    <img src={MainNext_1} width="519" alt="" className="image-2" />
                </div>
            </div>
            <div className={styles["circle-3-main-features"]}>
                <div className={styles["circle-3-main-features-image"]}>
                    <img src={MainNext_2} width="519" alt="" className="image-2" />
                </div>
                <div className={styles["circle-3-main-features-text"]}>
                    <div className={styles["circle-3-main-features-text-up"]}>
                        Easy to deoploy
                    </div>
                    <h2 className={styles["circle-3-main-features-text-down"]}>
                        Multiple language support
                    </h2>
                    <p>
                        allows you to deploy elements in multiple elements in multiple
                        different languages{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
