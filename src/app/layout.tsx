import './globals.css'
import type { Metadata } from 'next'

export const defaultTitle = 'MONTREMOI.MA'

export const metadata: Metadata = {
  title: `Home | ${defaultTitle}`,
  description: defaultTitle,
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png',
      fetchPriority: 'high',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
