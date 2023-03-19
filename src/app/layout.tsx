import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/Toast';
import { cn } from '@/lib/utils/utils';
import '@/styles/globals.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn('bg-white text-slate-900 antailiased', inter.className)}
    >
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
          {children}

          <Toaster position='bottom-right' />

          {/* @ts-expect-error Server Component */}
          <Navbar />
        </Providers>

        {/* Allow for more hieght on mobile divices */}
        <div className='h-40 md:hidden' />
      </body>
    </html>
  )
}
