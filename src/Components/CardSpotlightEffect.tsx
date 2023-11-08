import { useRef, useState } from "react";

interface CardSpotlightEffectProps {
  layoutClassName?: string;
  children: React.ReactNode;
}
function CardSpotlightEffect(props: CardSpotlightEffectProps) {
  //#region  Hooks
  const divRef = useRef<HTMLDivElement>(null); //refernece to our main div element
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // we will store the position of mouse relative to the div
  const [opacity, setOpacity] = useState(0);
  //#endregion

  // whem mouse moves over the div, we will store the position of mouse relative to the div
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect(); // get the size of div and its position relative to the viewport

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  function SpotLight(): React.JSX.Element {
    return (
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 50%)`,
        }}
      />
    );
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${props.layoutClassName} regular:max-w-md regular:px-8 relative  max-w-sm shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-tr from-slate-900 to-secondary px-4 pb-8 pt-16 text-center shadow-2xl`}
    >
      <SpotLight />
      {props.children}
    </div>
  );
}
export default CardSpotlightEffect;
