import type { Metadata } from 'next'
import './globals.css'
import { LenisProvider } from '@/components/ui/LenisProvider'
import { CursorProvider } from '@/hooks/useCursor'

export const metadata: Metadata = {
  title: 'Arittro Chowdhury — AI Development & MLOps',
  description:
    'Technology professional and MCA student specializing in AI development, cloud infrastructure, and MLOps engineering. Building intelligent systems at scale.',
  keywords: ['developer', 'portfolio', 'AI', 'MLOps', 'cloud', 'kubernetes', 'machine learning'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <CursorProvider>{children}</CursorProvider>
        </LenisProvider>
      </body>
    </html>
  )
}