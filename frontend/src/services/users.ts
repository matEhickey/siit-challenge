import { useQuery } from "@tanstack/react-query";

export type User = {
  "id": number,
  "avatar_url": string,
  "name": string,
  "position": string,
  "service_ids": number[],
}

const useUsers = () => {
  const { isLoading, error, data } = useQuery<User[]>(["users"], () =>
    fetch('http://localhost:3001/users.json').then(res =>
      res.json()
    )
  );

  return {
    users: data,
    isLoading,
    error,
  }
}

const useUsersFiltered = (serviceId: number | undefined) => {
  const { isLoading, error, data } = useQuery<User[]>(["users", serviceId], () =>
    fetch(`http://localhost:3001/users.json?service_id=${serviceId}`).then(res =>
      res.json()
    ),
    { enabled: serviceId !== undefined }
  );

  return {
    users: data as User[] | undefined,
    isLoading,
    error,
  }
}

export {
  useUsers,
  useUsersFiltered,
};
