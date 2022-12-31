import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { NAVIGATION_ITEMS } from "./constants";

const Navigation: FC = () => {
  const { pathname } = useRouter();

  const isActive = (route: string): boolean =>
    pathname?.split("/")?.[1] === route.slice(1);

  return (
    <nav id="navigation">
      <ul>
        {NAVIGATION_ITEMS.map(({ label, route }) => (
          <li key={label} className={isActive(route) ? "active" : undefined}>
            <Link href={route}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
