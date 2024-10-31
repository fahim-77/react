import React from "react";
import UserList from "./UserList";

export default function Users() {
  const users = [
    {
      id: 1,
      username: "fahimeh",
      password: "6892",
    },
    {
      id: 2,
      username: "amir",
      password: "9435",
    },
    {
      id: 3,
      username: "arvin",
      password: "1885",
    },
  ];
  return (
    <>
      <ul style={{ listStyleType: "square", color: "#E91E63" }}>
        {users.map((user) => (
          <UserList key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}
