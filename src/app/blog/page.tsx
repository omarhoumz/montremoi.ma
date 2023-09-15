import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'

import { allPosts, Post } from 'contentlayer/generated'

export default function Page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className='px-6 py-16 max-w-md mx-auto'>
      <h1 className='mb-8 text-4xl font-light'>Blog</h1>

      {posts.map((post, idx) => (
        <PostLink key={idx} {...post} />
      ))}
    </div>
  )
}

function PostLink(post: Post) {
  return (
    <div className='mb-8'>
      <h2 className='mb-2 text-4xl font-black'>
        <Link
          href={post.url}
          className='underline decoration-wavy decoration-1 decoration-slate-800 underline-offset-2 hover:underline-offset-4 transition-all duration-500'
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className='mb-2 block text-xs text-gray-600'>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}
