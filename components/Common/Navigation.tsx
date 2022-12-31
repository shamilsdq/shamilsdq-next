import { FunctionComponent, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type NavigationItemType = {
    label: string;
    href: string;
    isActive: boolean;
};

const getNavigationItems = (path: string): Array<NavigationItemType> => [
    { label: "Home", href: "/", isActive: path === "" },
    { label: "Posts", href: "/posts", isActive: path === "posts" },
];

const Navigation: FunctionComponent = () => {
    const { pathname } = useRouter();

    const navigationItems: Array<NavigationItemType> = useMemo(
        () => getNavigationItems(pathname?.split("/")?.[1] ?? "_error"),
        [pathname]
    );

    return (
        <nav id="navigation">
            <ul>
                {navigationItems.map(({ label, href, isActive }, index) => (
                    <li className={isActive ? "active" : undefined} key={index}>
                        <Link href={href}>
                            <a>{label}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
