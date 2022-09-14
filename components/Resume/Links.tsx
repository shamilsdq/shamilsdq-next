import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

const Links: FunctionComponent = () => (
    <section className={styles.links}>
        <h4>Links</h4>
        <ul>
            <li>
                <a href="https://linkedin.com/in/shamilsdq">LinkedIn</a>
            </li>
            <li>
                <a href="https://github.com/shamilsdq">GitHub</a>
            </li>
            <li>
                <a href="https://hackerrank.com/shamilsdq">HackerRank</a>
            </li>
            <li>
                <a href="https://leetcode.com/shamilsdq">LeetCode</a>
            </li>
            <li>
                <a href="https://stackoverflow.com/users/4657143/shamilsdq">
                    Stack Overflow
                </a>
            </li>
        </ul>
    </section>
);

export default Links;
