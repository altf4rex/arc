import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import Provider from '@/components/provider'

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] }) а мммм ват ?

export const metadata: Metadata = {
  title: 'Architecture',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-mainBg'>
      <body className='max-width container'>
        <Provider>
          <Header/>
          {children}
        </Provider>
      </body>
    </html>
  )
}
