import * as React from "react";
import cn from "classnames";

export default ({ label, className } : { label: string, className?: string }) => (
  <h1 className={cn("text-xl p-5", className)}>
    {label}
  </h1>
);
