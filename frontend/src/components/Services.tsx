import * as React from 'react';

import { Table, Image, Link } from "../ui";
import { useServices } from "../services/services";

const ServicesList = () => {
  const {services = [], isLoading, error} = useServices();

  if(error) {
    return <p>Error</p>
  }
  if(isLoading) {
    return <p>Loading</p>
  }

  return (
    <Table headers={["Name", "Link", "Logo"]}>
      {services.map((service) => (
        <tr key={service.id}>
          <td><p>{service.name}</p></td>
          <td><Link newTab href={service.website_url}>{service.website_url}</Link></td>
          <td><Image src={service.logo_url} className="w-20 h-20" /></td>
        </tr>
      ))}
    </Table>
  )
}

export { ServicesList };
