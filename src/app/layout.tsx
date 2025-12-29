import type { Metadata } from 'next'
import { M_PLUS_Rounded_1c } from 'next/font/google'
// providers
import BundleProvider from '@/providers/bundle-provider'
// styles
import '@/styles/foundation/base.sass'

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    title: 'Web Toolkit',
    description: 'Web Toolkit は、開発者のためのブラウザだけで使えるツールセットです。',
    authors: [
        { name: 'coccoto' }
    ],
    openGraph: {
        url: process.env.NEXT_PUBLIC_BASE_URL as string,
        type: 'website',
        title: 'Web Toolkit',
        description: 'Web Toolkit は、開発者のためのブラウザだけで使えるツールセットです。',
        images: ['/favicons/favicon.png'],
    },
    icons: '/favicons/favicon.svg',
}

const GoogleFonts = M_PLUS_Rounded_1c({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
    preload: false,
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
