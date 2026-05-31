import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Compliance Form Generator',
  description: 'Generate GDPR-compliant forms and privacy policies instantly for your EU business.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="80d48968-fdb7-4c9d-a8bc-1dcc800a7d2d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
