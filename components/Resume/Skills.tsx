import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

const skillsList: Array<string> = [
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Ruby on Rails",
    "Django",
    "Flutter",
    "SQL",
    "HTML5 & CSS3",
    "JavaScript",
    "Typescript",
    "Python",
];

const Skills: FunctionComponent = () => (
    <section className={styles.skills}>
        <h4>Skills</h4>
        <ul>
            {skillsList.map((skill) => (
                <li>{skill}</li>
            ))}
        </ul>
    </section>
);

export default Skills;
