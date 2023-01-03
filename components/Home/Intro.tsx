import { FC } from "react";
import Image from "next/image";

import dpImage from "public/images/shamilsdq.png";

import { SOCIAL_LINKS } from "./constants";

const Intro: FC = () => (
  <section className="flex flex-col gap-10 sm:flex-row">
    <div className="flex-none w-40 h-40 mt-5 overflow-hidden rounded-full sm:w-36 sm:h-36 bg-gradient-to-tr from-violet-800 via-pink-500 to-orange-300">
      <Image src={dpImage} layout="responsive" alt="Shamil Siddique" />
    </div>
    <div className="flex flex-col">
      <p className="flex-1 font-serif text-4xl leading-relaxed text-neutral-500">
        Hi, I&apos;m <span className="text-white">Shamil Siddique</span>, a
        full-stack developer from Kerala.
        <br />I love working with good code, good food and good people.
      </p>
      <ul className="flex gap-4 list-none mt-7">
        {SOCIAL_LINKS.map(({ label, url, icon: IconComponent }) => (
          <li key={label} className="block">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-1 leading-none border rounded-3xl border-neutral-400 text-neutral-400 hover:text-neutral-100 hover:border-neutral-100"
            >
              <IconComponent size="1rem" />
              <span className="text-lg">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Intro;
