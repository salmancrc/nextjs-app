import React from 'react';
import Link from 'next/link';
import RootLayout from '../layout';

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

export default function BlogPage() {
  return (
    <div>
      <h1>Blog posts</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <div className='mb-4'>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

