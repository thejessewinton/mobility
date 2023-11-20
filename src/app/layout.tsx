import '~/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import { type Metadata } from 'next'
import { cookies } from 'next/headers'

import { ThemeProvider } from '~/app/providers/theme-provider'
import { TRPCReactProvider } from '~/trpc/react'

export const metadata = {
  title: 'Mobility',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
} satisfies Metadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`font-sans ${GeistSans.variable}`}>
        <ThemeProvider>
          <TRPCReactProvider cookies={cookies().toString()}>
            <main className='flex min-h-screen flex-1 flex-col items-center justify-center'>{children}</main>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
