import React from "react";

export default function UserList({ user }) {
  return <li style={{ fontSize: "2rem" }}>{user.username}</li>;
}
