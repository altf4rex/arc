import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import Provider from '@/components/provider'
import Footer from '@/components/Footer/Footer'

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
    <html lang="en" className='bg-mainBg scroll-smooth'>
      <body className='max-width'>
        <Provider>
          <Header/>
            {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  )
}
