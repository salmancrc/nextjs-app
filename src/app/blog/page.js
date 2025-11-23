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

export default async function BlogPage() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
  const posts = await data.json()

  return (
    <div>
      <h1>Blog posts</h1>
      <div className='mt-4'>
        {posts.map((post) => (
          <div key={post.id}  className='border mb-4'>
            <Link href={`/blog/${post.id}`}>
              <div className='p-4'>
                <h2 className='text-indigo-500'>{post.title}</h2>
                <div>{post.body}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

