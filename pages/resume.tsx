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
    <>
        <p className={styles.resumeInfo}>
            This page is optimized for printing the resume. You can use the{" "}
            <b>print option from your browser</b> to print or save this resume
            as a PDF (Limited browser support). Alternatively, you can{" "}
            <b>download this resume as a PDF</b> with this{" "}
            <a
                href="/downloads/resume.pdf"
                rel="noreferrer"
                target="_blank"
                download
            >
                download link
            </a>
            .
        </p>
        <div className={styles.resumeContainer}>
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
        </div>
    </>
);

export default Resume;
