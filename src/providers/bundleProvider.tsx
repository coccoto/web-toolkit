// provider
import ThemeProvider from '@/providers/themeProvider'

const BundleProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}
export default BundleProvider
