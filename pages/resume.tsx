import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

import { Title, Profile, Details, Links, Skills } from "components/Resume";

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
            </main>
        </div>
    </div>
);

export default Resume;
