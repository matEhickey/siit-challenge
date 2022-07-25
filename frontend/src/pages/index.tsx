import * as React from "react";

import { Layout, Card, Title, Button } from "../ui";
import { UserList } from "../components/Users"
import { ServicesList } from "../components/Services"
import { useUsers, useUsersFiltered } from "../services/users";
import { Service } from "../services/services";


type UsersViewProps = {
  service: Service;
  resetFilter: () => any
};

const UsersView = ({service, resetFilter}: UsersViewProps) => {
  const { users = [], isLoading, error } = useUsers();
  const {
    users: usersFiltered = [],
    isLoading: isLoadingFiltered,
    error: errorFiltered
  } = useUsersFiltered(service?.id);


  if(service) {
    if(errorFiltered) <p>Error</p>;
    if(isLoadingFiltered) return <p>Loading</p>;
    return (
      <>
        <p>Filter by service: {service.name}</p>
        <Button onClick={resetFilter}>Reset filter</Button>
        <div className="py-5" />
        <UserList users={usersFiltered}/>
      </>
    )
  }

  if(error) return <p>Error</p>;
  if(isLoading) return <p>Loading</p>;
  return <UserList users={users}/>;
};

export default () => {
  const [filteredByService, setFilteredByService] = React.useState<Service | undefined>();

  React.useEffect(() => {
    if(filteredByService !== undefined) {
      // scrolling on the top of the page to see results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [filteredByService]);

  return (
    <Layout>
      <Card>
        <Title label="Users:" className="pl-0 pt-0 underline" />
        <UsersView service={filteredByService} resetFilter={() => setFilteredByService(undefined)}/>
      </Card>
      <Card>
        <Title label="Services:" className="pl-0 pt-0 underline" />
        <ServicesList onSelectService={setFilteredByService} selected={filteredByService} />
      </Card>
    </Layout>
  );
}
