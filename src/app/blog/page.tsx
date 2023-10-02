import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'

import { isProduction } from '@/lib/utils'
import { allPosts, Post } from 'contentlayer/generated'

export default function Page() {
  const posts = allPosts
    .filter((post) => (!isProduction() ? true : post.published === 'published'))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className='mx-auto w-full max-w-4xl flex-grow bg-white px-6 py-16'>
      <h1 className='mb-8 text-4xl font-light'>Blog</h1>

      {!posts || posts?.length <= 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post, idx) => <PostLink key={idx} {...post} />)
      )}
    </div>
  )
}

function PostLink(post: Post) {
  return (
    <div className='mb-8'>
      <h2 className='mb-2 text-4xl font-bold [textWrap:balance]'>
        <Link
          href={post.url}
          className='underline decoration-slate-800 decoration-wavy decoration-1 underline-offset-2 hover:text-slate-700'
        >
          {post.title}
        </Link>
      </h2>
      <div className='flex items-center gap-x-3'>
        {isProduction() ? null : (
          <span className='rounded bg-slate-200 px-1 text-sm capitalize'>
            {post.published}
          </span>
        )}
        <time dateTime={post.date} className='text-xs text-gray-600'>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
    </div>
  )
}
