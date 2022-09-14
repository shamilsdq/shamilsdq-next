import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

import { Title } from "components/Resume";

const Resume: FunctionComponent = () => (
    <div className={styles.resume}>
        <Title />
        <div>
            <main></main>
            <aside></aside>
        </div>
    </div>
);

export default Resume;
