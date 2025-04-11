const BlogPost = ({ params }: { params: Promise<{ slug: string }> }) => {
  console.log(params.slug);
  return (
    <div>
      <h1 className="text-3xl">Blog Post</h1>
    </div>
  );
};

export default BlogPost;
