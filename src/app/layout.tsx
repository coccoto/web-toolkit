import Head from 'next/head'
// component
import Main from '@/components/main/main.component'

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html>
            <Head>
                <title>Web Toolkit</title>
                {/* Google Fonts */}
                <link rel='preconnect' href='https://fonts.googleapis.com'></link>
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous'></link>
                <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500&display=swap'></link>
            </Head>
            <body><Main children={children}></Main></body>
        </html>
    )
}
