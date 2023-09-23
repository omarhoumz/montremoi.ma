import Image from 'next/image'

type ImageProps = { src: string; alt: string }

export default function PostImage({ src, alt }: ImageProps) {
  return <Image src={src} alt={alt} className='h-96 w-full object-cover' />
}
