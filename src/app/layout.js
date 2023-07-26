import Headers from './Components/Header'
import Providers from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Movie',
  description: 'A Movie searching App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}><Providers >{children}</Providers></body>
    </html>
  )
}
