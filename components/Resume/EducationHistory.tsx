import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

const EducationHistory: FunctionComponent = () => (
    <section className={styles.educationHistory}>
        <h3>Education History</h3>
        <div>
            <article>
                <h5>
                    Bachelor of Technology in Computer Science, Cochin
                    University of Science and Technology
                </h5>
                <span>July 2017 - May 2021</span>
                <ul>
                    <li>
                        Major Project: Answer Sheet Auditor (Django, Flutter
                        Web, NLP)
                    </li>
                    <li>
                        Minor Project: Medicine Availability Locator (Django,
                        Flutter)
                    </li>
                </ul>
            </article>
        </div>
    </section>
);

export default EducationHistory;
