import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

const Details: FunctionComponent = () => (
    <section className={styles.details}>
        <h4>Details</h4>
        <ul>
            <li>Kochi, India</li>
            <li>+919605505563</li>
            <li>shamilsdq@live.com</li>
        </ul>
    </section>
);

export default Details;
