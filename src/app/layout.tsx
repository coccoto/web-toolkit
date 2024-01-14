import Theme from '@/app/theme'
// components
import Header from '@/components/header/header.component'
import Footer from '@/components/footer/footer.component'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>Web Toolkit</title>
            </head>
            <body>
                <Theme>
                    <Header></Header>
                    <div>{children}</div>
                    <Footer></Footer>
                </Theme>
            </body>
        </html>
    )
}
