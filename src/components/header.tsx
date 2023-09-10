import { Playfair_Display_SC } from 'next/font/google'

import { cn } from '@/lib/utils'

const playfair = Playfair_Display_SC({ subsets: ['latin'], weight: ['900'] })

export default function Header() {
  return (
    <header className='h-16 flex items-center justify-between border-b-2 border-gray-100 px-6'>
      <a href='/' className={cn(playfair.className, 'leading-none')}>
        montremoi.ma
      </a>

      <nav className='hidden lg:flex gap-6 font-light'>
        <a href='/homme'>Montre pour Homme</a>
        <a href='/femme'>Montre pour Femme</a>
        <a href='/marque'>Marque</a>
        <a href='/'>Trouvez votre montre (à venir)</a>
        <a href='/'>Mes favoris (à venir)</a>
      </nav>

      <button className='lg:hidden uppercase font-bold text-sm'>Menu</button>
    </header>
  )
}
