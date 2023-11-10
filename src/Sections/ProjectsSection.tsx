import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { projectsData } from "../Data/constants";
import ProjectImage from "../Components/ProjectImage";
import ProjectCard from "../Components/ProjectCard";

export default function ProjectsSection(props: any) {
  const [section, sectionThreshold] = useIntersectionObserver({
    threshold: 0.05,
    root: null,
    rootMargin: "80px",
  });
  const [isSmall, setIsSmall] = React.useState<boolean>(
    window.innerWidth < 900,
  );
  const [currentProject, setCurrentProject] = React.useState<number>(0);
  const mockContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => window.removeEventListener("resize", handleScreenResize);
  });

  function handleScreenResize() {
    setIsSmall(window.innerWidth < 900);
  }
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
    <div
      className={`py-20 ${
        sectionThreshold?.isIntersecting ? "opacity-100" : "opacity-0"
      } transition-opacity delay-500 duration-[1500ms]`}
      id={props.id}
    >
      <h1 className=" inline-flex w-full self-start text-2xl font-semibold after:my-auto after:ml-5 after:h-[1px] after:w-3/4 after:bg-white after:content-['']">
        <p className=" font-numbers text-accent">03.</p> Projects
      </h1>

      <div
        ref={section}
        className={` flex min-h-screen flex-col  items-center justify-center gap-40 regular:flex-row regular:items-start regular:gap-0`}
      >
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
