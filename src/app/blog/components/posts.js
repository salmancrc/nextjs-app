'use client'

const Posts = () => {
  return (
    <div className='mt-4'>
      {posts.map((post) => (
        <div key={post.id} className='border mb-4'>
          <Link href={`/blog/${post.id}`}>
            <div className='p-4'>
              <h2 className='text-indigo-500'>{post.title}</h2>
              <div>{post.body}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Posts