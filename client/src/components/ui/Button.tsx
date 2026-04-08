import type { ReactElement } from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?:Boolean
}
 
const varientStyles = {
  primary: "bg-purple-600 text-white ",
  secondary: "bg-purple-200 text-purple-600 hover:bg-purple-400",
};

const defaultStyles = `rounded-md px-4 py-2 font-light flex justify-center items-center gap-2`;

const Button = ({variant,text,startIcon,onClick,fullWidth}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${varientStyles[variant]} ${defaultStyles} ${fullWidth?'w-full':''}`}
    >
        {startIcon}
        {text}
    </button>
  );
};

export default Button;
