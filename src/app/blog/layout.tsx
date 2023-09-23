import Header from '@/components/header'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className=''>
          <Header />

          <main className='flex min-h-[var(--screen-minus-header)] flex-col'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
