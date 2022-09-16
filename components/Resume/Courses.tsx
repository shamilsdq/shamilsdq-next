import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

const Courses: FunctionComponent = () => (
    <section className={styles.courses}>
        <h3>Courses</h3>
        <div>
            <article>
                <h5>Algorithmic Toolbox, University of California San Diego</h5>
                <span>Coursera: November 2020</span>
            </article>
            <article>
                <h5>
                    Introduction to Data Science in Python, University of
                    Michigan
                </h5>
                <span>Coursera: October 2020</span>
            </article>
        </div>
    </section>
);

export default Courses;
