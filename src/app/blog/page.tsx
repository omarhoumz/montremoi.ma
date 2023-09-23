import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'

import { allPosts, Post } from 'contentlayer/generated'

export default function Page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div className='mx-auto w-full max-w-7xl flex-grow bg-white px-6 py-16'>
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
      <h2 className='mb-2 text-4xl font-bold'>
        <Link
          href={post.url}
          className='underline decoration-slate-800 decoration-wavy decoration-1 underline-offset-2 duration-500 [transition-property:text-underline-offset] hover:underline-offset-4'
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
