import * as React from "react";
import cn from "classnames";

export default ({ href, className, newTab, children } : { href: string, className?: string, children: React.ReactNode, newTab?: boolean }) => {
  const newTabProps = newTab ? {target:"_blank", rel: "noopener noreferrer"} : {};

  return (
    <a href={href} className={cn("text-blue-500 underline", className)} {...newTabProps}>
      {children}
    </a>
  );
}
