// shared/svgs/ChevronDownIcon.tsx
import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

const ChevronDownIcon: React.FC<Props> = ({ className, width = 24, height = 24, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.46973 9.26513L6.53039 8.20447L12.0001 13.6741L17.4697 8.20447L18.5304 9.26513L12.0001 15.7955L5.46973 9.26513Z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronDownIcon;
