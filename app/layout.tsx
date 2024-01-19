import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wicklif Ong\'owo',
  description: 'Mastered by mwafreaker',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/app/IME_OEM_ANDROID_oem_icon_h5_global_more6265_0210_default.png',
        href: '/app/IME_OEM_ANDROID_oem_icon_h5_global_more6265_0210_default.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/app/IME_OEM_ANDROID_oem_icon_h5_global_more6265_0210_default.png',
        href: '/app/IME_OEM_ANDROID_oem_icon_h5_global_more6265_0210_default.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} py-4`}>{children}</body>
    </html>
  )
}
