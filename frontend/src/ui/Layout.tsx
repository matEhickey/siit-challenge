import * as React from "react";

import { Header, Title } from ".";

export default ({ children } : { children: React.ReactNode }) => (
  <div>
    <Header>
      <Title label="Siit" className="text-white" />
    </Header>
    {children}
  </div>
);
