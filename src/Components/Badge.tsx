interface BadgeProps {
  color: string;
  darkColor?: string;
  text: string;
}
export default function BadgeOutlined(props: BadgeProps): JSX.Element {
  return (
    <span
      className={`mr-2 rounded border border-dotted border-accent px-2.5 py-0.5 text-xs font-normal text-${props.color} dark:bg-gray-700 dark:text-${props.darkColor} `}
    >
      {props.text}
    </span>
  );
}
