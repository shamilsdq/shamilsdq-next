import { FunctionComponent } from "react";
import Image from "next/image";

import dpImage from "assets/images/onam-1-cropped.png";
import styles from "styles/Home.module.css";

const Content: FunctionComponent = () => (
    <p>
        Hi, I'm <span>Shamil Siddique</span>.
        <br />I love good code, good food and good people.
    </p>
);

const Intro: FunctionComponent = () => (
    <section className={styles.introContainer}>
        <div className={styles.introImage}>
            <Image src={dpImage} layout="responsive" />
        </div>

        <div className={styles.introContentContainer}>
            <Content />
        </div>
    </section>
);

export default Intro;
