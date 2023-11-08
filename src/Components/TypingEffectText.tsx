import React from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";

const texts = ["Transforming Ideas into Code 🧑🏻‍💻"];

type TextTypingEffectProps = {
  isTypeByLetter?: boolean;
  duration?: number;
};

export const TextTypingEffectWithTexts: React.FC<TextTypingEffectProps> = ({
  isTypeByLetter = true,
  duration = 100,
}) => {
  const [textIndex, setTextIndex] = React.useState(0);
  const textToShow = useTypingEffect(
    texts[textIndex],
    duration,
    isTypeByLetter,
  );

  return <span key={textIndex}>{textToShow}</span>;
};
