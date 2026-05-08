import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Capsula — Наращивание волос в Бресте | @capsula_volos',
  description: 'Горячее капсульное, биопротеиновое и ленточное наращивание волос. Натуральный волос премиум-качества. Брест, мастер Анна.',
  keywords: ['наращивание волос', 'Брест', 'капсульное наращивание', 'биопротеин', 'ленточное наращивание'],
  openGraph: {
    title: 'Capsula — Наращивание волос в Бресте',
    description: 'Горячее капсульное, биопротеиновое и ленточное наращивание. Только натуральный волос.',
    url: 'https://capsula-volos.vercel.app',
    siteName: 'Capsula Volos',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
