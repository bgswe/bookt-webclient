import { Inter } from 'next/font/google'

import AuthenticationProvider from './authentication'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'bookt',
    description: 'Scheduling made easy!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthenticationProvider>{children}</AuthenticationProvider>
            </body>
        </html>
    )
}
