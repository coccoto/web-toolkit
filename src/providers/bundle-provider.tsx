// provider
import ThemeProvider from '@/providers/theme-provider'

const BundleProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}
export default BundleProvider
