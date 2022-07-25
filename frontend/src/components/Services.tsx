import * as React from 'react';

import { Table, Image, Link, Button } from "../ui";
import { Service, useServices } from "../services/services";

type ServicesListProps = {
  selected: Service;
  onSelectService: (service: Service) => any;
};

const ServicesList = ({ selected, onSelectService } : ServicesListProps) => {
  const {services = [], isLoading, error} = useServices();

  if(error) {
    return <p>Error</p>
  }
  if(isLoading) {
    return <p>Loading</p>
  }

  return (
    <Table headers={["Name", "Link", "Logo", "Actions"]}>
      {services.map((service) => (
        <tr key={service.id}>
          <td><p>{service.name}</p></td>
          <td><Link newTab href={service.website_url}>{service.website_url}</Link></td>
          <td><Image src={service.logo_url} className="w-20 h-20" /></td>
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
