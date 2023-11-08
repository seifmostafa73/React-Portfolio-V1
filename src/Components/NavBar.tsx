import { useWindowScroll } from "@uidotdev/usehooks";
import OctagonImage from "../Images/octagon-svgrepo-com.svg";
import React, { useDebugValue } from "react";
import { transform } from "typescript";
//#region Logo
interface LogoProps {
  href: string;
  onClick?: () => void;
}
function Logo(props: LogoProps): JSX.Element {
  return (
    <a onClick={props.onClick} href={props.href} className="h-46 relative">
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
  const sideMenu = React.useRef<HTMLDivElement>(null);
  const sideMenuState = React.useRef<boolean>(false);
  const overLay = React.useRef<HTMLDivElement>(null);
  if (y) {
    if (y > lastY.current) {
      isVisible.current = false;
    } else if (y < lastY.current) {
      isVisible.current = true;
    }
    lastY.current = y;
  }

  function HandleNavbarButton() {
    if (!sideMenu.current || !overLay.current) return;
    sideMenuState.current = !sideMenuState.current;
    const [firstFrame, secondFrame] = [
      { transform: `translateX(200%)`, opacity: 1 },
      { transform: `translateX(90%)`, opacity: 1 },
    ];

    if (sideMenuState.current === true) {
      sideMenu.current.classList.toggle("hidden");
      overLay.current.classList.toggle("hidden");
      document.body.style.overflow = "hidden";

      sideMenu.current.animate([firstFrame, secondFrame], {
        duration: 200,
        fill: "forwards",
        easing: "ease",
      });
    } else {
      const animation = sideMenu.current?.animate([secondFrame, firstFrame], {
        duration: 200,
        fill: "forwards",
        easing: "ease",
      });
      animation.onfinish = () => {
        sideMenu.current?.classList.toggle("hidden");
        overLay.current?.classList.toggle("hidden");
        document.body.style.overflow = "auto";
      };
    }
  }

  return (
    <React.Fragment>
      <div
        className={`fixed ${
          isVisible.current ? "top-0 opacity-100" : "-top-40 opacity-0"
        } z-20 flex min-h-[60px] min-w-full items-center justify-between px-[25px] pt-4 backdrop-blur-md transition-all duration-500`}
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
          onClick={HandleNavbarButton}
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

        <div
          ref={sideMenu}
          className="absolute top-0 z-50 hidden h-screen w-1/2 bg-secondary shadow-xl md:hidden"
        >
          <div className="flex h-5/6 flex-col items-center justify-around justify-self-center  pt-10">
            <Logo href="#HeaderSection" onClick={HandleNavbarButton} />
            <a
              className="font-numbers text-sm hover:text-accent"
              onClick={HandleNavbarButton}
              href="#AboutMeSection"
            >
              About Me
            </a>
            <a
              className="font-numbers text-sm hover:text-accent"
              onClick={HandleNavbarButton}
              href="#ExperienceSection"
            >
              Experinces
            </a>
            <a
              className="font-numbers text-sm hover:text-accent"
              onClick={HandleNavbarButton}
              href="#ProjectsSection"
            >
              Projects
            </a>

            <a
              className="font-numbers text-sm hover:text-accent"
              onClick={HandleNavbarButton}
              href="#ContactMeSection"
            >
              Contact me
            </a>
          </div>
        </div>
        <div
          ref={overLay}
          onClick={HandleNavbarButton}
          className="absolute left-0 top-0 hidden h-screen w-full bg-gray-900 opacity-80"
        ></div>
      </div>
    </React.Fragment>
  );
}
