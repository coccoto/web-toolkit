import type { Metadata } from 'next'
import { M_PLUS_Rounded_1c } from 'next/font/google'
// providers
import BundleProvider from '@/providers/bundleProvider'
// styles
import '@/styles/foundation/base.sass'

export const metadata: Metadata = {
    title: 'Web Toolkit',
    description: 'Web Toolkit は、開発者のためのブラウザだけで使えるツールセットです。',
    authors: [
        { name: 'coccoto' }
    ],
    openGraph: {
        url: 'https://web-toolkit.coccoto.com/',
        type: 'website',
        title: 'Web Toolkit',
        description: 'Web Toolkit は、開発者のためのブラウザだけで使えるツールセットです。',
        images: ['/favicons/icon-512x512.png'],
    },
    twitter: {
        card: 'summary',
        creator: '@coccoto',
    },
    icons: {
        icon: '/favicons/icon-32x32.png',
        apple: '/favicons/icon-256x256.png',
    },
}

const GoogleFonts = M_PLUS_Rounded_1c({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={GoogleFonts.className}>
                <BundleProvider>
                    {children}
                </BundleProvider>
            </body>
        </html>
    )
}
