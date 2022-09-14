import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

import { Title, Profile, Details } from "components/Resume";

const Resume: FunctionComponent = () => (
    <div className={styles.resume}>
        <Title />
        <div>
            <main>
                <Profile />
            </main>
            <aside>
                <Details />
            </aside>
        </div>
    </div>
);

export default Resume;
