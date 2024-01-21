// component
import Main from '@/components/main/main.component'
// theme
import Theme from '@/app/theme'
// styles
import '@/assets/styles/base/index.sass'

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html>
            <head>
                <meta charSet='utf-8'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
                <title>Web Toolkit</title>
                <meta name='description' content='Web Toolkit は、開発者のためのブラウザツールセットです。'></meta>
                <meta property='og:type' content='website'></meta>
                <meta property='og:url' content='https://webtoolkit.coccoto.com/'></meta>
                <meta property='og:title' content='Web Toolkit'></meta>
                <meta property='og:description' content='Web Toolkit は、開発者のためのブラウザツールセットです。'></meta>
                {/* <meta property='og:image' content='icon-512x512.png'></meta> */}
                {/* Twitter */}
                <meta name='twitter:card' content='summary'></meta>
                <meta name='twitter:creator' content='@coccoto'></meta>
                {/* Favicon */}
                {/* <link rel='icon' type='image/png' href='icon-32x32.png'></link> */}
                {/* <link rel='apple-touch-icon' href='icon-256x256.png'></link> */}
                {/* Google Fonts */}
                <link rel='preconnect' href='https://fonts.googleapis.com'></link>
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous'></link>
                <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500&display=swap'></link>
            </head>
            <body>
                <Theme>
                    <Main children={children}></Main>
                </Theme>
            </body>
        </html>
    )
}
