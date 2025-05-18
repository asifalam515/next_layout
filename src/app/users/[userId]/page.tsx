import React from "react";

const SingleUser = async ({ params }) => {
  const { userId } = await params;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await data.json();

  return (
    <div>
      <h1 className="text-5xl"> Details about the User: {userId} </h1>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title"> {user.name} </h2>
          <p>Address: {user.address.city}</p>
          <p>phone:{user.phone} </p>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
