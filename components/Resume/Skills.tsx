import { FunctionComponent } from "react";

const skillsList: Array<string> = [
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Ruby on Rails",
    "Django",
    "Flutter",
    "SQL",
    "HTML5 & CSS3",
    "JavaScript",
    "Typescript",
    "Python",
];

const Skills: FunctionComponent = () => (
    <section>
        <h4>Skills</h4>
        <ul>
            {skillsList.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </section>
);

export default Skills;
