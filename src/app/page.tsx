import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import Header from '@/components/header'

export default function Home() {
  return (
    <div className=''>
      <Header />

      <main>
        <section className='lg:min-h-[max(300px,85vh)] flex flex-wrap items-center justify-center p-8 gap-16'>
          <p
            className='text-2xl md:text-6xl font-bold max-w-[750px]'
            // @ts-ignore
            style={{ textWrap: 'balance' }}
          >
            Faites-vous plaisir avec une horlogerie de luxe
          </p>
          <Image
            src='/watch.png'
            alt='Generic watch'
            priority
            width={300}
            height={590}
            className='w-[300px] h-[300px] lg:h-[590px] max-w-full object-cover'
          />
        </section>

        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 min-h-[max(750px,65vh)] [&>*]:max-lg:mx-auto'>
          {/* Shout out to https://unsplash.com/@cy_entertainment for the background photo*/}
          <CategoryBlock
            className='bg-[url("/montre-homme.avif")] bg-right md:bg-[center_70%]'
            title={['Montre pour', 'Homme']}
          />

          {/* Shout out to https://unsplash.com/@laurachouette for the background photo*/}
          <CategoryBlock
            className='bg-[url("/montre-femme.avif")] bg-right-bottom max-sm:bg-[length:125%] md:bg-[center_92%]'
            title={['Montre pour', 'Femme']}
            theme='light'
          />
        </section>
      </main>

      <footer className='pb-24 px-8'>
        <section className='flex flex-wrap gap-x-10 gap-y-3 items-center'>
          <h6>Partager</h6>
          <nav className='flex flex-wrap gap-x-4 font-bold text-sm uppercase'>
            {socials.map(({ label }, index) => {
              return (
                <div key={index} className='leading-loose'>
                  {label}
                </div>
              )
            })}
          </nav>
        </section>

        <section className='pt-8'>
          <Link href='/blog'>Blog</Link>
        </section>
      </footer>
    </div>
  )
}

const socials = [
  { label: 'Facebook' },
  { label: 'Twitter' },
  { label: 'LinkedIn' },
  { label: 'Instagram' },
  { label: 'Pinterest' },
]

function CategoryBlock({
  className,
  theme = 'dark',
  title = [],
}: {
  className: string
  theme?: 'dark' | 'light'
  title: string[]
}) {
  return (
    <article
      className={cn(
        `group bg-no-repeat bg-cover rounded-xl w-full max-w-[680px] md:aspect-[680/286] flex md:items-center p-6 md:p-8`,
        theme === 'dark' ? 'bg-gray-700' : null,
        className
      )}
    >
      <p
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-bold transition-transform group-hover:scale-105 duration-500 ease-out',
          theme === 'dark' ? 'text-white' : null
        )}
      >
        {title[0]}
        <br />
        {title[1]}
      </p>
    </article>
  )
}
