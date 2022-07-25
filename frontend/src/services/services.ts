import { useQuery } from "@tanstack/react-query";
import { User } from "./users";

export type Service = {
  id: number,
  name: string,
  website_url: string,
  logo_url: string,
  price: {
    cost_per_user: number,
    flat_cost: number,
    nb_users_included: number,
  },
};

const useServices = () => {
  const { isLoading, error, data } = useQuery<Service[]>(["services"], () =>
    fetch('http://localhost:3001/services.json').then(res =>
      res.json()
    )
  );

  return {
    services: data,
    isLoading,
    error,
  }
}

const countUsersUsingService = (users: User[], services: Service[]) => {
  const initialCount = {};
  services.map(service => service.id).forEach((serviceName) => {
    initialCount[serviceName] = 0;
  });

  return users.reduce((acc, u) => {
    u.service_ids.forEach((serviceId) => {
      acc[serviceId] += 1;
    });
    return acc;
  }, initialCount);
};

const montlyCost = (service: Service, nbUsers: number) => {
  // something is wrong is the formula in the README: service 6 has 0 paying customer and 2 user included, so (nbUsers - nb_users_included) is <0,
  // we need to set it to zero so we dont substract from flat_cost

  // const payingUsers = (nbUsers - service.price.nb_users_included);
  const payingUsers = Math.max(nbUsers - service.price.nb_users_included, 0);
  return service.price.flat_cost + service.price.cost_per_user * payingUsers;
}

export {
  useServices,
  countUsersUsingService,
  montlyCost,
};
