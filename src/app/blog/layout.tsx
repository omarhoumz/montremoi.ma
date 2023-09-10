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

          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
