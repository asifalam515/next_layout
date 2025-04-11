"use client";
import PostCard from "@/components/ui/postCard";
import React, { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const res = fetch(`https://jsonplaceholder.typicode.com/todos/`)
    .then((res) => res.json())
    .then((data) => setPosts(data));
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </div>
  );
};

export default Posts;
