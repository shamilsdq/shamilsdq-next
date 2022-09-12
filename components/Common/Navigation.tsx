import { FunctionComponent, useMemo } from "react";
import { useRouter } from "next/router";

type NavigationItemType = {
    label: string;
    href: string;
    isActive: boolean;
};

const getNavigationItems = (path: string): Array<NavigationItemType> => [
    { label: "Home", href: "/", isActive: path === "" },
    { label: "Posts", href: "/posts", isActive: path === "posts" },
    { label: "Resume", href: "/resume", isActive: path === "resume" },
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
                {navigationItems.map(({ label, href, isActive }) => (
                    <li className={isActive ? "active" : undefined}>
                        <a href={href}>{label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;