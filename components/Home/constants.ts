import { Icon, Linkedin, GitHub } from "react-feather";

type Social = { label: string; url: string; icon: Icon };

const SOCIAL_LINKS: Array<Social> = [
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/shamilsdq",
    icon: Linkedin,
  },
  { label: "GitHub", url: "https://github.com/shamilsdq", icon: GitHub },
];

export { SOCIAL_LINKS };
