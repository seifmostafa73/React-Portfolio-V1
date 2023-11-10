import { Carousel } from "flowbite-react";
import React from "react";

export type MockUpType = "mobile" | "desktop" | "None";

interface ProjectImageProps {
  screens?: string[];
  videos?: string[];
  scrollDelay: number;
  alt: string;
  type?: MockUpType;
  className?: string;
}

export default function ProjectImage(props: ProjectImageProps) {
  const screensSlider: React.JSX.Element = (
    <Carousel
      slideInterval={props.scrollDelay}
      className="aspect-video bg-gray-900"
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
          {props.videos && (
            <video
              className="aspect-video"
              src={props.videos[0]}
              autoPlay
              loop
            />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="mx-auto my-5 max-w-lg shadow-2xl ">
          <div className="flex h-10 w-full items-center justify-start space-x-1.5 rounded-t-lg bg-gray-900 px-3">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-400"></span>
          </div>
          <div className="h-fit w-full border-t-0 bg-primary">
            {props.screens && screensSlider}
            {props.videos && (
              <video
                className="aspect-video"
                src={props.videos[0]}
                autoPlay
                loop
              />
            )}{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
