import React from 'react';

const posts = [
  {
    id: "1",
    title: "post 1",
    body: "post 1 body",
  },
  {
    id: "2",
    title: "post 2",
    body: "post 2 body",
  },
];

const BlogPostPage = async ({ params }) => {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};

export default BlogPostPage;
