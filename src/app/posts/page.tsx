"use client";
import PostCard from "@/components/ui/postCard";
import React, { useState } from "react";
import { Suspense } from "react";

const postsLoading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const res = fetch(`https://jsonplaceholder.typicode.com/todos/`)
    .then((res) => res.json())
    .then((data) => setPosts(data));
  return (
    <Suspense fallback={postsLoading}>
      <div className="grid grid-cols-3 gap-4">
        {posts.slice(0, 10).map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </Suspense>
  );
};

export default Posts;
