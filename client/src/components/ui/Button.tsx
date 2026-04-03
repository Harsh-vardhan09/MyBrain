import type { ReactElement } from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const varientStyles = {
  primary: "bg-purple-600 text-white ",
  secondary: "bg-purple-300 text-purple-600 hover:bg-purple-400",
};

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultStyles = `rounded-md `;

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${varientStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}
    >
      <div className="flex items-center gap-2">
        {props.startIcon}
        {props.text}
        {props.endIcon}
      </div>
    </button>
  );
};

export default Button;
