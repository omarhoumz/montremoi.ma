import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
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

        <section className='grid min-h-[max(750px,65vh)] grid-cols-1 gap-8 p-8 lg:grid-cols-2 [&>*]:max-lg:mx-auto'>
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

      <footer className='px-8 pb-24'>
        <section className='flex flex-wrap items-center gap-x-10 gap-y-3'>
          <h6>Partager</h6>
          <nav className='flex flex-wrap gap-x-4 text-sm font-bold uppercase'>
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
        `group flex w-full max-w-[680px] rounded-xl bg-cover bg-no-repeat p-6 md:aspect-[680/286] md:items-center md:p-8`,
        theme === 'dark' ? 'bg-gray-700' : null,
        className,
      )}
    >
      <p
        className={cn(
          'text-2xl font-bold transition-transform duration-500 ease-out group-hover:scale-105 sm:text-3xl lg:text-4xl',
          theme === 'dark' ? 'text-white' : null,
        )}
      >
        {title[0]}
        <br />
        {title[1]}
      </p>
    </article>
  )
}
