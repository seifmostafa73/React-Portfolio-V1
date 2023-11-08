import React from "react";
import InfiniteScrollList, {
  InfiniteScrollDirection,
} from "../components/InfiniteScrollList";
import { profileImage, technologyItems } from "../Data/constants";

export default function AboutMeSection() {
  return (
    <React.Fragment>
      <h1 className=" mb-10 inline-flex w-full self-start text-2xl font-semibold after:my-auto after:ml-5 after:h-[1px] after:w-3/4 after:bg-white after:content-['']">
        <p className="font-numbers text-accent">01.</p>About me
      </h1>
      <div className="mx-10 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2">
        <p>
          Hello! My name is Seif Mostafa, and I'm a computer and electronics
          engineering graduate from Helwan University in 2023. I have a diverse
          skill set, including expertise in PYQt5, Wx Python, Unity game and app
          development using C#, Java Swing GUI, image processing, machine
          learning, reinforcement learning, OOP, system design, UI design,
          embedded systems (AVR, ARM), web development, and PCB design. I am
          proficient in several programming languages, including C#, Python,
          Typescript, C++, Java, embedded C, assembly (8086, AVR), SQL, and PHP.
        </p>
        <div className="relative max-w-xs rounded-md shadow-sm transition-transform hover:-translate-x-1 hover:-translate-y-1">
          <img
            src={profileImage}
            alt="Profile Image"
            className="h-auto w-full rounded-md"
          />
          <div className="absolute left-0 top-0 aspect-square h-auto w-full rounded-md bg-teal-800 opacity-60 transition-all hover:translate-x-5 hover:translate-y-5 hover:opacity-5"></div>
        </div>
      </div>

      <h1 className="pt-14 text-center text-3xl font-bold">Technogloies</h1>
      <InfiniteScrollList
        items={technologyItems}
        to={InfiniteScrollDirection.right}
      />
    </React.Fragment>
  );
}
