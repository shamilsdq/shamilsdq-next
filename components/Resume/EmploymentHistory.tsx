import { FunctionComponent } from "react";

const EmploymentHistory: FunctionComponent = () => (
    <section>
        <h3>Employment History</h3>

        <article>
            <h5>Software Engineer at BigBinary</h5>
            <span>July 2021 - Present</span>
            <ul>
                <li>
                    Actively contributed in a team to develop a healthcare data
                    platform for a major client.
                </li>
                <li>
                    Wrote high quality Rails and React code to build and update
                    features in multiple Neeto products.
                </li>
                <li>
                    Worked in setting up GitHub actions and clearing bugs for
                    neeto-ui (open source package).
                </li>
                <li>
                    Worked on migrating{" "}
                    <a href="https://neeto.com" target="_blank">
                        neeto.com
                    </a>{" "}
                    code base to Next.js and improving code quality.
                </li>
                <li>
                    Built knowledge base, quiz management, news feed
                    applications using Rails, React, Tailwind and PostgreSQL.
                </li>
            </ul>
        </article>

        <article>
            <h5>Freelance Developer</h5>
            <span>March 2020 - December 2020</span>
            <ul>
                <li>
                    Built HR management software prototypes in 2 different
                    stacks and environments to organize HR management across
                    multiple branches for a large supermarket chain.
                </li>
                <li>
                    Added features and fixed bugs for a drop shipping site that
                    worked by displaying Amazon products with recalculated price
                    and details.
                </li>
            </ul>
        </article>

        <article>
            <h5>Co-founder at Megham Labs</h5>
            <span></span>
            <ul>
                <li>
                    Researched, documented and implemented lead generation
                    techniques.
                </li>
                <li>
                    Created, organized and documented a client relations system.
                </li>
                <li>
                    Organized and documented an adaptive task-management system.
                </li>
            </ul>
        </article>
    </section>
);

export default EmploymentHistory;
