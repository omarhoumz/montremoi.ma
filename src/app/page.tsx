import Image from 'next/image'

import Header from '@/components/header'
import { BlockList } from './blog/page'

export default function Home() {
  return (
    <div>
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

        <section className='bg-slate-100'>
          <div className='mx-auto flex min-h-[28rem] w-full max-w-6xl flex-col px-6 py-16'>
            <h2 className='mb-8 text-sm uppercase text-slate-600'>
              Découvrez nos dernières actualités
            </h2>

            <BlockList />
          </div>
        </section>
      </main>
    </div>
  )
}
