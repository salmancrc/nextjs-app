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

const BlogPostsPage = ({ params }) => {
  // If the route is /blog (id is undefined or missing), show list, else show single post
  const { id } = params || {};

  if (!id) {
    // Show all posts (for /blog route)
    return (
      <div>
        <h1>Blog posts</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        ))}
      </div>
    );
  }

  // When id is present, show single post (for /blog/[id])
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

export default BlogPostsPage;
