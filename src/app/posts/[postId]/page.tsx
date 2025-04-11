"use client";
import { useState } from "react";

const DetailsPost = ({ params }) => {
  const [postDetails, setPostDetails] = useState([]);
  const res = fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
    .then((res) => res.json())
    .then((data) => setPostDetails(data));
  return (
    <div>
      <h1 className="text-5xl">Know Details About {params.postId} </h1>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{postDetails.title}</h2>
          <p>{postDetails.body}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPost;
