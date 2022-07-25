import * as React from "react";
import cn from "classnames";

type TableProps = {
  headers: string[];
  children: React.ReactNode;
  className?: string;
};

export default ({ headers, children, className } : TableProps) => (
  <table className={cn("w-full table-auto", className)}>
    <thead>
      <tr>
        {headers.map(header => (
          <th key={header} className="text-start">{header}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {children}
    </tbody>
  </table>
);
