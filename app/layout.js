import { ThemeProvider } from '@/components/theme-provider'
import { Toaster, ToastProvider } from '@/components/ui/toaster'
import { AuthProvider } from '@/components/auth-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google' // Make sure to import Inter

const inter = Inter({ subsets: ['latin'] })

export const metadata = { 
  title: 'Senior Dev Portfolio & Shop', 
  description: 'Tech, Football, and Gospel Journey of a Senior Developer',
}

export default function RootLayout({ children }) { 
  return ( 
    <html lang="en" suppressHydrationWarning> 
      <body className={`${inter.className} min-h-screen flex flex-col`}> 
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AuthProvider>
            <ToastProvider> {/* Add this wrapper */}
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <Toaster />
            </ToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}