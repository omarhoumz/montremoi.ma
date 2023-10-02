import { cn } from '@/lib/utils'

export default function LinksSection() {
  return (
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
  )
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
