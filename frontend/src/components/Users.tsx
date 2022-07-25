import * as React from 'react';

import { Table, Image } from "../ui";
import type { User } from "../services/users";

const UserList = ({ users } : { users: User[]}) => (
  <Table headers={["Name", "Position", "Avatar"]}>
    {users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.position}</td>
        <td><Image src={user.avatar_url} className="w-20 h-20" /></td>
      </tr>
    ))}
  </Table>
);

export { UserList };
