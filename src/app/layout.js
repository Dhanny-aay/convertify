import './globals.css'
import { Inter, Exo_2, Open_Sans } from 'next/font/google';

const inter = Inter({
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-inter',
  })

const exo = Exo_2({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo-2',
 })
const openSans = Open_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Open-Sans',
 })

export const metadata = {
  title: 'Convertify',
  description: 'The ultimate file conversion tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${exo.variable} ${openSans.variable} `}>{children}</body>
    </html>
  )
}
