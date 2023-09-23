import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

import { allPosts } from 'contentlayer/generated'

export async function generateStaticParams() {
  return allPosts
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  // 404 if the post does not exist.
  if (!post) notFound()

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className='lg:prose-x prose mx-auto max-w-3xl bg-white px-6 py-16 [&>h1]:text-3xl [&>h1]:[textWrap:balance]'>
      <MDXContent />
    </div>
  )
}
