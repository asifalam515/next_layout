import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-3xl"> {post.title} </h2>

        <div className="card-actions justify-end">
          <Link href={`posts/${post.id}`} className="btn btn-primary">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
