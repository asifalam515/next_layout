import Link from "next/link";
import React from "react";

const UsersRoute = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return (
    <div>
      <h1 className="text-3xl text-center">
        Showing All Users {users.length}{" "}
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {users.map((user) => (
          <div key={user.id} className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{user.name} </h2>
              <p>{user.email}</p>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`} className="btn btn-primary">
                  Show Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersRoute;
