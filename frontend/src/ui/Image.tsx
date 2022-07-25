import * as React from "react";
import cn from "classnames";

export default ({ src, className } : { src: string, className?: string }) => (
  <img src={src} className={cn(className)}/>
);
