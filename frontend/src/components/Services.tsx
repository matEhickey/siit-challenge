import * as React from 'react';

import { Table, Image, Link, Button } from "../ui";
import { Service, useServices, countUsersUsingService, montlyCost } from "../services/services";
import { useUsers } from "../services/users";

type ServicesListProps = {
  selected: Service;
  onSelectService: (service: Service) => any;
};

const ServicesList = ({ selected, onSelectService } : ServicesListProps) => {
  const {services, isLoading, error} = useServices();
  // react-query is used as a context so it wont be re-fetching
  const {users, isLoading: isLoadingUser, error: errorUsers} = useUsers();

  const userCountByServices = React.useMemo(() => {
    if(users && services) {
      return countUsersUsingService(users, services);
    }
  }, [users, services]);

  if(error || errorUsers) {
    return <p>Error</p>;
  }
  if(isLoading || isLoadingUser) {
    return <p>Loading</p>;
  }


  return (
    <Table headers={["Name", "Link", "Logo", "Monthly cost", "Actions"]}>
      {services.map((service) => (
        <tr key={service.id}>
          <td><p>{service.name}</p></td>
          <td><Link newTab href={service.website_url}>{service.website_url}</Link></td>
          <td><Image src={service.logo_url} className="w-20 h-20" /></td>
          <td>
            {montlyCost(service, userCountByServices[service.id])}
          </td>
          <td>
            <Button onClick={() => onSelectService(service)} disabled={selected?.id === service.id}>
              Filter user list
            </Button>
          </td>
        </tr>
      ))}
    </Table>
  )
}

export { ServicesList };
