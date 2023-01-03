import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import classnames from "classnames";

import { NAVIGATION_ITEMS } from "./constants";

const Navigation: FC = () => {
  const { pathname } = useRouter();

  const isActive = (route: string): boolean =>
    pathname?.split("/")?.[1] === route.slice(1);

  return (
    <nav className="flex-none w-full">
      <ul className="block space-x-4 list-none">
        {NAVIGATION_ITEMS.map(({ label, route }) => (
          <li
            key={label}
            className={classnames("inline-block font-medium text-lg", {
              "text-neutral-500": !isActive(route),
              "text-neutral-300": isActive(route),
            })}
          >
            <Link href={route}>
              <a className="block px-3 py-2 leading-none rounded-lg hover:bg-neutral-800">
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
