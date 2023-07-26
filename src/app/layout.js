
import Providers from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import Headers from './Components/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Movie',
  description: 'A Movie searching App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body><Providers ><Headers />{children}</Providers></body>
    </html>
  )
}
