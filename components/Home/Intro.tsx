import { FunctionComponent } from "react";
import Image from "next/image";

import { GitHub, Linkedin } from "react-feather";
import dpImage from "assets/images/onam-1-cropped.png";
import styles from "styles/Home.module.css";

const Content: FunctionComponent = () => (
    <p>
        Hi, I'm <span>Shamil Siddique</span>, a full-stack developer from
        Kerala.
        <br />I love good code, good food and good people.
    </p>
);

const Social: FunctionComponent = () => (
    <ul>
        <li>
            <a href="https://linkedin.com/in/shamilsdq">
                <Linkedin size="1.25rem" />
                <span>LinkedIn</span>
            </a>
        </li>
        <li>
            <a href="https://github.com/shamilsdq">
                <GitHub size="1.25rem" />
                <span>GitHub</span>
            </a>
        </li>
    </ul>
);

const Intro: FunctionComponent = () => (
    <section className={styles.introContainer}>
        <div className={styles.introImage}>
            <Image src={dpImage} layout="responsive" />
        </div>

        <div className={styles.introContentContainer}>
            <Content />
            <Social />
        </div>
    </section>
);

export default Intro;
