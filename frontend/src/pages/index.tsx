import * as React from "react";

import { Layout, Card, Title } from "../ui";
import { UserList } from "../components/Users"

export default () => (
  <Layout>
    <Card>
      <Title label="Users:" className="pl-0 pt-0 underline" />
      <UserList />
    </Card>
  </Layout>
);
