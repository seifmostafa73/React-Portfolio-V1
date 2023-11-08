import { useWindowScroll } from "@uidotdev/usehooks";
import OctagonImage from "../Images/octagon-svgrepo-com.svg";
import React, { useDebugValue } from "react";
//#region Logo
function Logo(props: { href: string }): JSX.Element {
  return (
    <a href={props.href} className="h-46 relative w-40">
      <img src={OctagonImage} />
      <div className="absolute inset-5 flex items-center justify-start">
        <h1 className="text-3xl font-semibold text-white">S</h1>
      </div>
    </a>
  );
}
//#endregion

//#region NavBarItems
interface NavBarItemProps {
  text: string;
  href?: string;
}
function NavBarItem(props: NavBarItemProps): JSX.Element {
  return (
    <li className="transform transition-all hover:-translate-y-0.5">
      <a
        href={props.href}
        className="justify-self-end font-numbers hover:text-accent"
      >
        {props.text}
      </a>
    </li>
  );
}
//#endregion

export default function NavBar(): JSX.Element {
  const [{ x, y }, setPosition] = useWindowScroll();
  const lastY = React.useRef<number>(0);
  const isVisible = React.useRef<boolean>(true);

  if (y) {
    if (y > lastY.current) {
      isVisible.current = false;
    } else if (y < lastY.current) {
      isVisible.current = true;
    }
    lastY.current = y;
  }

  return (
    <React.Fragment>
      <div
        className={`fixed ${
          isVisible.current ? "top-0 opacity-100" : "-top-40 opacity-0"
        } z-40 flex min-h-[60px] min-w-full items-center justify-between px-[25px] pt-4 backdrop-blur-md transition-all duration-500`}
      >
        <Logo href="#HeaderSection" />
        <ol className="hidden list-[decimal-leading-zero] items-center justify-evenly space-x-14 text-sm marker:font-numbers marker:slashed-zero marker:text-accent md:flex">
          <NavBarItem href="#AboutMeSection" text="About" />
          <NavBarItem href="#ExperienceSection" text="Experience" />
          <NavBarItem href="#ProjectsSection" text="Projects" />
          <NavBarItem href="#ContactMeSection" text="Contact" />
        </ol>
        <button
          type="button"
          className="block outline-2 outline-accent md:hidden"
        >
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
}
