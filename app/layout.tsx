//layout of content included on EVERY page
import '../app/styles/globals.css'
import type { Metadata } from 'next'
{/**Change to Poppins font */}
import { Poppins } from 'next/font/google'
import NavBar from '../src/components/NavBar'
import Copyright from '../src/components/Copyright'

const poppins = Poppins({ 
  subsets: ['latin'],
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

return (
  <html lang="en">
    {/**applying font Inter to body element */}
    <body>
      <div className='min-h-screen flex flex-col flex-grow flex-shrink'>
        <NavBar />
        {children}
      </div>
      <footer className='bottom-0 mt-full text-left'>
        <Copyright currentDate={new Date()} />
    </footer>
    </body>
  </html>
)
}
