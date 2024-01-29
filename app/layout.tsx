import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Travel landing',
  description: 'Travel UI/UI landing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <body>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      </body>
    </html>
  )
}
