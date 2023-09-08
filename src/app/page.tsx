import { Playfair_Display_SC } from 'next/font/google'
import Image from 'next/image'

const playfair = Playfair_Display_SC({ subsets: ['latin'], weight: ['900'] })

export default function Home() {
  return (
    <div className=''>
      <header className='h-16 flex items-center justify-between border-b-2 border-gray-100 px-6'>
        <a href='/' className={[playfair.className, 'leading-none'].join(' ')}>
          montremoi.ma
        </a>

        <nav className='flex gap-6 font-light'>
          <a href='/homme'>Montre pour Homme</a>
          <a href='/femme'>Montre pour Femme</a>
          <a href='/marque'>Marque</a>
          <a href='/'>Trouvez votre montre (à venir)</a>
          <a href='/'>Mes favoris (à venir)</a>
        </nav>

        <button className='uppercase font-bold text-sm'>Menu</button>
      </header>
      <main>
        <section className='min-h-[max(300px,85vh)] text-6xl font-bold flex items-center justify-center p-8'>
          <p
            className='max-w-[750px]'
            // @ts-ignore
            style={{ textWrap: 'balance' }}
          >
            Faites-vous plaisir avec une horlogerie de luxe
          </p>
          <div className='w-[300px] h-[590px] relative'>
            <Image
              src='/watch.png'
              alt='Generic watch'
              priority
              width={300}
              height={590}
              fill
              objectFit='cover'
            />
          </div>
        </section>

        <section className='grid grid-cols-2 gap-8 justify-center p-8 min-h-[max(400px,65vh)]'>
          {/* Shout out to https://unsplash.com/@cy_entertainment for the background photo*/}
          <CategoryBlock
            className='bg-[url("/montre-homme.avif")] bg-[center_70%]'
            title={['Montre pour', 'Homme']}
          />

          {/* Shout out to https://unsplash.com/@laurachouette for the background photo*/}
          <CategoryBlock
            className='bg-[url("/montre-femme.avif")] bg-[center_92%]'
            title={['Montre pour', 'Femme']}
            theme='light'
          />
        </section>
      </main>
      <footer className='pb-24 flex gap-x-10 items-center px-8'>
        <h6>Partager</h6>

        <nav className='flex gap-x-4 font-bold text-sm uppercase'>
          {socials.map(({ label }, index) => {
            return <div key={index}>{label}</div>
          })}
        </nav>
      </footer>
    </div>
  )
}

const socials = [
  { label: 'Facebook' },
  { label: 'Twitter' },
  { label: 'Linkedin' },
  { label: 'Intagram' },
  { label: 'Pinterest' },
]

function cx(...args: (string | null | undefined)[]): string {
  return args.filter(Boolean).join(' ')
}

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
      className={cx(
        `bg-no-repeat bg-cover rounded-xl w-[680px] h-[286px] flex items-center px-8`,
        theme === 'dark' ? 'bg-gray-700' : null,
        className
      )}
    >
      <p
        className={cx(
          'text-4xl font-bold',
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
