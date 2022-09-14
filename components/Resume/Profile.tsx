import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

const Profile: FunctionComponent = () => (
    <section className={styles.profile}>
        <h3>Profile</h3>
        <ul>
            <li>
                <span>Quick Learner:</span> I am excited about learning new
                technologies, and adapt to them quickly.
            </li>
            <li>
                <span>Tool Independent:</span> I believe the requirements drive
                the tools. I adapt to languages/frameworks that are most apt for
                the task at hand.
            </li>
            <li>
                <span>Problem Solver:</span> I find the process of learning and
                solving complex problems quite exciting, and often spend my free
                time on Leetcode.
            </li>
            <li>
                <span>Clean Code Advocate:</span> I enjoy writing my code as
                clean as I can, and actively contribute to standardising the
                codebase in my projects.
            </li>
        </ul>
    </section>
);

export default Profile;
