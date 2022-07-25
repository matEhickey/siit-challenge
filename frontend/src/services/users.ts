import { useQuery } from "@tanstack/react-query";

type User = {
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

export {
  useUsers
};
