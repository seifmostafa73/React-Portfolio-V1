import CardSpotlightEffect from "./CardSpotlightEffect";
import { MockUpType } from "./ProjectImage";
import BadgeOutlined from "../Components/Badge";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useRef } from "react";

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

export default function ProjectCard(props: ProjectCardProps) {
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
      className="flex flex-col items-center justify-center regular:min-h-screen"
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
