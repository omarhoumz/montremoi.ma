import { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

import { defaultTitle } from '@/app/layout'
import { Post, allPosts } from 'contentlayer/generated'

export async function generateStaticParams() {
  return allPosts
}

function getPost(slug: string): Post | undefined {
  return allPosts.find((post) => post._raw.flattenedPath === slug)
}

type ParamsProps = { slug: string }

type Props = {
  params: ParamsProps
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const post = getPost(params.slug)

  return { title: post?.title ? `${post?.title} | ${defaultTitle}` : '' }
}

export default function Page({ params }: { params: ParamsProps }) {
  const post = getPost(params.slug)

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
