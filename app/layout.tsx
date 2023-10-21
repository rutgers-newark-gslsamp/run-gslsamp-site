//layout of content included on EVERY page

import './globals.css'
import type { Metadata } from 'next'
{/**Change to Poppins font */}
import { Inter } from 'next/font/google'
import Nav from '../src/components/Nav'
import NavBar from '../src/components/NavBar'

const inter = Inter({ 
  subsets: ['latin'],
 })

export const metadata: Metadata = {
  title: 'GS-LSAMP Rutgers–Newark',
  description: 'The Louis Stokes Alliance for Minority Participation (LSAMP) program, funded by the National Science Foundation, is designed to increase the number of professionals from minority groups that are traditionally underrepresented in non-medical STEM fields (science, technology, engineering and math).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/**applying font Inter to body element */}
      <body className={inter.className}>
        <NavBar />
        {children}
        <footer>
            <p>Copyright ©2023, Rutgers, The State University of New Jersey</p>
        </footer>
      </body>
    </html>
  )
}
