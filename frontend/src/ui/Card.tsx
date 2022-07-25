import * as React from "react";
import cn from "classnames";

export default ({ children, className } : { children: React.ReactNode, className?: string }) => (
  <div className={cn("p-10 m-5 border rounded shadow-lg bg-white", className)}>
    {children}
  </div>
);
