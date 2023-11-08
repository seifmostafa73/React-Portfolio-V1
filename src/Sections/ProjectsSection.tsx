import React, { useEffect, useRef } from "react";
import CardSpotlightEffect from "../Components/CardSpotlightEffect";
import { Carousel } from "flowbite-react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { projectsData } from "../Data/constants";
import BadgeOutlined from "../Components/Badge";

type MockUpType = "mobile" | "desktop" | "None";

interface ProjectImageProps {
  screens?: string[];
  videos?: string[];
  scrollDelay: number;
  alt: string;
  type?: MockUpType;
  className?: string;
}

export interface ProjectCardProps {
  projectName: string;
  year: number;
  description: string;
  technologies?: string[];
  type?: MockUpType;
  images?: string[];
  videos?: string[];
  onVisibleCallback?: () => void;
}

function ProjectImage(props: ProjectImageProps) {
  const screensSlider: React.JSX.Element = (
    <Carousel
      slideInterval={props.scrollDelay}
      className="aspect-square  bg-gray-900"
    >
      {props.screens?.map((screen, index) => {
        return (
          <div className="aspect-w-16 aspect-h-9 bg-black">
            <img
              src={screen}
              alt={props.alt}
              className="h-full w-full object-scale-down"
            />
          </div>
        );
      })}
    </Carousel>
  );

  if (props.type === "mobile") {
    return (
      <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800">
        <div className="absolute -left-[17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800"></div>
        <div className="absolute -left-[17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800"></div>
        <div className="absolute -left-[17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800"></div>
        <div className="absolute -right-[17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800 dark:bg-gray-800"></div>
        <div className="flex h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-white dark:bg-gray-800">
          {props.screens && screensSlider}
          {props.videos && <video src={props.videos[0]} autoPlay loop />}
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[16px] border-gray-800 bg-gray-800 dark:border-gray-800 md:h-[294px] md:max-w-[512px]">
          <div className="h-[140px] overflow-hidden rounded-xl md:h-[262px]">
            {props.screens && screensSlider}
            {props.videos && <video src={props.videos[0]} autoPlay loop />}{" "}
          </div>
        </div>
        <div className="relative mx-auto h-[24px] max-w-[301px] rounded-b-xl bg-gray-900 dark:bg-gray-700 md:h-[42px] md:max-w-[512px]"></div>
        <div className="relative mx-auto h-[55px] max-w-[83px] rounded-b-xl bg-gray-800 md:h-[95px] md:max-w-[142px]"></div>
      </React.Fragment>
    );
  }
}

function ProjectCard(props: ProjectCardProps) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.5,
    root: null,
    rootMargin: "40px",
  });

  const hasCallbackRun = useRef(false);

  if (
    entry?.isIntersecting &&
    props.onVisibleCallback &&
    !hasCallbackRun.current
  ) {
    props.onVisibleCallback();
    hasCallbackRun.current = true;
  }
  if (entry?.isIntersecting === false) {
    hasCallbackRun.current = false;
  }

  return (
    <div
      ref={ref}
      className="regular:min-h-screen flex flex-col items-center justify-center"
    >
      <CardSpotlightEffect>
        <h1 className="pb-4 text-left font-bold text-accent">
          {props.projectName}
        </h1>
        <h2 className="pb-4 text-left font-numbers">{props.year}</h2>
        <p className="text-justify text-xs">{props.description}</p>

        {props.technologies && (
          <div className="flex flex-row flex-wrap justify-start gap-2 px-4 pb-4 pt-8">
            {props.technologies.map((tag) => {
              return <BadgeOutlined color="accent" text={tag} />;
            })}
          </div>
        )}
      </CardSpotlightEffect>
    </div>
  );
}

export default function ProjectsSection(props: any) {
  const [isSmall, setIsSmall] = React.useState<boolean>(
    window.innerWidth < 900,
  );
  const [currentProject, setCurrentProject] = React.useState<number>(0);
  const mockContainer = useRef<HTMLDivElement>(null);

  function handleScreenResize() {
    setIsSmall(window.innerWidth < 900);
  }

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => window.removeEventListener("resize", handleScreenResize);
  });

  function ChangeMockUp(projectInex: number) {
    if (!mockContainer.current || projectInex === currentProject) return;

    const scrollDirection = projectInex > currentProject ? "down" : "up";
    const fadeoutStart = scrollDirection === "down" ? 0 : 0;
    const fadeoutEnd = scrollDirection === "down" ? -1000 : 1000;
    // Fade out the current ProjectImage
    const hideMock = mockContainer.current.animate(
      [
        { transform: `translateY(${fadeoutStart}px)`, opacity: 1 },
        { transform: `translateY(${fadeoutEnd}px)`, opacity: 0 },
      ],
      {
        duration: 200, // Fade-out duration
        fill: "forwards",
        easing: "ease",
      },
    );

    hideMock.onfinish = () => {
      setCurrentProject(projectInex);
      const fadeinStart = scrollDirection === "down" ? 1000 : -1000;
      const fadeinEnd = scrollDirection === "down" ? 0 : 0;
      mockContainer.current?.animate(
        [
          { transform: `translateY(${fadeinStart}px)`, opacity: 0 },
          { transform: `translateY(${fadeinEnd}px)`, opacity: 1 },
        ],
        {
          duration: 500, // Fade-in duration
          fill: "forwards",
          easing: "ease",
        },
      );
    };
  }

  return (
    <div className="py-20" id={props.id}>
      <h1 className=" inline-flex w-full self-start text-2xl font-semibold after:my-auto after:ml-5 after:h-[1px] after:w-3/4 after:bg-white after:content-['']">
        <p className=" font-numbers text-accent">03.</p> Projects
      </h1>

      <div className="regular:flex-row regular:gap-0 regular:items-start  flex min-h-screen flex-col items-center justify-center gap-40">
        {!isSmall && (
          <React.Fragment>
            {" "}
            <div className="sticky left-0 right-1/2 top-0 flex h-screen w-1/2 items-center justify-center  text-black">
              <div ref={mockContainer} className="w-5/6">
                <ProjectImage
                  screens={projectsData[currentProject].images}
                  alt={projectsData[currentProject].projectName}
                  type={projectsData[currentProject].type}
                  videos={projectsData[currentProject].videos}
                  scrollDelay={1500}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-col items-center gap-96">
              {projectsData.map((project, index) => {
                return (
                  <ProjectCard
                    projectName={project.projectName}
                    year={project.year}
                    description={project.description}
                    images={project.images}
                    technologies={project.technologies}
                    onVisibleCallback={() => ChangeMockUp(index)}
                  />
                );
              })}
            </div>
          </React.Fragment>
        )}

        {isSmall && (
          <React.Fragment>
            {projectsData.map((project, index) => (
              <div key={index} className="items-center justify-center">
                <ProjectImage
                  screens={project.images}
                  alt={project.projectName}
                  type={project.type}
                  videos={project.videos}
                  scrollDelay={1500}
                />
                <ProjectCard
                  projectName={project.projectName}
                  year={project.year}
                  description={project.description}
                  images={project.images}
                  technologies={project.technologies}
                  onVisibleCallback={() => ChangeMockUp(index)}
                />
              </div>
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
