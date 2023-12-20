import { Prisma } from "@prisma/client";
import React from "react";
import OptimizedImage from "./OptimizedImage";

interface PeopleProps {
  users: Prisma.UserGetPayload<{}>[];
}

const People = ({ users }: PeopleProps) => {
  return (
    <div>
      {users.map((user) => (
        <div className="w-8 h-8 " key={user.id}>
          <OptimizedImage src={user.image} />
        </div>
      ))}
    </div>
  );
};

export default People;
