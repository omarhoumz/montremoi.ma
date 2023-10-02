import Link from 'next/link'

const socials = [
  { label: 'Facebook' },
  { label: 'Twitter' },
  { label: 'LinkedIn' },
  { label: 'Instagram' },
  { label: 'Pinterest' },
]

export default function Footer() {
  return (
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
  )
}
