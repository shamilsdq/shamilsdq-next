import { FunctionComponent } from "react";
import styles from "styles/Resume.module.css";

const Projects: FunctionComponent = () => (
    <section className={styles.projects}>
        <h3>Projects</h3>
        <div>
            <article>
                <h5>shamilsdq.dev</h5>
                <span>September 2022 - Present</span>
                <ul>
                    <li>Personal portfolio site</li>
                    <li>Built using Next.js and TypeScript</li>
                </ul>
            </article>
            <article>
                <h5>peer-chat</h5>
                <span>June 2021</span>
                <ul>
                    <li>Peer to Peer chat application for desktop users</li>
                    <li>Built using Java (JavaFx and sockets)</li>
                </ul>
            </article>
            <article>
                <h5>instabot</h5>
                <span>August 2020</span>
                <ul>
                    <li>
                        Instagram bot to compare followers and following in
                        profile
                    </li>
                    <li>Built using Python and Selenium</li>
                </ul>
            </article>
            <article>
                <h5>attendance-tracker</h5>
                <span>September 2019</span>
                <ul>
                    <li>Offline attendance tracking app for mobile users</li>
                    <li>Built using Flutter and Sqflite</li>
                </ul>
            </article>
        </div>
    </section>
);

export default Projects;
