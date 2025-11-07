import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LandingMVP - High-Converting Landing Pages for Startups',
  description: 'Create beautiful, high-converting landing pages for your startup or small business. Responsive, fast, and easy to customize.',
  keywords: 'landing page, startup, small business, conversion, responsive design',
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
