import Link from "next/link";

const BlogPage = () => {
  return (
    <div>
      <h1 className="text-5xl">The Blogs</h1>{" "}
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        {" "}
        <Link href="/blog/post-2">Post 2</Link>{" "}
      </p>
    </div>
  );
};

export default BlogPage;
