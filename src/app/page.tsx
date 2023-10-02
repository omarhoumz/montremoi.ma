import Image from 'next/image'

import Header from '@/components/header'

export default function Home() {
  return (
    <div className=''>
      <Header />

      <main>
        <section className='flex flex-wrap items-center justify-center gap-16 p-8 lg:min-h-[max(300px,85vh)]'>
          <p className='max-w-[750px] text-2xl font-bold [textWrap:balance] md:text-6xl'>
            Faites-vous plaisir avec une horlogerie de luxe
          </p>
          <Image
            src='/watch.png'
            alt='Generic watch'
            priority
            width={300}
            height={590}
            className='h-[300px] w-[300px] max-w-full object-cover lg:h-[590px]'
          />
        </section>
      </main>
    </div>
  )
}
