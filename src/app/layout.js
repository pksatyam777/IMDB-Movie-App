
import Providers from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import Headers from './Components/Header'
import Navbar from './Components/Navbar'
import SearchBox from './Components/SearchBox'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Movie',
  description: 'A Movie searching App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body><Providers ><Headers /><Navbar /> <SearchBox /> {children}</Providers></body>
    </html>
  )
}
