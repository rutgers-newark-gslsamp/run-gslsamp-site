//layout of content included on EVERY page
import '../app/styles/globals.css'
import type { Metadata } from 'next'
{/**Change to Poppins font */}
import { Poppins } from 'next/font/google'
import NavBar from '../src/components/NavBar'
import Copyright from '../src/components/Copyright'

const poppins = Poppins({ 
  subsets: ['devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
 });

export const metadata: Metadata = {
  title: 'GS-LSAMP Rutgers–Newark',
  description: 'The Louis Stokes Alliance for Minority Participation (LSAMP) program, funded by the National Science Foundation, is designed to increase the number of professionals from minority groups that are traditionally underrepresented in non-medical STEM fields (science, technology, engineering and math).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentYear = new Date().getFullYear();
return (
  <html lang="en">
    {/**applying font Inter to body element */}
    <body>
      <div className='min-h-screen flex flex-col flex-grow'>
        <NavBar />
        {children}
      </div>
      <footer className='mt-full text-left'>
        <Copyright currentYear={currentYear}/>
      </footer>
    </body>
  </html>
)
}
