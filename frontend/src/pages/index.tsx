import * as React from "react";

import { Layout, Card, Title } from "../ui";
import { UserList } from "../components/Users"
import { ServicesList } from "../components/Services"

export default () => (
  <Layout>
    <Card>
      <Title label="Users:" className="pl-0 pt-0 underline" />
      <UserList />
    </Card>
    <Card>
      <Title label="Services:" className="pl-0 pt-0 underline" />
      <ServicesList />
    </Card>
  </Layout>
);
