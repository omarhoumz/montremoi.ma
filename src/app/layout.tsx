import type { Metadata } from 'next'
import Script from 'next/script'

import './globals.css'

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
      <body>
        {children}

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
        />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.GA_MEASUREMENT_ID}');
        `}
        </Script>
      </body>
    </html>
  )
}
