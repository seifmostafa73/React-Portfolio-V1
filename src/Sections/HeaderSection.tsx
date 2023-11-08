import React from "react";
import { TextTypingEffectWithTexts } from "../Components/TypingEffectText";

export default function HeaderSection() {
  return (
    <React.Fragment>
      <div className="my-40 flex min-h-full flex-col items-start px-10">
        <p className="inline-flex pb-2 pl-1 font-numbers text-base text-accent shadow-accent drop-shadow-lg">
          Hi there{" "}
          <picture>
            <source
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
              alt="👋"
              width="24"
              height="24"
            />
          </picture>{" "}
          , I'm
        </p>

        <h1 className="text-7xl font-semibold">Seif Mostafa</h1>
        <div className="font-heading text-3xl font-semibold text-gray-400">
          <TextTypingEffectWithTexts />
        </div>
        <p className="text-gray-400">
          Junior Software engineer with expertise in 🤖 machine learning and
          reinforcement learning, 📷 computer vision, 🌐 web applications , 💻
          desktop application and 🎮 game development.{" "}
          <span className="text-accent">
            Let's build something amazing together.
          </span>
        </p>
      </div>
    </React.Fragment>
  );
}
