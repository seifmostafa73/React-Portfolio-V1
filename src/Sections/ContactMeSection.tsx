import React from "react";
import { BsMailbox, BsGithub, BsLinkedin } from "react-icons/bs";
import { socialMediaLinks } from "../Data/constants";

export default function ContactMeSection() {
  return (
    <React.Fragment>
      <h1 className="mb-10 w-full justify-center self-center text-center text-3xl font-semibold before:my-auto before:mr-5 before:h-[1px] before:w-1/4 before:bg-white before:content-[''] after:my-auto after:ml-5 after:h-[1px] after:w-1/4 after:bg-white after:content-['']">
        Contact Me 🤝
      </h1>
      <p className="mb-10 text-center text-lg">
        I'm actively looking for new opportunities, my inbox is always open.
        <br />
        you can contact me via any of these socail platforms
        <br />
      </p>
      <div className="flex gap-4">
        <a className="h-5 w-5" href={socialMediaLinks.github}>
          <BsGithub color={"#64ffda"} />
        </a>
        <a className="h-5 w-5" href={socialMediaLinks.linkedIn}>
          <BsLinkedin color={"#64ffda"} />
        </a>
        <a className="h-5 w-5" href={socialMediaLinks.gmail}>
          <BsMailbox color={"#64ffda"} />
        </a>
      </div>
    </React.Fragment>
  );
}
