import { Tooltip } from "flowbite-react";
import React from "react";

interface ItemProps {
  src?: string;
  alt?: string;
}
function Item(props: ItemProps): React.JSX.Element {
  return (
    <li key={props.alt}>
      <Tooltip content={props.alt} placement="top">
        <img
          className="max-w-16: mx-4 max-h-16"
          src={props.src}
          alt={props.alt}
        />
      </Tooltip>
    </li>
  );
}
export type listItem = { src: string; alt: string };
export enum InfiniteScrollDirection {
  left,
  right,
}
interface InfiniteScrollListProps {
  items: listItem[];
  to: InfiniteScrollDirection;
}
export default function InfiniteScrollList(props: InfiniteScrollListProps) {
  const directionAnimations = [
    "animate-infiniteScrollLeft",
    "animate-infiniteScrollRight",
  ];
  const renderedList = props.items.map((item: listItem) => (
    <Item key={item.alt} src={item.src} alt={item.alt} />
  ));
  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        className={`flex ${
          directionAnimations[props.to]
        } items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8`}
      >
        {renderedList}
      </ul>
      <ul
        className={`flex ${
          directionAnimations[props.to]
        } animate-infiniteScroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8`}
      >
        {renderedList}
      </ul>
    </div>
  );
}
