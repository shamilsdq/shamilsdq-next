import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

type LinkType = { label: string; url: string };

const linksList: Array<LinkType> = [
    { label: "LinkedIn", url: "https://linkedin.com/in/shamilsdq" },
    { label: "GitHub", url: "https://github.com/shamilsdq" },
    { label: "HackerRank", url: "https://hackerrank.com/shamilsdq" },
    { label: "LeetCode", url: "https://leetcode.com/shamilsdq" },
];

const Links: FunctionComponent = () => (
    <section className={styles.links}>
        <h4>Links</h4>
        <ul>
            {linksList.map(({ label, url }) => (
                <li>
                    <a href={url}>{label}</a>
                </li>
            ))}
        </ul>
    </section>
);

export default Links;
