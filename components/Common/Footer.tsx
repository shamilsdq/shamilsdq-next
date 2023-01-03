import { FC } from "react";

const Footer: FC = () => (
  <footer className="flex justify-between flex-none w-full">
    <span className="block text-neutral-600">Shamil Siddique &copy; 2022</span>
    <a
      href="https://github.com/shamilsdq/shamilsdq-next"
      target="_blank"
      rel="noreferrer"
      className="block text-neutral-600 hover:text-neutral-400"
    >
      View source
    </a>
  </footer>
);

export default Footer;
