import { Playfair_Display_SC } from 'next/font/google'
import Link from 'next/link'

import { cn } from '@/lib/utils'

const playfair = Playfair_Display_SC({ subsets: ['latin'], weight: ['700'] })

export default function Header() {
  return (
    <header className='flex h-[var(--header-height)] items-center justify-between border-b-2 border-gray-100 bg-white px-6'>
      <Link
        href='/'
        className={cn(playfair.className, 'mx-auto text-lg leading-none')}
      >
        montremoi.ma
      </Link>

      {/* <nav className='hidden gap-6 font-light lg:flex'>
        <a href='/homme'>Montre pour Homme</a>
        <a href='/femme'>Montre pour Femme</a>
        <a href='/marque'>Marque</a>
        <a href='/'>Trouvez votre montre (à venir)</a>
        <a href='/'>Mes favoris (à venir)</a>
      </nav>

      <button className='text-sm font-bold uppercase lg:hidden'>Menu</button> */}
    </header>
  )
}
