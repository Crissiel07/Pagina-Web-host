import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Protovex',
  description: 'Desarrollo web',
  generator: 'Protovex',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
