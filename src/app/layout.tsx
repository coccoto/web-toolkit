import Theme from '@/app/theme'
// components
import Header from '@/components/header/header.component'
import Footer from '@/components/footer/footer.component'
// styles
import styles from '@/app/layout.module.sass'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>Web Toolkit</title>
                {/* Google Fonts */}
                <link rel='preconnect' href='https://fonts.googleapis.com'></link>
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous'></link>
                <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500&display=swap'></link>
            </head>
            <body>
                <Theme>
                    <Header></Header>
                    <div className={styles['wrapper-application']}>{children}</div>
                    <Footer></Footer>
                </Theme>
            </body>
        </html>
    )
}
