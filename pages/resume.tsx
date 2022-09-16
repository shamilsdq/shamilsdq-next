import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

import {
    Title,
    Profile,
    Details,
    Links,
    Skills,
    EmploymentHistory,
    EducationHistory,
    Courses,
    Projects,
} from "components/Resume";

const Resume: FunctionComponent = () => (
    <div className={styles.resume}>
        <Title />
        <div>
            <aside>
                <Details />
                <Links />
                <Skills />
            </aside>
            <main>
                <Profile />
                <EmploymentHistory />
                <EducationHistory />
                <Courses />
                <Projects />
            </main>
        </div>
    </div>
);

export default Resume;
