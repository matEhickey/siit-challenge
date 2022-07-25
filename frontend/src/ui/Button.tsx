import * as React from "react";
import cn from "classnames";

type ButtonProps = {
  onClick: () => {};
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export default ({ onClick, children, disabled, className } : ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn(
      disabled ? "bg-gray-500 hover:bg-gray-700" : "bg-blue-500 hover:bg-blue-700",
      "text-white font-bold py-2 px-4 rounded", 
      className
    )}
  >{children}</button>
);
