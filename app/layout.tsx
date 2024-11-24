import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PowerAnywhere - Revolutionary Handheld Power Generators',
  description: 'Innovative handheld power generators that attach to anything. Power your devices anywhere, anytime, for any activity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

