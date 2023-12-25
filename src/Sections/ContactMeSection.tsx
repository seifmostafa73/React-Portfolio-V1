import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { TbBrandLeetcode } from "react-icons/tb";
import { socialMediaLinks } from "../Data/constants";
import { Tooltip } from "flowbite-react";
import type { Placement } from "@floating-ui/core";

interface SocialMediaIconProps {
  tooltipContent: string;
  tooltipPlacement: "auto" | Placement | undefined;
  linkHref: string;
  iconSize: string;
  iconColor: string;
  iconComponent: React.ElementType;
}

function SocialMediaIcon({
  tooltipContent,
  tooltipPlacement,
  linkHref,
  iconSize,
  iconColor,
  iconComponent: IconComponent,
}: SocialMediaIconProps): JSX.Element {
  return (
    <Tooltip content={tooltipContent} placement={tooltipPlacement}>
      <a className="h-10 w-10" href={linkHref}>
        <IconComponent size={iconSize} color={iconColor} />
      </a>
    </Tooltip>
  );
}

export default function ContactMeSection() {
  const iconsSize = "24px";
  const iconsColor = "#64ffda";
  return (
    <React.Fragment>
      <h1 className="mb-10 w-full justify-center self-center text-center text-3xl font-semibold before:my-auto before:mr-5 before:h-[1px] before:w-1/4 before:bg-white before:content-[''] after:my-auto after:ml-5 after:h-[1px] after:w-1/4 after:bg-white after:content-['']">
        Contact Me 🤝
      </h1>
      <p className="mb-10 text-center text-lg">
        I'm actively looking for new opportunities, my inbox is always open.
        <br />
        you can contact me via any of these social platforms
        <br />
      </p>
      <div className="flex gap-6">
        <SocialMediaIcon
          tooltipContent="Click to view my Leetcode profile"
          tooltipPlacement="bottom"
          linkHref={socialMediaLinks.leetcode}
          iconSize={iconsSize}
          iconColor={iconsColor}
          iconComponent={TbBrandLeetcode}
        />
        <SocialMediaIcon
          tooltipContent="Click to view my Github profile"
          tooltipPlacement="bottom"
          linkHref={socialMediaLinks.github}
          iconSize={iconsSize}
          iconColor={iconsColor}
          iconComponent={BsGithub}
        />
        <SocialMediaIcon
          tooltipContent="Click to view my LinkedIn profile"
          tooltipPlacement="bottom"
          linkHref={socialMediaLinks.linkedIn}
          iconSize={iconsSize}
          iconColor={iconsColor}
          iconComponent={BsLinkedin}
        />
        <SocialMediaIcon
          tooltipContent="Click to send me an email"
          tooltipPlacement="bottom"
          linkHref={socialMediaLinks.gmail}
          iconSize={iconsSize}
          iconColor={iconsColor}
          iconComponent={IoMdMail}
        />
      </div>
    </React.Fragment>
  );
}
