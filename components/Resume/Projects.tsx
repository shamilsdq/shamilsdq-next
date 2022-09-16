import { FunctionComponent } from "react";

const Projects: FunctionComponent = () => (
    <section>
        <h3>Projects</h3>
        <div>
            <article>
                <h3>shamilsdq.dev</h3>
                <span>September 2022 - Present</span>
                <ul>
                    <li>Personal portfolio site</li>
                    <li>Built using Next.js and TypeScript</li>
                </ul>
            </article>
            <article>
                <h3>peer-chat</h3>
                <span>June 2021</span>
                <ul>
                    <li>Peer to Peer chat application for desktop users</li>
                    <li>Built using Java (JavaFx and sockets)</li>
                </ul>
            </article>
            <article>
                <h3>instabot</h3>
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
                <h3>attendance-tracker</h3>
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
