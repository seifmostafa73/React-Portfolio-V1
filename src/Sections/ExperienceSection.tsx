import React from "react";
import CardSpotlightEffect from "../components/CardSpotlightEffect";
import BadgeOutlined from "../components/Badge";
import { workExperiences } from "../Data/constants";

export type ExperinceInfo = {
  imageUrl: string;
  company: string;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  tags: string[];
  backgroundColor?: string;
};

export default function ExperienceSection() {
  const cardDateFormat: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };

  const ExperinceCards = workExperiences.map((experience) => {
    return (
      <CardSpotlightEffect layoutClassName="flex flex-col items-center justify-center">
        {/*This is the Expericne Image container*/}
        <span
          className={`mb-4 inline-flex items-center justify-center rounded-md bg-white p-2 shadow-lg`}
        >
          <img className="h-8 w-8" src={experience.imageUrl}></img>
        </span>

        <h1 className="pb-4">{experience.company} </h1>

        <h2 className=" pb-4">{experience.title}</h2>

        {/*This is the Expericne Date header*/}
        <h2 className="pb-4 font-numbers text-sm text-accent">
          {experience.startDate.toLocaleString("default", cardDateFormat)} -{" "}
          {experience.endDate.toLocaleString("default", cardDateFormat)}
        </h2>

        <p className="text-justify text-xs">{experience.description}</p>

        {/*This is the Expericne tags container*/}
        <div className="flex flex-row flex-wrap justify-start gap-2 px-4 pb-4 pt-8">
          {experience.tags.map((tag) => {
            return <BadgeOutlined color="accent" text={tag} />;
          })}
        </div>
      </CardSpotlightEffect>
    );
  });

  return (
    <React.Fragment>
      <h1 className=" mb-10 inline-flex w-full self-start text-2xl font-semibold after:my-auto after:ml-5 after:h-[1px] after:w-3/4 after:bg-white after:content-['']">
        <p className="font-numbers text-accent">02.</p> Experience
      </h1>
      <div className=" flex w-full flex-row justify-start gap-10 overflow-x-auto pb-10 align-middle regular:px-10 regular:[mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] ">
        {ExperinceCards}
      </div>
    </React.Fragment>
  );
}
