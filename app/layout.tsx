import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BulkSchedule — Schedule Months of Social Content from Spreadsheets',
  description: 'Upload CSV or Excel files and automatically schedule posts across Twitter, LinkedIn, and Instagram with optimal timing. Built for content creators and social media managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="50ab9510-51d2-4d4a-9a76-e32cd9741544"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
