import { FC } from "react";
import Image from "next/image";

import dpImage from "public/images/shamilsdq.png";
import styles from "styles/Home.module.css";

import { SOCIAL_LINKS } from "./constants";

const Intro: FC = () => (
  <section className={styles.introContainer}>
    <div className={styles.introImage}>
      <Image src={dpImage} layout="responsive" alt="Shamil Siddique" />
    </div>
    <div className={styles.introContentContainer}>
      <p>
        Hi, I&apos;m <span>Shamil Siddique</span>, a full-stack developer from
        Kerala.
        <br />I love good code, good food and good people.
      </p>
      <ul>
        {SOCIAL_LINKS.map(({ label, url, icon: IconComponent }) => (
          <li key={label}>
            <a href={url} target="_blank" rel="noreferrer">
              <IconComponent size="1.25rem" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Intro;
