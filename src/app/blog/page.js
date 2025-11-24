import React, { Suspense } from 'react';
import Posts from './components/posts';

// const posts = [
//   {
//     id: "1",
//     title: "post 1",
//     body: "post 1 body",
//   },
//   {
//     id: "2",
//     title: "post 2",
//     body: "post 2 body",
//   },
// ];

export default async function BlogPage() {
  // const data = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
  // const posts = await data.json()

  const promise = fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  return (
    <div>
      <h1>Blog posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Posts promise={promise} />
      </Suspense>
    </div>
  );
}

